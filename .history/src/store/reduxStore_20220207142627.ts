import { combineReducers, createStore } from "redux";
import filterReducer from "./reducers/filter";


const reducerPack = combineReducers({
    filter: filterReducer
})

type reducerPackType = typeof reducerPack
export type AppStateType = ReturnType<reducerPackType>
export type InfernActions<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(reducerPack)


export default store