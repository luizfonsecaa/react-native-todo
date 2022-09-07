import { View, Text, Image} from "react-native";
import { styles } from './styles'

export default function CardEmpty() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.icon}
        source={require('../../../assets/clipboard.png')}
      >
      </Image>
      <Text style={styles.title}>
      Você ainda não tem tarefas cadastradas   
      </Text>
      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer  
      </Text>
    </View>
  )
}