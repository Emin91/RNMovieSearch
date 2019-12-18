import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141414'
    },
    searchView: {
      marginTop: 10,
      flex: 0.2, 
      backgroundColor:'#2e2e2e', 
      justifyContent: 'center', 
      alignItems: 'flex-end',
    },
    searchBtn: {
      width: 60, 
      height: 60, 
      position: 'absolute', 
      alignItems: 'center',
      justifyContent: 'center', 
    },
    textInput: {
      width: '100%',
      height: '80%',
      color: '#fff',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    resultView: {
      flexDirection: 'row',
      flexShrink: 2,
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }
  })

  export default styles;