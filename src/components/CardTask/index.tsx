import { View, Text, Image, TouchableOpacity} from "react-native";
import Checkbox from 'expo-checkbox';
import { styles } from './styles'
type Props = {
  task: string 
  isChecked: boolean 
  onCkeck: () => void
  remove:() => void
}

export default function CardTask({ task, isChecked, onCkeck, remove }: Props) {
  return (
    <View style={styles.container}>
  
      <Checkbox
        value={isChecked}
        onValueChange={onCkeck}
        style={styles.checkbox}
        color={isChecked ? '#4630EB' : undefined}
      />
      <Text 
        style={ isChecked ? styles.titleCheck : styles.title}
      >
      {task}
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={remove}
      >
        <Image 
          source={require('../../../assets/trash.png')}
        >
        </Image>
      </TouchableOpacity>
    </View>
  )
}