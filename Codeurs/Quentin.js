import React from 'react'
import {View, Text, Image } from 'react-native'
import styles from '../styles'

class Quentin extends React.Component {

    render() {
        return (
                <View style={styles.main_container}>
                    <Image
                        style={styles.image}
                        source={require('../assets/Quentin.png')}
                    />
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.Nom_text}>Quentin</Text>
                            <Text style={styles.Age_text}>20 ans</Text>
                        </View>
                        <View style={styles.description_container}>
                            <Text style={styles.description_text} numberOfLines={6}>Description</Text>
                        </View>
                    </View>
                </View>
        )
    }
}
export default Quentin