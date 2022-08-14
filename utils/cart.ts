import { CartItem } from "../store/slice/cart-slice";
import { getItem, setItem } from "./local-storage";

export const addItemLocalStorage = (item: CartItem): void => {
  let cart: Array<CartItem> = getItem("cart")
    ? (getItem("cart") as Array<CartItem>)
    : [];
  cart.push(item);
  setItem("cart", cart);
};

export const removeItemLocalStorage = (id: number): void => {
  let cart: Array<CartItem> = getItem("cart") as Array<CartItem>;
  cart = cart.filter((item) => item.id !== id);
  setItem("cart", cart);
};
