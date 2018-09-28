import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

class Historique extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Score des 5 dernière partie</Text>
                <FlatList data={[{key: 'a'}, {key: 'b'}]} renderItem={({item}) => <Text>{item.key}</Text>}/>
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

export default Historique