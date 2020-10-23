import { cyan } from "color-name";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Vibration,
} from "react-native";

class Instructions extends React.Component {
  render() {
    if (this.props.display) {
      return (
        <View>
          <Text
            style={{
              marginTop: 40,
              paddingLeft: 40,
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            RECEIVING EMOJIS
          </Text>
          <TouchableOpacity
            style={styles.tutorial_btn}
            onPress={() => this.props.runTutorial(1)}
          >
            <Text style={styles.btnText}>Tutorial 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trial_btn}
            onPress={() => this.props.runTest(1)}
          >
            <Text style={styles.btnText}>Test 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tutorial_btn}
            onPress={() => this.props.runTutorial(2)}
          >
            <Text style={styles.btnText}>Tutorial 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trial_btn}
            onPress={() => this.props.runTest(2)}
          >
            <Text style={styles.btnText}>Test 2</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 40, borderBottomWidth: 3 }}></View>

          <Text
            style={{
              marginTop: 40,
              paddingLeft: 40,
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            SENDING EMOJIS
          </Text>
          <TouchableOpacity
            style={styles.tutorial_btn}
            onPress={() => this.props.runSendTut("1")}
          >
            <Text style={styles.btnText}>Tutorial 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trial_btn}
            onPress={() => this.props.runSendTest(1)}
          >
            <Text style={styles.btnText}>Test 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tutorial_btn}
            onPress={() => this.props.runSendTut("2")}
          >
            <Text style={styles.btnText}>Tutorial 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trial_btn}
            onPress={() => this.props.runSendTest(2)}
          >
            <Text style={styles.btnText}>Test 2</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}

const styles = StyleSheet.create({
  tutorial_btn: {
    alignItems: "center",
    margin: 10,
    padding: 5,
    backgroundColor: "#d3d3d3",
    borderRadius: 5,
  },
  trial_btn: {
    alignItems: "center",
    margin: 10,
    padding: 5,
    backgroundColor: "cyan", //"#d3d3d3",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default Instructions;
