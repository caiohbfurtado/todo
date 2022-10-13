import React from 'react'
import { View, Image } from 'react-native'

import { styles } from './styles'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  )
}
