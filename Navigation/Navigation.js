import React from 'react'
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
    screen: SearchStackNavigator
  },
  Game: {
    screen: Game
  },
  About: {
    screen: About
  },
  Historique: {
    screen: Historique
  }
})

export default TabNavigator