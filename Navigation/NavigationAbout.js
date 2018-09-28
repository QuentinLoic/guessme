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
      title:'Créateurs',
      tabBarIcon: () => {
        return <Image
          source={require('../assets/qIcone.png')}
          style={styles.icon} />
      }
    }
  },
  QuentinLoic: {
    screen: QuentinLoic,
    navigationOptions: {
      title:'Créateurs',
      tabBarIcon: () => {
        return <Image
          source={require('../assets/pIcone.png')}
          style={styles.icon} />
      }
    }
  },
  Gabriel: {
    screen: Gabriel,
    navigationOptions: {
      title:'Créateurs',
      tabBarIcon: () => {
        return <Image
          source={require('../assets/gIcone.png')}
          style={styles.icon} />
      }
    }
  },
  Bilal: {
    screen: Bilal,
    navigationOptions: {
      title:'Créateurs',
      tabBarIcon: () => {
        return <Image
          source={require('../assets/bIcone.png')}
          style={styles.icon} />
      } 
    }
  }
},
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  })

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default TabNavigator