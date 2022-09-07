import {View, Text} from "react-native";

import { styles } from './styles'

type Props = {
  label:string,
  total:number,
}


export default function Badge({label, total}:Props) {
  return (
    <View style={styles.container}>
      {label === 'Criadas' 
        ? <Text style={styles.badgeLavelCreated}>{label}</Text>
        : <Text style={styles.badgeLavelFinish}>{label}</Text>
      }
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{total}</Text>
      </View>
    </View>
  )
}