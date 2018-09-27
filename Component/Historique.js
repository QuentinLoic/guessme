import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Historique extends React.Component {
    constructor(props){ super(props) }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.Historique}</Text>
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