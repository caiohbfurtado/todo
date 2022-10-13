import React from 'react'
import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'

type OptionButtonProps = TouchableOpacityProps & {
  title: string
  quantity: number
  completed?: boolean
}

export default function OptionButton({
  title,
  quantity,
  completed,
  ...rest
}: OptionButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={[styles.title, completed && styles.completedText]}>
        {title}
      </Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{quantity}</Text>
      </View>
    </TouchableOpacity>
  )
}
