import React from 'react'
import { StyleSheet } from 'react-native'

class styles extends React.Component {
    
    constructor(props) {
        super(props);
        this.styles
      }
    
    styles = StyleSheet.create({
        main_container: {
            height: 190,
            flexDirection: 'row'
        },
        image: {
            width: 120,
            height: 180,
            margin: 5,
            backgroundColor: 'gray'
        },
        content_container: {
            flex: 1,
            margin: 5
        },
        header_container: {
            flex: 3,
            flexDirection: 'row'
        },
        Nom_text: {
            fontWeight: 'bold',
            fontSize: 20,
            flex: 1,
            flexWrap: 'wrap',
            paddingRight: 5
        },
        Age_text: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#666666'
        },
        description_container: {
            flex: 7
        },
        description_text: {
            fontStyle: 'italic',
            color: '#666666'
        }
    })
}
export default styles