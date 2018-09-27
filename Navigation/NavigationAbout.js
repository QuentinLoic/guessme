import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Bilal from '../Codeurs/Bilal'
import Gabriel from '../Codeurs/Gabriel'
import Quentin from '../Codeurs/Quentin'
import QuentinLoic from '../Codeurs/QuentinLoic'

const TabNavigator = createBottomTabNavigator({
  Quentin: {
    screen: Quentin,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/qIcone.png')}
          style={styles.icon}/>
      }
    }
  },
  QuentinLoic: {
    screen: QuentinLoic,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/pIcone.png')}
          style={styles.icon}/>
      }
    }
  },
  Gabriel: {
    screen: Gabriel,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/gIcone.png')}
          style={styles.icon}/>
      }
    }
  },
  Bilal: {
    screen: Bilal,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/bIcone.png')}
          style={styles.icon}/>
      }
    }
  }
},
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
  })

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default TabNavigator