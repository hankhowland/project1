'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {imageDict, emojinames, gestureDict} from '../sharedVars.js';

class SendTut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'swipe down fast to send an angry emoji',
          swipeDirection: '',
          correctEmoji: 'angry',
          emojiIndex: 0
        };
      }

    render() {
        if (this.props.display) {
            return (
                <View style={styles.cont}>
                    <Text style={{marginTop:20, fontWeight:'bold'}}>{this.state.text}</Text>
                    <PanGestureHandler onGestureEvent={this.props.type == 1 ? this.handleGesture1 : this.handleGesture2}>
                        <View style={styles.gestureReciever}></View>
                    </PanGestureHandler>
                    {(this.state.swipeDirection.length > 0) && <Image style={{marginTop:10, width:50, height:50}} source={eval(imageDict[this.state.swipeDirection])} />}
                    <TouchableOpacity style={{borderRadius: 5, backgroundColor: 'blue', marginTop:10, padding:10}} onPress={() => this.sendMessage()}>
                        <Text style={{fontSize:25, color:'white'}}>Send Emoji</Text>
                    </TouchableOpacity>
                </View>
            );}
        else {return <View><Text></Text></View>}
    }

    sendMessage = () => {
        const { correctEmoji, swipeDirection, emojiIndex} = this.state;
        if (correctEmoji == swipeDirection) {
            //advance to next emoji
            let nextEmoji = emojinames[emojiIndex +1];

            if (nextEmoji == undefined) {
                this.setState({
                    emojiIndex: 0,
                    correctEmoji: 'angry',
                    text:'swipe up quickly to send an angry emoji'
                })
                this.props.exit()
            }
            else {
                this.setState({
                    text: 'swipe ' + gestureDict[nextEmoji+this.props.type] + ' to send a ' + nextEmoji + ' emoji',
                    correctEmoji: nextEmoji,
                    emojiIndex: emojiIndex+1
                })
            };
        }
        else {
            //say try again and repeat the instructions
            this.setState({
                text: 'try again: ' + this.state.text
            })
        }
    }

    //GESTURE ENCODING 1
    handleGesture1 = (event) => {
        let{nativeEvent} = event
        let velY = nativeEvent.velocityY;
        let velX = nativeEvent.velocityX;
        if (velY < -700) {
            this.setState({
                swipeDirection: 'laugh'
              });
        }
        else if (velX > 700) {
            this.setState({
                swipeDirection: 'like'
              });
        }
        else if (velX < -700) {
            this.setState({
                swipeDirection: 'love'
              });
        }
        else if (velY > 700) {
            this.setState({
                swipeDirection: 'angry'
              });
        }
        else if (velY < -300) {
            this.setState({
                swipeDirection: 'happy'
            })
        }
        else if (velY > 300) {
            this.setState({
                swipeDirection: 'sad'
              });
        }
    }

    //GESTURE ENCODING 2
    handleGesture2 = (event) => {
        let{nativeEvent} = event
        let velY = nativeEvent.velocityY;
        let velX = nativeEvent.velocityX;
        if (velY < -700) {
            this.setState({
                swipeDirection: 'angry'
              });
        }
        else if (velX > 700) {
            this.setState({
                swipeDirection: 'sad'
              });
        }
        else if (velX < -700) {
            this.setState({
                swipeDirection: 'happy'
              });
        }
        else if (velY > 700) {
            this.setState({
                swipeDirection: 'laugh'
              });
        }
        else if (velX < -300) { //left slow
            this.setState({
                swipeDirection: 'like'
            })
        }
        else if (velX > 300) {
            this.setState({
                swipeDirection: 'love'
              });
        }
    }
};

const styles = StyleSheet.create({
    gestureReciever: {
        borderWidth: 1,
        marginTop:100,
        height:400,
        width:350

    },
    cont: {
        alignItems: 'center',
        marginTop: 75
    }
});



export default SendTut;
