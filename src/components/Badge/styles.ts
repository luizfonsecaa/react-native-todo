import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
   flexDirection:'row',
    alignItems:'center'
  },
  badgeContainer: {
    marginLeft:2,
    padding: 3,
    backgroundColor:'#333333',
    width: 25,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10
  },
  badgeText:{
    color: '#D9D9D9',
  },
  badgeLavelCreated:{
    color: '#4EA8DE',
    fontWeight:'700',
    fontSize:16,

  },
  badgeLavelFinish:{
    color: '#8284FA',
    fontWeight:'700',
    fontSize:16,

  }
})