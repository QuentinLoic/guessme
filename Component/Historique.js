import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Historique extends React.Component {
    constructor(props){ super(props) }

    render() {
        return (
            <View>
                <Text>{this.props.Historique}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default Historique