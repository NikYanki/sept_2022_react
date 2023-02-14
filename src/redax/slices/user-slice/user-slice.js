import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null
}

const UserSlice = createSlice({
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    initialState,
    name: 'userSlice'
})

const {reducer: userReducer, actions: {getAll, setSelectedUser}} = UserSlice

const userActions = {
    getAll,
    setSelectedUser
}

export {
    userActions,
    userReducer
}
