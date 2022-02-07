import React from "react"
import { InfernActionType } from "../reduxStore"


const SET_SORT = 'SET_SORT'
const SET_CATEGORY = 'SET_CATEGORY'

type initialStateType = {
    category: number
    sortBy: string
}

const initialState:initialStateType = {
    category: 0,
    sortBy: 'popular'
}


const filterReducer = (state=initialState, action:ActionCreatorsType):initialStateType => {
    switch(action.type){
        case SET_SORT:
            return{
                ...state,
                sortBy: action.name
            }
        case SET_CATEGORY:
            return{
                ...state,
                category: action.index
            }

        default:
            return state
    }
}

export const actions = {
    setSort: (name:string) => ({
        type: SET_SORT,
        name
    } as const),
    setCategory: (index:number) => ({
        type: SET_CATEGORY,
        index
    } as const)
}

type ActionCreatorsType = InfernActionType<typeof actions>

export default filterReducer