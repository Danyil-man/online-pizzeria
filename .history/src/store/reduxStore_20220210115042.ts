import { applyMiddleware, combineReducers, createStore } from "redux";
import filterReducer from "./reducers/filter";
import pizzasReducer from "./reducers/pizzas";
import thunkMiddleware from "redux-thunk";
import cartReducer from "./reducers/cart";

const reducerPack = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
})

type reducerPackType = typeof reducerPack

export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


const store = createStore(reducerPack, applyMiddleware(thunkMiddleware))


export default store