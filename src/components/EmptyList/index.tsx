import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

import clipboard from '../../assets/clipboard.png'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />
      <Text style={styles.boldText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
