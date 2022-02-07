import { combineReducers, createStore } from "redux";
import filterReducer from "./reducers/filter";


const reducerPack = combineReducers({
    filter: filterReducer
})

type reducerPackType = typeof reducerPack
export type AppStateType = ReturnType<reducerPackType>

const store = createStore(reducerPack)

export type InfernActions<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export default store