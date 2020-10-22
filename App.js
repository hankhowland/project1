
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Button, Vibration } from 'react-native';
import Instructions from './components/introscreen.js';
import Tutorial from './components/tutorial.js';
import Test from './components/test.js';
import SendTut from './components/sendingTutorial.js';
import {patternDict, emojinames, randomEmoji} from './sharedVars.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.testElement = React.createRef();
    this.state = {
      displayInstructions: true,
      displayTest: false,
      displayTutorial: false,
      displaySendTut: false,
      tutorialEmoji: 'angry'
    };
  };   

  
  render() {
    return (
      <View>
          <Instructions display={this.state.displayInstructions} runTutorial={this.runTutorial}  runTest={this.runTest} runSendTut={this.runSendTut} />
          <Tutorial display={this.state.displayTutorial} emoji={this.state.tutorialEmoji} />
          <Test ref={this.testElement} display={this.state.displayTest} testType={this.state.recieveType} exit={this.exitToIntroscreen}/>
          <SendTut display={this.state.displaySendTut} exit={this.exitToIntroscreen} />
      </View>
    );
  };

  //utility function that allows async await a certain number of ms functionality
  delay = ms => new Promise(res => setTimeout(res, ms));

  //runs the tutorial by changing state.tutorialEmoji to each emoji in turn and sending the corresponding vibration
  runTutorial = async (type) => {
    this.setState({
      displayInstructions: false,
      displayTutorial: true
    });
    //iterate through array of emoji names
    //set tutorialEmoji to that name
    //vibrate the corresponding vibration
    //await 5 seconds
    let name = '';
    for (let i=0; i<6; i++) {
      name = emojinames[i];
      this.setState({
        tutorialEmoji: name
      })
      Vibration.vibrate(eval(patternDict[name+type]));
      await this.delay(7000);
    }
    this.setState({
      displayInstructions: true,
      displayTutorial: false
    });
  };

  //passed to introscreen component and called when a run test button is pressed to display the test screen 
  //and send the first vibration
  runTest = async (type) => {
    this.setState({
      displayInstructions: false,
      displayTest: true,
      recieveType: type
    });
    this.testElement.current.sendVibration(randomEmoji())
  }

  runSendTut = () => {
    this.setState({
      displayInstructions: false,
      displaySendTut: true
    });
  }

  //passed to test component and called when the test is completed to revert back to introscreen component
  exitToIntroscreen = async () => {
    this.setState({
      displayInstructions: true,
      displayTest: false,
      displaySendTut: false
    });
  }
}






