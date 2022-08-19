import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartItem {
  name: string;
  id: number;
  price: number;
  quantity: number;
  totalPrice: number;
  srcImage: string;
}
let newItem: CartItem;
let items: CartItem[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: { items, totalQuantity: 0, changed: false },
  reducers: {
    setCarts(state, action: PayloadAction<CartItem[]>) {
      return { ...state, items: action.payload };
    },

    addToCart(state, action: PayloadAction<CartItem>) {
      newItem = action.payload;
      const existingItem = state.items.find(
        (item: CartItem) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          srcImage: newItem.srcImage,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem: any = state.items.find((item: any) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item: any) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - newItem.price;
      }
    },
  },
});
export const selectCart = (state: RootState) => state.cart;
export default cartSlice;
export const cartActions = cartSlice.actions;
export const { setCarts, addToCart, removeItemFromCart } = cartSlice.actions;
