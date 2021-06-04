export const initialState = {
  basket: [
    {
      id: "123456",
      title: "New wireless headphone",
      price: 98.99,
      rating: 4,
      image: "headphone.jpg",
    },
  ],
  user: null,
};

/*
state = { state: {
  basket: [
    {
      id:, ...,
      name: ...,
      price: ...
    }
  ]
} }

return state => { basket: []}
id = 5;
return {id}; => {id: 5}
*/

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding items in basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic for removing items from basket
      // action.id
      console.log(action.id);
      const basket = state.basket.filter((product) => product.id !== action.id);
      console.log(basket);
      return {
        ...state,
        basket,
      };
    default:
      return state;
  }
};

export default reducer;
