import axios from "axios"
import React from "react"
import { ThunkAction } from "redux-thunk"
import { AppStateType, InfernActionType } from "../reduxStore"

const SET_PIZZA = 'SET_PIZZA'

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
    isLoading: boolean
}

const initialState:initialStateType = {
    items: [],
    isLoading: false
}

//                                              REDUCER
const pizzasReducer = (state=initialState, action:ActionCreatorsType):initialStateType => {
    switch(action.type){
        case SET_PIZZA:
            return{
                ...state,
                items: action.items,
                
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
    })
}


//                                               THUNK

export const getAllPizzas = ():ThunkType => async (dispatch) => {
    let response = await axios.get('http://localhost:3001/db.json/pizzas')
    dispatch(actions.setPizzas(response.data.pizzas))
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>
type ActionCreatorsType = InfernActionType<typeof actions>

export default pizzasReducer