import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {

    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-[#585D67] text-medium text-center mb-10"
      >Waiting for Restaurant to accept your order!</Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="#3A93A6" />
      {/* <Progress.Bar width={200} progress={true} color="#3A93A6" /> */}
    </SafeAreaView>
  )
}

export default PreparingOrderScreen