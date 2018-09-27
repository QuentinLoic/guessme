import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Game from '../Component/Game'
import About from '../Component/About'
import Accueil from '../Component/Accueil'
import Historique from '../Component/Historique'
import Bilal from '../Codeurs/Bilal'
import Gabriel from '../Codeurs/Gabriel'
import Quentin from '../Codeurs/Quentin'
import QuentinLoic from '../Codeurs/QuentinLoic'

const SearchStackNavigator = createStackNavigator({
  Accueil: { 
    screen: Accueil,
    navigationOptions: {
      title: 'Accueil'
    }
  },
  About: {
    screen: About
  },
  Game: { 
    screen: Game
  },
  Historique: {
    screen: Historique
  },
  Quentin: {
    screen: Quentin
  },
  QuentinLoic: {
    screen: QuentinLoic
  },
  Bilal: {
    screen: Bilal
  },
  Gabriel: {
    screen: Gabriel
  },
})

const TabNavigator = createBottomTabNavigator({
  Accueil: {
    screen: SearchStackNavigator,
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
  About: {
    screen: About,
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