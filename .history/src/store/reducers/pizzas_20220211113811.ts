import axios from "axios"
import React from "react"
import { ThunkAction } from "redux-thunk"
import { AppStateType, InfernActionType } from "../reduxStore"

const SET_PIZZA = 'SET_PIZZA'
const SET_LOADED = 'SET_LOADED'

export type PizzaType = {
    id: number,
    imageUrl: string,
    name: string,
    types: Array<number>,
    sizes: Array<number>,
    price: number,
    category: number,
    rating: number
}

type initialStateType = {
    items: Array<PizzaType>
    isLoaded: boolean
}

const initialState:initialStateType = {
    items: [],
    isLoaded: false
}

//                                              REDUCER
const pizzasReducer = (state=initialState, action:ActionCreatorsType):initialStateType => {
    switch(action.type){
        case SET_PIZZA:
            return{
                ...state,
                items: action.items,
                isLoaded:true
            }
        case SET_LOADED:
            return{
                ...state,
                isLoaded: action.isLoaded
            }

        default:
            return state
    }
}


//                                          ACTION CREATOR
export const actions = {
    setPizzas: (items: Array<PizzaType>) => ({
        type: SET_PIZZA,
        items
    } as const),
    setLoaded: (isLoaded: boolean) => ({
        type:SET_LOADED,
        isLoaded
    } as const)
}


//                                               THUNK

export const getAllPizzas = (sortBy:string, category:null | number):ThunkType => async (dispatch) => {
    dispatch(actions.setLoaded(false))
    const {data} = await axios.get(`/pizzas?${category !== null ? `category=${category}`: ''}&_sort=${sortBy}&_order=desc`)
    dispatch(actions.setPizzas(data))
    
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>
type ActionCreatorsType = InfernActionType<typeof actions>

export default pizzasReducer