import {View, Image} from "react-native";

import { styles } from './styles'

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../../../assets/logo.png')}
      >
      </Image>
    </View>
  )
}