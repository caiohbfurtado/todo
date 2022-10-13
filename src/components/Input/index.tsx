import React, { useRef, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles'

export function Input({ value = '', ...rest }: TextInputProps) {
  const inputRef = useRef<TextInput>(null)
  const [focused, setFocused] = useState(false)

  function handleChangeFocus() {
    if (focused) {
      inputRef.current?.blur()
      setFocused(false)
      return
    }

    setFocused(true)
    inputRef.current?.focus()
  }

  const isFocused = focused || value.length > 0

  return (
    <TextInput
      ref={inputRef}
      style={[styles.textInput, isFocused && styles.textInputFocused]}
      placeholderTextColor="#808080"
      onFocus={handleChangeFocus}
      onBlur={handleChangeFocus}
      value={value}
      {...rest}
    />
  )
}
