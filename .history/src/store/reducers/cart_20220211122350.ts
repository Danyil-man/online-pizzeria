import React from "react"
import { ThunkAction } from "redux-thunk"
import { AppStateType, InfernActionType } from "../reduxStore"

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
    items: object
    totalPrice: number
    totalCount: number
}

const initialState:initialStateType = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

//                                              REDUCER
const cartReducer = (state=initialState, action:ActionCreatorsType):initialStateType => {
    switch(action.type){
        case ADD_PIZZA_CART:{
            //@ts-ignore
            const currentPizzas = !state.items[action.pizzaObj.id]
            ? [action.pizzaObj]
            //@ts-ignore
            : [...state.items[action.pizzaObj.id].items, action.pizzaObj]
            const newItems = {
                ...state.items,
                [action.pizzaObj.id]: {
                    items: currentPizzas,
                    totalCartPrice: currentPizzas.reduce((sum, obj:PizzaCartType)=>obj.price + sum,0)
                }
            }
            //@ts-ignore
            const items =  Object.values(newItems).map(obj => obj.items)
            const pizzaArray = [].concat.apply([],items )
            const price = pizzaArray.reduce( (sum, obj:PizzaCartType) => obj.price + sum, 0)
            
            return {
                ...state,
                items: newItems,
                totalCount: pizzaArray.length,
                totalPrice: price
            }
        }
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