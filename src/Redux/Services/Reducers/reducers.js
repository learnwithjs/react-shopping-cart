import { ADD_TO_CART, REMOVE_FROM_CART } from '../Constants/constants'

export const cartItems = (state = { cartItems: [] }, action) => {
  // console.log('initialState is == ', initialState)
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload

      const exist = state.cartItems.find((x) => x.name === product.name)

      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.name === product.name
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, qty: 1 }],
        }
      }

    case REMOVE_FROM_CART:
      const product = action.payload
      const exist = state.cartItems.find((x) => x.name === product.name)
      if (exist.qty === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== product.name),
        }
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.name === product.name
              ? {
                  ...exist,
                  qty: exist.qty - 1,
                }
              : x
          ),
        }
      }

    default:
      return state
  }
}
