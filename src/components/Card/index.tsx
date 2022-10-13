import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { styles } from './styles'

type CardProps = {
  title: string
  completed: boolean
  onCompleteTask: () => void
  onDeleteTask: () => void
}

export function Card({
  title,
  onCompleteTask,
  onDeleteTask,
  completed,
}: CardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCompleteTask}>
        {completed ? (
          <FontAwesome name="check-circle" size={24} color="#5E60CE" />
        ) : (
          <FontAwesome name="circle-o" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>
      <Text style={[styles.title, completed && styles.titleCompleted]}>
        {title}
      </Text>
      <Pressable
        onPress={onDeleteTask}
        style={({ pressed }) => [
          { padding: 8, borderRadius: 8 },
          pressed && { backgroundColor: '#333333' },
        ]}
      >
        {({ pressed }) => (
          <FontAwesome
            name="trash-o"
            size={24}
            color={pressed ? '#E25858' : '#808080'}
          />
        )}
      </Pressable>
    </View>
  )
}
