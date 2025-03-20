import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../utils/counterslice"
import todoReducer from "../utils/todosSlice"
import usersReducer from "../utils/fetchUserSlice"

export const store = configureStore({
   reducer : {
    count  : counterReducer ,
    todos: todoReducer,
    fetchUser : usersReducer,
   }
})