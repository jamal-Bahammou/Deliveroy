import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import BasketScreen from './screens/BasketScreen';

import { store } from './store'
import { Provider } from 'react-redux'
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} options={{headerShown:false}} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{presentation:"modal",headerShown:false}} />
            <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{presentation:"fullScreenModal",headerShown:false}} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} options={{presentation:"fullScreenModal",headerShown:false}} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}