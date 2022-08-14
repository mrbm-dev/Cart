import { PayloadAction } from "@reduxjs/toolkit";
import { call, takeLatest } from "redux-saga/effects";
import { addItemLocalStorage, removeItemLocalStorage } from "../../utils/cart";
import { addToCart, CartItem, removeItemFromCart } from "../slice/cart-slice";

function* addToCartHandler(action: PayloadAction<CartItem>): Generator {
  yield call(addItemLocalStorage, action.payload);
}
function* removeFromCartHandler(action: PayloadAction<number>): Generator {
  yield call(removeItemLocalStorage, action.payload);
}

export const cartSaga = [
  takeLatest(addToCart, addToCartHandler),
  takeLatest(removeItemFromCart, removeFromCartHandler),
];
