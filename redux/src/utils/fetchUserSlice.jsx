import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"


export const fetchUser = createAsyncThunk("user/fetchuser" , async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data  = await response.json()
    return data
})

const fetchUserSlice = createSlice({
    name : "fetchUser" , 
    initialState : { 
        users : [] ,
        status : "idle",
        error : null
    },
    reducers: {},

    extraReducers: (builder ) => {
        builder.addCase(fetchUser.pending , (state,action) => {
            state.status = "loading"
        })
        .addCase(fetchUser.fulfilled , (state,action) => {
            state.status = "succeed";
            state.users = action.payload;

        })
        .addCase(fetchUser.rejected , (state,action) => {
            state.status = "failed" ; 
            state.error = action.error.message;
        })
    }
})

export default fetchUserSlice.reducer ;