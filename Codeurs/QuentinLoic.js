import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class QuentinLoic extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={{ borderRadius: 10 }} source={require('../assets/Quentin-Loic.png')} />
                <View>
                    <View style={{ marginTop: 50, borderColor: 'black',width: 200, backgroundColor: '#323840', shadowOpacity: 1, borderRadius: 10, elevation: 10 }}>
                        <Text style={{ fontStyle: ('100', 'italic'), textAlign: 'center', color:'#EEEEEE', padding: 10}}>Quentin Loic</Text>
                    </View>
                    <View style={{ marginTop: 50, borderColor: 'black',width: 200, backgroundColor: '#323840', shadowOpacity: 1, borderRadius: 10, elevation: 10 }}>
                        <Text style={{ fontStyle: ('100', 'italic'), textAlign: 'center', color:'#EEEEEE', padding: 10}}>19 ans</Text>
                    </View>
                    <View style={{ marginTop: 50, borderColor: 'black', width: 200, backgroundColor: '#323840', shadowOpacity: 1, borderRadius: 10, elevation: 10 }}>
                        <Text style={{ fontStyle: ('100', 'italic'), textAlign: 'center', color:'#EEEEEE', padding: 10}} numberOfLines={6}>Va falloir trouver une Description les Gars ça va pas rester comme ça !!!</Text>
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
    }
});

export default QuentinLoic