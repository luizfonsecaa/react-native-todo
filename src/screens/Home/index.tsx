import { View, TextInput, TouchableOpacity, Text, FlatList, Alert} from "react-native";
import Badge from "../../components/Badge";
import Logo from "../../components/Logo";
import CardEmpty from '../../components/CardEmpty'
import CardTask from "../../components/CardTask";

import { styles } from './styles'
import { useState } from "react";

type list = {
  id: number;
  task: string;
  isCheck: boolean;
}

export default function Home() {
  const [list, setList] = useState<list[]>([])
  const [task, setTask] = useState('')
  
  const totalFinish = list.reduce((total: number, element: list): number => {
    if(element.isCheck) return total += 1
    else return total
  }, 0)

  function handleCheck(id: number){
    const newList = list.map(e => {
      if(e.id == id ) return {...e, "isCheck": !e.isCheck}
      else return e
    })

    setList(newList)
  } 

  function handleInsertList() {
    const id = new Date().getTime()
    setList(state => [...state, {id, task, isCheck: false}])
    setTask('')
  }

  function handleRemoveTask(id: number) {
    return Alert.alert('Remover', `Deseja remover a tarefa`,[
      {
        text:'Sim',
        onPress:() => {
          setList(state => state.filter(e => e.id !== id))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.form}>
        <TextInput  
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#F2F2F2"
          onChangeText={setTask}
          value={task}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleInsertList}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Badge label='Criadas' total={list.length} />
        <Badge label='Concluidas' total={totalFinish}/>
      </View>

      <View style = {styles.lineStyle} />

      <FlatList 
        data={list}
        keyExtractor={item => `${item.id}`}
        renderItem={({item})=> (
          <CardTask 
            task={item.task} 
            isChecked={item.isCheck}
            remove={() => handleRemoveTask(item.id)}
            onCkeck={() => handleCheck(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <CardEmpty/>
        )}
      />
    </View>
  )
}