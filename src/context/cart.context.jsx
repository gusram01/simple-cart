import { createContext, useReducer } from 'react';
import { cartActions, cartInitialState, cartReducer } from '../reducers/cart-reducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addOne = (product) =>
    dispatch({
      type: cartActions.addOne,
      payload: product,
    });

  const removeOne = (product) =>
    dispatch({
      type: cartActions.removeOne,
      payload: product,
    });

  return (
    <CartContext.Provider
      value={{
        cartProducts: state,
        addOne,
        removeOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
