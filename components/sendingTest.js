"use strict";
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { imageDict, randomEmoji } from "../sharedVars.js";

//function setTrial() that will set the correctEmoji that the user will try to send
//they swipe in the box, setting the swipeDirection, and press send
//send calls sendMessage() which either says try again if its not correct, and increments numAttempts,
//or ends the trial, appends the correctEmoji and numAttempts to the data, sets state up for the next trial, and calls setTrial()
class SendTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      attempts: "",
      swipeDirection: "",
      correctEmoji: "angry",
      trial: 0,
      numAttempts: 0,
      data: [],
    };
  }

  render() {
    const { trial, correctEmoji } = this.state;
    if (this.props.display) {
      return (
        <View style={styles.cont}>
          <Text style={{ marginTop: 0, fontSize: 24, fontWeight: "bold" }}>
            trial {trial}: send the{" "}
            <Image
              style={{ width: 20, height: 20 }}
              source={eval(imageDict[correctEmoji])}
            />{" "}
            emoji
          </Text>
          <PanGestureHandler
            onGestureEvent={
              this.props.type == 1 ? this.handleGesture1 : this.handleGesture2
            }
          >
            <View style={styles.gestureReciever}></View>
          </PanGestureHandler>
          <Text style={{ marginTop: 20 }}>
            gesture options: swipe up, down, right, or left
          </Text>
          <Text style={{ marginTop: 5 }}>
            (swipe slowly or quickly for each direction)
          </Text>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "blue",
              marginTop: 20,
              padding: 10,
            }}
            onPress={() => this.sendMessage()}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Send Gesture</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20 }}>{this.state.text}</Text>
          <Text>{this.state.attempts}</Text>
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

  setTrial = (emoji) => {
    const { trial } = this.state;
    this.setState({
      correctEmoji: emoji,
      numAttempts: 0,
      trial: trial + 1,
    });
  };

  sendMessage = () => {
    const {
      correctEmoji,
      swipeDirection,
      data,
      numAttempts,
      trial,
    } = this.state;
    if (correctEmoji == swipeDirection) {
      if (trial < 30) {
        this.setState({
          text: "",
          attempts: "",
          data: data.concat([
            { emoji: correctEmoji, attempts: numAttempts + 1 },
          ]),
        });
        this.setTrial(randomEmoji());
      } else {
        this.setState({
          trial: 0,
          text: "",
        });
        console.log("SENDING TEST " + this.props.type + " RESULTS:");
        console.log(
          data.concat([{ emoji: correctEmoji, attempts: numAttempts + 1 }])
        );
        this.setState({
          data: [],
        });
        this.props.exit();
      }
    } else {
      //say try again and repeat the instructions
      this.setState({
        numAttempts: numAttempts + 1,
        text: "incorrect. try again...",
        attempts: "attempts: " + (numAttempts + 1),
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

export default SendTest;
