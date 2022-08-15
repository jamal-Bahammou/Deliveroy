import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import SanityClient from '../sanity'

const HomeScreen = () => {

  const navigation = useNavigation()
  const [featuredCategories,setFeaturedCategories] = useState([])

  useEffect(() => {
    (async() => {

      const query = `
      *[_type == "featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->,
          }
        }
        `
        const res = await SanityClient.fetch(query)
        setFeaturedCategories(res)
      })();
  },[])

  return (
    <SafeAreaView className="bg-white pt-5">
      
        {/* Header */}
        <View className="flex-row items-center space-x-2 mx-4 pb-3">
          <Image className="h-7 w-7 bg-gray-400 p-4 rounded-full" source={{uri:"https://links.papareact.com/wru"}} />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <View className="flex-row items-center space-x-1">
              <Text className="font-bold text-xl leading-[22px]">Current Location</Text>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 mx-4 pb-3">
          <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 px-3 py-2 rounded-full">
            <SearchIcon size={20} color="gray" />
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
          </View>
          <AdjustmentsIcon color="#00CCBB" />
        </View>

      {/* Body */}
      <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom:120}}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
          {featuredCategories?.map(({_id,name,short_description,restaurants}) => 
            <FeaturedRow
              key={_id}
              id={_id}
              name={name}
              short_description={short_description}
              restaurants={restaurants}
            />
          )}
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen