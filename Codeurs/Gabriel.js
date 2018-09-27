import React from 'react'
import {View, Text, Image } from 'react-native'
import styles from '../styles'

class Gabriel extends React.Component {

    render() {
        return (
                <View style={styles.main_container}>
                    <Image
                        style={styles.image}
                        source={require('../assets/Gabriel.png')}
                    />
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.Nom_text}>Gabriel</Text>
                            <Text style={styles.Age_text}>19 ans</Text>
                        </View>
                        <View style={styles.description_container}>
                            <Text style={styles.description_text} numberOfLines={6}>Description</Text>
                        </View>
                    </View>
                </View>
        )
    }
}
export default Gabriel