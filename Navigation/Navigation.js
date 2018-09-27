import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Game from '../Component/Game'
import About from '../Component/About'
import Accueil from '../Component/Accueil'
import Historique from '../Component/Historique'

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
  }
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