import React from "react"
import { ThunkAction } from "redux-thunk"
import { AppStateType, InfernActionType } from "../reduxStore"

const ADD_PIZZA_CART = "ADD_PIZZA_CART"
const CLEAR_CART = "CLEAR_CART"
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
const PLUS_CART_ITEM = "PLUS_CART_ITEM"
const MINUS_CART_ITEM = "MINUS_CART_ITEM"

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
                    totalCartPrice: currentPizzas.reduce((sum:number, obj:PizzaCartType)=>
                    obj.price + sum,0)
                }
            }
            
           
            const totalCount = Object.keys(newItems).reduce( (sum:number, key:any) =>
            //@ts-ignore
            newItems[key].items.length + sum, 0)

            const price = Object.keys(newItems).reduce( (sum:number, key:any) =>
            //@ts-ignore
             newItems[key].totalCartPrice + sum, 0)
            
            return {
                ...state,
                items: newItems,
                totalCount: totalCount,
                totalPrice: price
            }
        }

        case CLEAR_CART:
            return{
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }

        case REMOVE_CART_ITEM:
            const removedItems = {
                ...state.items
            }
            //@ts-ignore
            const currentTotalPrice = removedItems[action.id].totalCartPrice
            //@ts-ignore
            const currentTotalCount = removedItems[action.id].items.length
            //@ts-ignore
            delete removedItems[action.id]
            return{
                ...state,
                items: removedItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }

        case PLUS_CART_ITEM:{
            const newObjItems  = [
                //@ts-ignore
                ...state.items[action.id].items,
                //@ts-ignore
                state.items[action.id].items[0]
            ]
            const newItems = {
                ...state.items,
                [action.id]: {
                    items:newObjItems,
                    totalCartPrice: newObjItems.reduce((sum:number, obj:PizzaCartType)=>
                    obj.price + sum,0)
                }
            }
            const totalCount = Object.keys(newItems).reduce( (sum:number, key:any) =>
            //@ts-ignore
            newItems[key].items.length + sum, 0)

            const price = Object.keys(newItems).reduce( (sum:number, key:any) =>
            //@ts-ignore
             newItems[key].totalCartPrice + sum, 0)
            return{
                ...state,
                items: newItems,
                totalCount: totalCount,
                totalPrice: price
            }
        }
           

        case MINUS_CART_ITEM:{
            //@ts-ignore
            const oldItems = state.items[action.id].items
            //@ts-ignore
            const newItems = oldItems.length >1 ? state.items[action.id].items.slice(1):oldItems
            const totalCount = Object.keys(newItems).reduce( (sum:number, key:any) =>
            //@ts-ignore
            newItems[key].items.length + sum, 0)

            const price = Object.keys(newItems).reduce( (sum:number, key:any) =>
            //@ts-ignore
             newItems[key].totalCartPrice + sum, 0)  
            const newState = {
                ...state,
                items: newItems,
                totalCount: totalCount,
                totalPrice: price
            }
            
            return newState
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
    } as const),
    clearCart: () => ({
        type: CLEAR_CART,
    } as const),
    removeCartItem: (id:number) => ({
        type: REMOVE_CART_ITEM,
        id
    } as const),
    plusCartItem: (id:number) => ({
        type: PLUS_CART_ITEM,
        id
    } as const),
    minusCartItem: (id:number) => ({
        type: MINUS_CART_ITEM,
        id
    } as const)
}


//                                               THUNK
export const addPizzaToCart = (pizzaObj: PizzaCartType):ThunkType => async (dispatch) => {
    dispatch(actions.setPizzaCart(pizzaObj))
}

export const onClearCart = ():ThunkType => async (dispatch) => {
    dispatch(actions.clearCart())
}

export const onRemoveItem = (id:number):ThunkType => async (dispatch) => {
    dispatch(actions.removeCartItem(id))
}

export const plusCartItem = (id:number):ThunkType => async (dispatch) => {
    dispatch(actions.plusCartItem(id))
}

export const minusCartItem = (id:number):ThunkType => async (dispatch) => {
    dispatch(actions.minusCartItem(id))
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>
type ActionCreatorsType = InfernActionType<typeof actions>

export default cartReducer