import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Button,
    Vibration,
} from 'react-native';

class Instructions extends React.Component {
    render() {
        if (this.props.display) {
            return (
                <View>
                    <Text style={{ marginTop: 75, paddingLeft: 10, fontWeight: 'bold', fontSize: 25 }}>
                        RECEIVING:
                    </Text>
                    <TouchableOpacity
                        style={styles.btn1}
                        onPress={() => this.props.runTutorial(1)}>
                        <Text style={styles.btnText}>Run Tutorial (Pattern #1)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn1}
                        onPress={() => this.props.runTest(1)}>
                        <Text style={styles.btnText}>Run Test (Pattern #1)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn2}
                        onPress={() => this.props.runTutorial(2)}>
                        <Text style={styles.btnText}>Run Tutorial (Pattern #2)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn2}
                        onPress={() => this.props.runTest(2)}>
                        <Text style={styles.btnText}>Run Test (Pattern #2)</Text>
                    </TouchableOpacity>

                    <View style={{ borderBottomWidth: 3 }}></View>

                    <Text style={{ marginTop: 40, paddingLeft: 10, fontWeight: 'bold', fontSize: 25 }}>
                        SENDING:
                    </Text>
                    <TouchableOpacity
                        style={styles.btn1}
                        onPress={() => this.props.runSendTut('1')}>
                        <Text style={styles.btnText}>Run Tutorial (Pattern #1)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn1}
                        onPress={() => this.props.runSendTest(1)}>
                        <Text style={styles.btnText}>Run Test (Pattern #1)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn2}
                        onPress={() => this.props.runSendTut('2')}>
                        <Text style={styles.btnText}>Run Tutorial (Pattern #2)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn2}
                        onPress={() => this.props.runSendTest(2)}>
                        <Text style={styles.btnText}>Run Test (Pattern #2)</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return <View></View>;
        }
    }
}

const styles = StyleSheet.create({
    btn1: {
        alignItems: 'center',
        margin: 10,
        padding: 5,
        borderWidth: 1,
        backgroundColor: '#b3d9fc',
        borderRadius: 5,
    },
    btn2: {
        alignItems: 'center',
        margin: 10,
        padding: 5,
        borderWidth: 1,
        backgroundColor: '#c8fab1',
        borderRadius: 5,
    },
    btnText: {
        fontSize: 25,
        //fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default Instructions;
