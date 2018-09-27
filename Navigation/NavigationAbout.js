import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Bilal from '../Codeurs/Bilal'
import Gabriel from '../Codeurs/Gabriel'
import Quentin from '../Codeurs/Quentin'
import QuentinLoic from '../Codeurs/QuentinLoic'

const TabNavigator = createBottomTabNavigator({
    Quentin: {
      screen: Quentin
    },
    QuentinLoic: {
      screen: QuentinLoic
    },
    Gabriel: {
      screen: Gabriel
    },
    Bilal: {
      screen: Bilal
    }
  })

export default TabNavigator