import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    marginBottom: 8,
  },
  radio: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 999,
  },
  title: {
    flex: 1,
    marginHorizontal: 12,
    color: '#F2F2F2',
    fontSize: 14,
    flexGrow: 1,
    fontFamily: 'Inter_400Regular',
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
})
