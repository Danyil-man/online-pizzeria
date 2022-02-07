import React from "react"
import { InfernActionType } from "../reduxStore"


const SET_SORT = 'SET_SORT'

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
                sortBy: action.payload
            }

        default:
            return state
    }
}

export const actions = {
    setSort: () => ({
        type: SET_SORT

    } as const)
}

type ActionCreatorsType = InfernActionType<typeof actions>

export default filterReducer