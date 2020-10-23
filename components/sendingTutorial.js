"use strict";

import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { imageDict, emojinames, gestureDict } from "../sharedVars.js";

class SendTut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "swipe " + gestureDict["angry" + this.props.type] + " in the white box",
      swipeDirection: "",
      correctEmoji: "angry",
      emojiIndex: 0,
    };
  }

  render() {
    if (this.props.display) {
      return (
        <View style={styles.cont}>
          <Text style={{ marginTop: 50, fontSize: 30, fontWeight: "bold" }}>
            {"send the "}
            <Image
              style={{ width: 30, height: 30 }}
              source={eval(imageDict[this.state.correctEmoji])}
            />
            {" emoji"}
          </Text>
          <PanGestureHandler
            onGestureEvent={
              this.props.type == 1 ? this.handleGesture1 : this.handleGesture2
            }
          >
            <View style={styles.gestureReciever}></View>
          </PanGestureHandler>
          <Text style={{ marginTop: 20, fontSize: 18 }}>{this.state.text}</Text>
          {this.state.swipeDirection.length > 0 && (
            <Image
              style={{ marginTop: 10, width: 50, height: 50 }}
              source={eval(imageDict[this.state.swipeDirection])}
            />
          )}
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "blue",
              marginTop: 20,
              padding: 10,
            }}
            onPress={() => this.sendMessage()}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Send Emoji</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <Text></Text>
        </View>
      );
    }
  }

  sendMessage = () => {
    const { correctEmoji, swipeDirection, emojiIndex } = this.state;
    if (correctEmoji == swipeDirection) {
      //advance to next emoji
      let nextEmoji = emojinames[emojiIndex + 1];

      if (nextEmoji == undefined) {
        this.setState({
          emojiIndex: 0,
          correctEmoji: "angry",
          text:
            "swipe " +
            gestureDict["angry" + this.props.type] +
            " in the white box",
          swipeDirection: "",
        });
        this.props.exit();
      } else {
        this.setState({
          text:
            "swipe " +
            gestureDict[nextEmoji + this.props.type] +
            " in the white box",
          correctEmoji: nextEmoji,
          emojiIndex: emojiIndex + 1,
          swipeDirection: "",
        });
      }
    } else {
      //say try again and repeat the instructions
      this.setState({
        text: "try again: " + this.state.text,
      });
    }
  };

  //GESTURE ENCODING 1
  handleGesture1 = (event) => {
    let { nativeEvent } = event;
    let velY = nativeEvent.velocityY;
    let velX = nativeEvent.velocityX;
    if (velY < -700) {
      this.setState({
        swipeDirection: "laugh",
      });
    } else if (velX > 700) {
      this.setState({
        swipeDirection: "like",
      });
    } else if (velX < -700) {
      this.setState({
        swipeDirection: "love",
      });
    } else if (velY > 700) {
      this.setState({
        swipeDirection: "angry",
      });
    } else if (velY < -300) {
      this.setState({
        swipeDirection: "happy",
      });
    } else if (velY > 300) {
      this.setState({
        swipeDirection: "sad",
      });
    }
  };

  //GESTURE ENCODING 2
  handleGesture2 = (event) => {
    let { nativeEvent } = event;
    let velY = nativeEvent.velocityY;
    let velX = nativeEvent.velocityX;
    if (velY < -700) {
      this.setState({
        swipeDirection: "angry",
      });
    } else if (velX > 700) {
      this.setState({
        swipeDirection: "sad",
      });
    } else if (velX < -700) {
      this.setState({
        swipeDirection: "happy",
      });
    } else if (velY > 700) {
      this.setState({
        swipeDirection: "laugh",
      });
    } else if (velX < -300) {
      //left slow
      this.setState({
        swipeDirection: "like",
      });
    } else if (velX > 300) {
      this.setState({
        swipeDirection: "love",
      });
    }
  };
}

const styles = StyleSheet.create({
  gestureReciever: {
    borderWidth: 1,
    marginTop: 20,
    height: 400,
    width: 350,
  },
  cont: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default SendTut;
