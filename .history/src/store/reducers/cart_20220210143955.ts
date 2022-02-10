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

export type PizzaCartType = {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    size: number,
    type: string
}


type initialStateType = {
    items: PizzaCartType
    totalPrice: number
    totalCount: number
}

const initialState:initialStateType = {
    items: {
        id: 0,
        imageUrl: '',
        name: '',
        type: '',
        size: 0,
        price: 0,
    },
    totalPrice: 0,
    totalCount: 0
}

//                                              REDUCER
const cartReducer = (state=initialState, action:ActionCreatorsType):initialStateType => {
    switch(action.type){
        case ADD_PIZZA_CART:{
            const newItems = {
                ...state.items,
                //@ts-ignore
                [action.pizzaObj.id]: !state.items[action.pizzaObj.id]
                ? [action.pizzaObj]
                //@ts-ignore
                : [...state.items[action.pizzaObj.id], action.pizzaObj]
            }
            return {
                ...state,
                items: newItems,
                totalCount: Object.keys(newItems).length
            }
        }
           
                //{...state.items,
                // [action.pizzaObj.id]: !state.items[action.pizzaObj.id] ?
                //  [action.pizzaObj]: 
                //  [...state.items[action.pizzaObj.id], action.pizzaObj]
                // } 
            

        default:
            return state
    }
}


//                                          ACTION CREATOR
export const actions = {
    setPizzaCart: (pizzaObj: PizzaCartType)=>({
        type: ADD_PIZZA_CART,
        pizzaObj
    })
}


//                                               THUNK
export const addPizzaToCart = (pizzaObj: PizzaCartType):ThunkType => async (dispatch) => {
    dispatch(actions.setPizzaCart(pizzaObj))
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>
type ActionCreatorsType = InfernActionType<typeof actions>

export default cartReducer