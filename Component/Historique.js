import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Historique extends React.Component {

    componentDidUpdate() {
        console.log(this.props.histoScore)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Score des 5 dernière partie</Text>
                <TouchableOpacity style={styles.toucheable} onPress={() => this.componentDidUpdate()}><Text style={styles.text}>Va voir les logs</Text></TouchableOpacity>
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
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        color: '#EEEEEE',
        padding: 10
      }
   });

   const mapStateToProps = (state) => {
    return {
      histoScore: state.histoScore
    }
  }
  
export default connect(mapStateToProps)(Historique)