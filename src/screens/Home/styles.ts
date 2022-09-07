import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({ 

  container:{
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
  },
  input: {
    height: 56,
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 8,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,

  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#808080',
    marginTop: 20
}
})