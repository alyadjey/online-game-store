import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload); //пейлоад я сам так назвал, обычно пишут именно его, в нем будет игра которую я передаю
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.id !== action.payload
      );
    },
  }, //в редюсерсе нужно вписывать экшены которые будут юзаться, например с корзиной - добавить в корзину и удалить с корзины
});
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
