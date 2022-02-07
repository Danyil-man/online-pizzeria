import React from "react"
import { InferThunkActionCreatorType } from "react-redux"

const SET_SORT = 'SET_SORT'

type initialStateType = {
    category: number
    sortBy: string
}

const initialState:initialStateType = {
    category: 0,
    sortBy: 'popular'
}


const filterReducer = (state=initialState, action:any):initialStateType => {
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

    } as const)
}
type ActionCreatorsType = InferThunkActionCreatorType<typeof actions>
export default filterReducer