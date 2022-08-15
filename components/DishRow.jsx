import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useSelector,useDispatch } from 'react-redux'
import { addToBascket, removeFromBasket, selectBasketItemsWidthId } from '../redux/bascketSlice'

const DishRow = ({_id,name,short_description,price,image}) => {
  const dispatch = useDispatch()

  const [isPressed,setIspressed] = useState(false)
  const itemsWithId = useSelector(state => selectBasketItemsWidthId(state,_id))
  
  const addItemToBasket = () => dispatch(addToBascket({_id,name,short_description,price,image}))
  const removeImeFromBasket = () => dispatch(removeFromBasket({_id}))

    return (
    <>
    <TouchableOpacity onPress={() => setIspressed(!isPressed)} className={`bg-white flex-row items-center space-x-2 p-4 border-y border-gray-200 ${isPressed && "border-b-0"}`}>
      <View className="flex-1">
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{short_description}</Text>
        <Text className="text-gray-400 mt-2"><Currency quantity={price} currency="GBP" /></Text>
      </View>
      <Image className="h-20 w-20 bg-gray-300 rounded-sm" source={{uri:urlFor(image).url()}} />
    </TouchableOpacity>
    {isPressed && (
        <View className="bg-white flex-row items-center space-x-2 px-4 pb-3">
            <TouchableOpacity onPress={removeImeFromBasket} disabled={itemsWithId.length<=0}>
                <MinusCircleIcon size={40} color={itemsWithId.length>0 ? "#00CCBB" : "gray"} />
            </TouchableOpacity>
            <Text>{itemsWithId.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
        </View>
    )}
    </>
  )
}

export default DishRow