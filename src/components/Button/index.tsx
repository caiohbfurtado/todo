import React from 'react'
import { TouchableHighlight, TouchableHighlightProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles'

export function Button({ ...rest }: TouchableHighlightProps) {
  return (
    <TouchableHighlight
      style={[styles.buttonContainer]}
      underlayColor="#4EA8DE"
      {...rest}
    >
      <AntDesign name="pluscircleo" size={18} color="white" />
    </TouchableHighlight>
  )
}
