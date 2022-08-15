import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../redux/bascketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'

const BasketBar = () => {

    const navigation = useNavigation()
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)

    if(items.length === 0) return null;

  return (
    <View className="w-full absolute bottom-5 z-50">
        <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="flex-row items-center space-x-1 bg-[#00CCBB] p-4 mx-5 rounded-lg">
        <Text className="text-white text-lg font-extrabold bg-[#01A296] px-2 py-1">{items.length}</Text>
        <Text className="flex-1 text-white text-lg font-extrabold text-center">View Basket</Text>
        <Text className="text-white text-lg font-extrabold"><Currency quantity={basketTotal} currency="GBP" /></Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketBar