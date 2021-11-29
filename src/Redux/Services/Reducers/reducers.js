import { ADD_TO_CART, REMOVE_FROM_CART } from '../Constants/constants'

const initialState = {
  cartData: [],
}

export const cartItems = (state = [], action) => {
  // console.log('initialState is == ', initialState)
  switch (action.type) {
    case ADD_TO_CART:
      console.log('reducer == ', action)
      return [...state, { cartData: action.data }]

    case REMOVE_FROM_CART:
      state.pop()
      return [...state]

    default:
      return state
  }
}
