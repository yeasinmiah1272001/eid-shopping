import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart:[]
}

export const counterSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {

    addShpping:(state, action) =>{
        const exisistingProduct = state.cart.find((item) => item.id === action.payload.id)

        if(exisistingProduct){
            exisistingProduct.quantity +=1

        }
        else{
            state.cart.push({...action.payload, quantity:1})

        }
    },


   

  },
})


export const {  addShpping } = counterSlice.actions

export default counterSlice.reducer