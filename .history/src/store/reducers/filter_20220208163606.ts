import React from "react"
import { ThunkAction } from "redux-thunk"
import { AppStateType, InfernActionType } from "../reduxStore"


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

//                                              REDUCER
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


//                                            ACTION CREATOR
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


//                                      THUNK

export const setItemCategory = (index:number):ThunkType => async (dispatch) => {
    dispatch(actions.setCategory(index))
    
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>
export default filterReducer