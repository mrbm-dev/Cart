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
let newItem: any;
const items: CartItem[] = [];
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
        (item: any) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          quantity: 1,
          totalPrice: newItem.price,
          srcImage: newItem.srcImage,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action: PayloadAction<CartItem>) {
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
