import React from "react"
import { InfernActionType } from "../reduxStore"

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
}

const initialState:initialStateType = {
    items: []
}

//                                              REDUCER
const pizzasReducer = (state=initialState, action:ActionCreatorsType):initialStateType => {
    switch(action.type){

        default:
            return state
    }
}


//                                            ACTION CREATOR
export const actions = {

}

type ActionCreatorsType = InfernActionType<typeof actions>

export default pizzasReducer