import { CartItem } from "../store/slice/cart-slice";

export const addItemLocalStorage = (item: CartItem): void => {
  let cart: Array<CartItem> = JSON.parse(localStorage.getItem("cart") as string)
    ? (JSON.parse(localStorage.getItem("cart") as string) as Array<CartItem>)
    : [];
  let found = false;
  cart = cart.map((items) => {
    if (item.id === items.id) {
      items.quantity++;
      found = true;
    }
    return items;
  });
  if (!found) {
    cart.push(item);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeItemLocalStorage = (id: number): void => {
  let cart: Array<CartItem> | undefined = JSON.parse(
    localStorage.getItem("cart") as string
  ) as Array<CartItem>;
  cart = cart ? cart.filter((item) => item.id !== id) : [];
  localStorage.setItem("cart", JSON.stringify(cart));
};
