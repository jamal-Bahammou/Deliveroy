import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id,name,short_description,restaurants}) => {
  return (
    <View className="ml-4 pt-3">
        <View className="flex-row items-center mr-4">
            <View className="flex-1">
                <Text className="font-bold text-lg">{name}</Text>
                <Text className="text-xs text-gray-500">{short_description}</Text>
            </View>
            <ArrowRightIcon size={25} color="#00CCBB" />
        </View>
        <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizonta:15 }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {restaurants.map(({_id,image,address,name,dishes,rating,short_description,type,long,lat}) =>
                <RestaurantCard
                    key={_id}
                    _id={_id}
                    image={image}
                    address={address}
                    name={name}
                    dishes={dishes}
                    rating={rating}
                    short_description={short_description}
                    type={type?.name}
                    long={long}
                    lat={lat}
                />
            )}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow