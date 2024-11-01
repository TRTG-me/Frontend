import { createSlice } from "@reduxjs/toolkit"
import { IAuthSatte } from "../../../common/types/auth"


const initialState: IAuthSatte = {
    user: {
    id: null,
    firstName: '',
    username: '',
    email:'',
    createdAt: '',
    udatedAt: '',
    watchlist:[{
        id: null,
        name: '',
        assetId: '',
        createdAt: '',
        updateAt: '',
        user: null
        }]
    },
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login(state, action){
            state.user = action.payload
            state.isLogged = true
       
        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer