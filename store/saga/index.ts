import { all } from "redux-saga/effects";
import { StrictEffect } from "@redux-saga/types";
import { cartSaga } from "./cart";

export default function* rootSaga(): Generator<StrictEffect> {
  yield all([...cartSaga]);
}
