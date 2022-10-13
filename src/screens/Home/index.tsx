import React, { useMemo, useState } from 'react'
import { Alert, FlatList, View } from 'react-native'
import uuid from 'react-uuid'

import { styles } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import OptionButton from '../../components/OptionButton'
import { EmptyList } from '../../components/EmptyList'
import { Card } from '../../components/Card'

type Task = {
  id: string
  title: string
  completed: boolean
}

export function Home() {
  const [task, setTask] = useState('')
  const [list, setList] = useState<Task[]>([])
  const [allTasks, setAllTasks] = useState(true)

  const completedTasks = useMemo(
    () => list.filter((currentTask) => currentTask.completed).length,
    [list],
  )

  const dataRender = useMemo(
    () =>
      allTasks
        ? list.sort((a, b) => Number(a.completed) - Number(b.completed))
        : list.filter((currentTask) => currentTask.completed),
    [allTasks, list],
  )

  function handleAddNewTask() {
    if (!task) {
      return Alert.alert(
        'Campo vazio',
        'Preencha corretamente o nome da tarefa.',
      )
    }

    const haveSameName = list.some(
      (currentTask) => currentTask.title.toUpperCase() === task.toUpperCase(),
    )

    const newTask = {
      id: uuid(),
      title: task,
      completed: false,
    }

    if (haveSameName) {
      Alert.alert(
        'Adicionar',
        'Já existe uma tarefa criada com o mesmo nome. Deseja adicionar outra mesmo assim?',
        [
          {
            text: 'Sim',
            onPress: () => {
              setList((prevState) => [...prevState, newTask])
              setTask('')
            },
          },
          {
            text: 'Não',
            style: 'cancel',
          },
        ],
      )
      return
    }

    setList((prevState) => [...prevState, newTask])
    setTask('')
  }

  function handleCompletedTask(id: string) {
    setList((prevState) =>
      prevState.map((currentTask) => {
        return currentTask.id === id
          ? {
              ...currentTask,
              completed: !currentTask.completed,
            }
          : currentTask
      }),
    )
  }

  function handleDeleteTask(id: string) {
    Alert.alert('Remover', 'Deseja realmente remover a task?', [
      {
        text: 'Sim',
        onPress: () =>
          setList((prevState) =>
            prevState.filter((currentTask) => currentTask.id !== id),
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.wrapper}>
        <View style={styles.form}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChangeText={setTask}
          />
          <Button onPress={handleAddNewTask} />
        </View>

        <View style={styles.options}>
          <OptionButton
            title="Criadas"
            quantity={list.length}
            onPress={() => setAllTasks(true)}
          />
          <OptionButton
            title="Concluidas"
            quantity={completedTasks}
            completed
            onPress={() => setAllTasks(false)}
          />
        </View>

        <FlatList
          data={dataRender}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              completed={item.completed}
              onCompleteTask={() => handleCompletedTask(item.id)}
              onDeleteTask={() => handleDeleteTask(item.id)}
            />
          )}
          ListEmptyComponent={<EmptyList />}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  )
}
