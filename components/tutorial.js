import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { imageDict } from "../sharedVars.js";

class Tutorial extends React.Component {
  render() {
    if (this.props.display) {
      return (
        <View style={styles.cont}>
          <Image source={eval(imageDict[this.props.emoji])} />
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}

const styles = StyleSheet.create({
    cont: {
        alignItems: 'center',
        padding:100,
	marginTop: 100
    }
});

export default Tutorial;
