import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './redux/bascketSlice'
import restaurantReducer from './redux/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer
  },
})