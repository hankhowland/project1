import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  Vibration,
} from "react-native";
import {
  emojinames,
  imageDict,
  patternDict,
  randomEmoji,
} from "../sharedVars.js";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctEmoji: "angry",
      numTries: 0,
      text: "",
      attempts: "",
      trials: 0,
      data: [],
    };
  }

  render() {
    if (this.props.display) {
      return (
        <View style={styles.cont}>
          <Text style={{ marginTop: 20, fontSize: 24, fontWeight: "bold" }}>
            tap the emoji you received
          </Text>
          {emojinames.map((name) => (
            <TouchableOpacity
              style={styles.cont}
              onPress={() => this.checkCorrect(name)}
            >
              <Image style={styles.img} source={eval(imageDict[name])} />
            </TouchableOpacity>
          ))}
          <Text style={{ marginTop: 20, fontSize: 18 }}>{this.state.text}</Text>
          <Text style={{ marginTop: 10, fontSize: 18 }}>
            {this.state.attempts}
          </Text>
        </View>
      );
    } else {
      return <View></View>;
    }
  }

  //prepares state for next trial, and sends vibration of emoji argument
  //unless max number of trials has been reached, then displays the results and exits to introscreen
  sendVibration = (emoji) => {
    if (this.state.trials < 5) {
      this.setState({
        correctEmoji: emoji,
        numTries: 0,
        text: "trial " + (this.state.trials + 1) + ": sending vibration...",
        trials: this.state.trials + 1,
      });
      //console.log(eval(patternDict[emoji+this.props.testType]));
      Vibration.vibrate(eval(patternDict[emoji + this.props.testType]));
    } else {
      console.log("RESULTS OF TEST " + this.props.testType);
      console.log(this.state.data);
      this.setState({
        data: [],
        trials: 0,
      });
      this.props.exit();
    }
  };

  //called on press of one of the emojis, checks if it is correct
  //if it is correct, records the trial in state.data,
  //and initiates next trial by calling sendVibration
  //if it isn't, increments numTries and waits for next attempt
  checkCorrect = (emoji) => {
    //console.log('correct: ' + this.state.correctEmoji);
    if (emoji == this.state.correctEmoji) {
      this.state.data.push([this.state.correctEmoji, this.state.numTries + 1]);
      this.setState({
        attempts: "",
      });
      this.sendVibration(randomEmoji());
    } else {
      this.setState({
        numTries: this.state.numTries + 1,
        text: "incorrect. try again...",
        attempts: "attempts: " + (this.state.numTries + 1),
      });
    }
  };
}

const styles = StyleSheet.create({
  div: {
    marginTop: 10,
  },
  cont: {
    alignItems: "center",
    padding: 0,
    marginTop: 30,
  },
  img: {
    height: 50,
    width: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
});

export default Test;
