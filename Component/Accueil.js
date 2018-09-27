import React from 'react'
import { View, Button, TouchableOpacity, StyleSheet, Text } from 'react-native'


class Accueil extends React.Component {

    gameScreen = () => {
        this.props.navigation.navigate("Game")
    }

    aboutScreen = () => {
        this.props.navigation.navigate("About")
    }

    histoScreen = () => {
        this.props.navigation.navigate("Historique")
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style = {{borderColor:'black', marginTop:10, padding: 15, backgroundColor:'#b8c6dd', shadowOpacity:1, width:200, borderRadius:10}} onPress={() => this.gameScreen()}>
                    <Button title='Game' onPress={() => this.gameScreen()}></Button>
                </TouchableOpacity>
                <TouchableOpacity style = {{borderColor:'black', marginTop:10, padding: 15, backgroundColor:'#b8c6dd', shadowOpacity:1, width:200, borderRadius:10}} onPress={() => this.histoScreen()}>
                    <Button title='Historique' onPress={() => this.histoScreen()}></Button>
                </TouchableOpacity>
                <TouchableOpacity style = {{borderColor:'black', marginTop:10, padding: 15, backgroundColor:'#b8c6dd', width:200, shadowOpacity:1, borderRadius:10}} onPress={() => this.aboutScreen()}>
                    <Button title='Les Créateurs' onPress={() => this.aboutScreen()}></Button>
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
    }
   });
export default Accueil