import { StyleSheet, TextStyle } from 'react-native'

const textProps: TextStyle = {
  fontSize: 14,
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...textProps,
    color: '#4ea8de',
    fontFamily: 'Inter_700Bold',
  },
  completedText: {
    ...textProps,
    color: '#8284FA',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 999,
    marginLeft: 8,
  },
  badgeText: {
    color: '#d9d9d9',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
  },
})
