import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Game from '../Component/Game'
import Createur from '../Component/Createur'
import Accueil from '../Component/Accueil'
import Historique from '../Component/Historique'

const TabNavigator = createBottomTabNavigator({
  Accueil: {
    screen: Accueil,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/accueilIcone.png')}
          style={styles.icon}/>
      }
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/gameIcone.png')}
          style={styles.icon}/>
      }
    }
  },
  Createur: {
    screen: Createur,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/crayonIcone.png')}
          style={styles.icon}/>
      }
    }
  },
  Historique: {
    screen: Historique,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/histoIcone.png')}
          style={styles.icon}/>
      }
    }
  },
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