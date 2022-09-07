import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({ 
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    
  },
  checkbox:{
    marginRight:8,
  },
  title:{
    fontSize: 14,
    color: "#F2F2F2" ,
    paddingLeft: 5,
    flexWrap: 'wrap',
    width: 260 
  },
  titleCheck:{
    fontSize: 14,
    color: "#808080" ,
    paddingLeft: 5,
    flexWrap: 'wrap',
    textDecorationLine: 'line-through',
    width: 260 
  },
  button:{
    width: 2,
  }
})