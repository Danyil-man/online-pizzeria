import { combineReducers, createStore } from "redux";


const reducerPack = combineReducers({

})

type reducerPackType = typeof reducerPack


const store = createStore(reducerPack)

export type AppStateType = ReturnType<reducerPackType>
export type InfernActions<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export default store