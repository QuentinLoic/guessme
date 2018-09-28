import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


class About extends React.Component {

    quentinScreen = () => {
        this.props.navigation.navigate("Quentin")
    }

    qlScreen = () => {
        this.props.navigation.navigate("QuentinLoic")
    }

    gabrielScreen = () => {
        this.props.navigation.navigate("Gabriel")
    }

    bilalScreen = () => {
        this.props.navigation.navigate("Bilal")
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.toucheable} onPress={() => this.quentinScreen()}>
                    <Text style={styles.text}>Game</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toucheable} onPress={() => this.qlScreen()}>
                    <Text style={styles.text}>Game</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toucheable} onPress={() => this.gabrielScreen()}>
                    <Text style={styles.text}>Game</Text>                </TouchableOpacity>
                <TouchableOpacity style={styles.toucheable} onPress={() => this.bilalScreen()}>
                    <Text style={styles.text}>Game</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toucheable: {
        marginTop: 50,
        borderColor: 'black',
        width: 200,
        backgroundColor: '#323840',
        shadowOpacity: 1,
        borderRadius: 10,
        elevation: 10
    },
    text: {
        fontStyle: ('100', 'italic'),
        textAlign: 'center',
        color: '#EEEEEE',
        padding: 25
    }
});

export default About