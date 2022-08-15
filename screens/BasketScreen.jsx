import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../redux/bascketSlice'
import { useMemo } from 'react'
import _ from 'lodash'
import { selectRestaurant } from '../redux/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'
import { useNavigation } from '@react-navigation/native'

const BasketScreen = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

  useMemo(() => {
    setGroupedItemsInBasket(Object.values(_.groupBy(items, (item) => item._id)))
  },[items])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        
        {/* TITLE BAR */}
        <View className="bg-white p-5 shadow-xs border-b border-[#00CCBB]">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-400 font-medium text-center">{restaurant?.name}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-5 right-5">
            <XCircleIcon size={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        
        {/* DELIVER TIME BAR */}
        <View className="bg-white flex-row items-center space-x-4 px-4 py-3 my-5">
          <Image className="h-7 w-7 p-4 bg-gray-300 rounded-full" source={{uri:"https://links.papareact.com/wru"}} />
          <Text className="flex-1 font-medium">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="font-medium text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        {/* BASKET ITEMS */}
        <ScrollView className="flex-1 divide-y divide-gray-200">
          {groupedItemsInBasket.map(items => (
            <View key={items[0]?._id} className="bg-white flex-row items-center space-x-3 px-5 py-2">
              <Text className="text-[#00CCBB]">{items.length} X </Text>
              <Image className="h-12 w-12 rounded-full" source={{uri: urlFor(items[0]?.image).url()}} />
              <Text className="flex-1 font-medium">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Text>
              <TouchableOpacity onPress={() => dispatch(removeFromBasket({_id:items[0]?._id}))}>
                <Text className="font-medium text-xs text-[#00CCBB]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
          </ScrollView>

        {/* PLACE ORDER */}
        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400"><Currency quantity={basketTotal} currency="GBP" /></Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400"><Currency quantity={basketTotal !== 0 ? 5.99 : 0} currency="GBP" /></Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-medium">Order Total</Text>
            <Text className="font-extrabold"><Currency quantity={basketTotal !== 0 ? basketTotal + 5.99 : 0} currency="GBP" /></Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("PreparingOrder")} className="rounded-lg bg-[#00CCBB] p-4">
            <Text className="text-white text-center text-lg font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen