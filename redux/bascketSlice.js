import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const bascketSlice = createSlice({
  name: 'bascket',
  initialState,
  reducers: {
    addToBascket: (state,action) => {
      state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state,action) => {
        const index = state.items.findIndex(({_id}) => _id === action.payload._id)
        let newBasket = [...state.items]
        console.log(index)
        if(index !== -1)
            newBasket.splice(index,1)
        else
            console.warn("Can't remove product as it's not in basket!")
        
            state.items = newBasket
    }
  },
})

export const { addToBascket, removeFromBasket } = bascketSlice.actions

export const selectBasketItems = state => state.basket.items
export const selectBasketItemsWidthId = (state,id) => state.basket.items.filter(({_id}) => _id === id)
export const selectBasketTotal = state => state.basket.items.reduce((total,item) => (total += item.price),0)

export default bascketSlice.reducer