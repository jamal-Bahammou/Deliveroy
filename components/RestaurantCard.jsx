import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({_id,image,address,name,dishes,rating,short_description,type,long,lat}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Restaurants",{_id,image})} className="bg-white mr-3 shadow">
        <Image className="h-36 w-64 rounded-sm" source={{uri:urlFor(image).url()}} />                
        <View className="px-3 pb-4 w-64">
            <Text className="font-bold text-lg pt-2">{name}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color="green" opacity={.5} />
                <Text className="text-xs text-gray-500"><Text className="text-green-600">{rating}</Text> · {type}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon size={22} color="gray" opacity={.4} />
                <Text className="text-xs text-gray-500">Nearby · {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard