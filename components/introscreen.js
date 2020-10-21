import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Vibration } from 'react-native';

class Instructions extends React.Component {
    render() {
    if (this.props.display) {
        return(
            <View>
                <Text style={{marginTop:40, paddingLeft:40, fontWeight:'bold'}}>RECIEVING:</Text>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.runTutorial(1)}>
                    <Text style={styles.btnText}>Run Tutorial 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.runTest(1)}>
                    <Text style={styles.btnText}>Run Test 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.runTutorial(2)}>
                    <Text style={styles.btnText}>Run Tutorial 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.runTest(2)}>
                    <Text style={styles.btnText}>Run Test 2</Text>
                </TouchableOpacity>
                <View style={{borderBottomWidth:3}}></View>
                <Text style={{marginTop:40, paddingLeft:40, fontWeight:'bold'}}>SENDING:</Text>
            </View>
            );
        }
    else {return(<View></View>)}
    };
};

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        margin:10,
        padding:5,
        borderWidth: 1,
        backgroundColor: '#d3d3d3',
        borderRadius: 5
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold'
    }
});


export default Instructions;




