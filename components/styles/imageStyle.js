import {StyleSheet, Dimensions} from 'react-native'

const size=Dimensions.get('window')
export const w=size.width
export const h=size.height

export const styles = StyleSheet.create({
    container: {
      width: '50%',
      alignItems: 'center',
      paddingVertical: 20,
    },
    cover: {
      width: w / 2.1,
      height: w * 0.7,
      borderRadius: 15,
    },
    coverName: {
      color: '#fff',
      fontSize: 20,
    },
  })

  export default styles;