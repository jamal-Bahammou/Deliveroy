import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import SanityClient, { urlFor } from '../sanity'
import { ArrowNarrowLeftIcon, ChevronRightIcon, StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketBar from '../components/BasketBar'
import { setRestaurant, selectRestaurant } from '../redux/restaurantSlice'
import { selectBasketItems } from '../redux/bascketSlice'

const RestaurantsScreen = () => {

    const navigation = useNavigation()
    const { params: {_id} } = useRoute()
    const dispatch = useDispatch()
    const restaurant = useSelector(state => selectRestaurant(state))
    const items = useSelector(selectBasketItems)

    useEffect(() => {
    (async() => {

        const query = `
        *[_type == "restaurant" && _id == $_id][0]{
            ...,
            dishes[]->,
            type-> {name}
        }
        `
        const res = await SanityClient.fetch(query,{_id})
        dispatch(setRestaurant(res))
    })();
    }, [_id])


  return (
    <View>
    <ScrollView>
      <View className="relative">
        <Image className="w-full h-56 bg-gray-100 p-4" source={{uri: !restaurant?.image ? null : urlFor(restaurant?.image).url()}} />
        <TouchableOpacity className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full" onPress={navigation.goBack}>
            <ArrowNarrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">

        <View className="p-4">
            <Text className="text-3xl font-bold mb-2">{restaurant?.name}</Text>
            <View className="flex-row space-x-2">
                <View className="flex-row items-center space-x-1">
                    <StarIcon size={22} color="green" opacity={.5} />
                    <Text className="text-xs text-gray-500"><Text className="text-green-500">{restaurant?.rating}</Text> · {restaurant?.type?.name}</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <LocationMarkerIcon size={22} color="gray" opacity={.4} />
                    <Text className="text-xs text-gray-500">Nearby · {restaurant?.address}</Text>
                </View>
            </View>
            <Text className="text-gray-500 mt-2">{restaurant?.short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-3 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={22} color="gray" opacity={.6} />
            <Text className="flex-1 text-md font-bold">Have a food allergy?</Text>
            <ChevronRightIcon size={22} color="#00CCBB" />
        </TouchableOpacity>

        </View>

        <View className={items.length > 0 && "pb-[108px]"}>
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            {restaurant.dishes?.map(({_id,name,short_description,price,image}) =>
                <DishRow
                    key={_id}
                    _id={_id}
                    name={name}
                    short_description={short_description}
                    price={price}
                    image={image}
                />
            )}
        </View>
    </ScrollView>
    <BasketBar />
    </View>
  )
}

export default RestaurantsScreen