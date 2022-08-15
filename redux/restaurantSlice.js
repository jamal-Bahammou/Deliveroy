import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: {
    id: null,
    image: null,
    name: null,
    ratting: null,
    type: null,
    address: null,
    short_description: null,
    dishes: null,
  }
}

export const bascketSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state,action) => {
        state.restaurant = action.payload
    }
  },
})

export const { setRestaurant } = bascketSlice.actions

export const selectRestaurant = state => state.restaurant.restaurant

export default bascketSlice.reducer