import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({ name, image }) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image className="h-20 w-20 rounded" source={{ uri: urlFor(image).url() }} />
        <Text className="absolute bottom-1 left-1 text-white font-bold">{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard