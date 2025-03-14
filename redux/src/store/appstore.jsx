import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../utils/counterslice"
import todoReducer from "../utils/todosSlice"

export const store = configureStore({
   reducer : {
    count  : counterReducer ,
    todos: todoReducer,
   }
})