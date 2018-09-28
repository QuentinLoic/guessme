import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class Quentin extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={{ borderRadius: 10 }} source={require('../assets/Quentin.png')} />
                <View>
                    <View style={styles.view}>
                        <Text style={styles.text}>Quentin</Text>
                    </View >
                    <View style={styles.view}>
                        <Text style={styles.text}>20 ans et toujours toutes ses dents</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text} numberOfLines={6}>Va falloir trouver une Description les Gars ça va pas rester comme ça !!!</Text>
                    </View>

                </View>
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
    view: {
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
        color:'#EEEEEE', 
        padding: 10
    }
});
   
export default Quentin