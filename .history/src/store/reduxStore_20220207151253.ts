import { combineReducers, createStore } from "redux";
import filterReducer from "./reducers/filter";
import pizzasReducer from "./reducers/pizzas";


const reducerPack = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer
})

type reducerPackType = typeof reducerPack
export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(reducerPack)


export default store