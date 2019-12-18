import React from 'react'
import { Image, View, Text } from 'react-native'
import { styles } from './styles/imageStyle'

const ImageCard = ({ data }) => {
  const image = data.show.image.medium
  const name = data.show.name
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.cover} source={{ uri:image }} />
      </View>
      <Text style={styles.coverName}>{name}</Text>
    </View>
  )
}

export default ImageCard;