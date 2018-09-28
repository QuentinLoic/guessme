import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'


class Accueil extends React.Component {

    gameScreen = () => {
        this.props.navigation.navigate("Game")
    }

    createurScreen = () => {
        this.props.navigation.navigate("Createur")
    }

    histoScreen = () => {
        this.props.navigation.navigate("Historique")
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.toucheable} onPress={() => this.gameScreen()}>
                    <Text style={ styles.text }>Game</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toucheable} onPress={() => this.histoScreen()}>
                    <Text style={ styles.text }>Historique</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toucheable} onPress={() => this.createurScreen()}>
                    <Text style={ styles.text }>Les Créateurs</Text>
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

export default Accueil