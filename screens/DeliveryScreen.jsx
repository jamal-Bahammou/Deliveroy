import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../redux/restaurantSlice'
import { XIcon } from 'react-native-heroicons/solid'
import * as Progress from "react-native-progress"
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(state => selectRestaurant(state))

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <XIcon size={30} color="white" />
            </TouchableOpacity>
            <Text className="text-white font-light text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 p-6 rounded-md shadow-md z-50">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                    <Text className="text-4xl font-bold">45-55 Minutes</Text>
                </View>
                <Image className="h-20 w-20" source={{uri:"https://links.papareact.com/fls"}} />
            </View>
            <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />
            <Text className="mt-3 text-gray-500">Your order at <Text className="text-[#00CCBB]">{restaurant.name}</Text> is being prepared</Text>
        </View>
      </SafeAreaView>

        {/* ADD REACT MAP VIEW */}
        <MapView
            initialRegion={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
                latitudeDelta: .005,
                longitudeDelta: .005
            }}
            className="flex-1 -mt-10 z-0"
            mapType="mutedStandard"
        >
            <Marker
                coordinate={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                }}
                title={restaurant.name}
                description={restaurant.short_description}
                identifier="origin"
                pinColor="#00CCBB"
            />
        </MapView>

        <View className="bg-white flex-row items-center space-x-5 px-1 py-5">
            <Image className="h-12 w-12 bg-gray-300 rounded-full ml-5" source={{uri:"https://links.papareact.com/wru"}} />
            <View className="flex-1">
                <Text className="text-lg">Jamal Bahammou</Text>
                <Text className="text-gray-400">Your Rider</Text>
            </View>
            <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </View>

    </View>
  )
}

export default DeliveryScreen