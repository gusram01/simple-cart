export const cartInitialState = [];

export const cartActions = {
  addOne: 'ADD_ONE',
  removeOne: 'REMOVE_ONE',
  removeAll: 'REMOVE_ALL',
};

export const cartReducer = (state, action) => {
  const type = action.type;
  const payload = action.payload;

  switch (type) {
    case cartActions.addOne: {
      const prodIndex = state.findIndex((prod) => prod.id === payload.id);

      if (prodIndex >= 0) {
        const newProds = structuredClone(state);
        newProds[prodIndex].quantity++;

        return newProds;
      }

      return [...state, { ...payload, quantity: 1 }];
    }

    case cartActions.removeOne: {
      const prodIndex = state.findIndex((prod) => prod.id === payload.id);

      if (prodIndex >= 0) {
        const newProds = structuredClone(state);
        newProds[prodIndex].quantity--;

        if (newProds[prodIndex].quantity === 0) {
          newProds.splice(prodIndex, 1);
        }

        return newProds;
      }

      return state;
    }

    case cartActions.removeAll:
      return cartInitialState;

    default:
      return state;
  }
};
