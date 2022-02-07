import React from "react"
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

export default filterReducer