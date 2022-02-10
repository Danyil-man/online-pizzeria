import axios from "axios"
import React from "react"
import { ThunkAction } from "redux-thunk"
import { AppStateType, InfernActionType } from "../reduxStore"

const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const ADD_PIZZA_CART = "ADD_PIZZA_CART"

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
    items: PizzaType
    totalPrice: number
    totalCount: number
}

const initialState:initialStateType = {
    items: {
        id: 0,
        imageUrl: '',
        name: '',
        types: [],
        sizes: [],
        price: 0,
        category: 0,
        rating: 0
    },
    totalPrice: 0,
    totalCount: 0
}

//                                              REDUCER
const cartReducer = (state=initialState, action:ActionCreatorsType):initialStateType => {
    switch(action.type){
        case ADD_PIZZA_CART:
            return{
                ...state,
                items: action.pizzaObj
            }

        default:
            return state
    }
}


//                                          ACTION CREATOR
export const actions = {
    setPizzaCart: (pizzaObj: PizzaType)=>({
        type: ADD_PIZZA_CART,
        pizzaObj
    })
}


//                                               THUNK
export const addPizzaToCart = (pizzaObj: PizzaType):ThunkType => async (dispatch) => {
    dispatch(actions.setPizzaCart(pizzaObj))
    debugger
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>
type ActionCreatorsType = InfernActionType<typeof actions>

export default cartReducer