import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UsersService} from "../../../services/users-service/users-service";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null
}

const getById =createAsyncThunk("userSlice/getById",
    async ({id},{rejectWithValue})=>{
    try {
      const {data} = await UsersService.getById(id)
        return data
    }catch (e){
        return rejectWithValue(e.response.data)

    }
    })

const getAll = createAsyncThunk(
    "userSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await UsersService.getAllUsers()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)


const UserSlice = createSlice({
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    initialState,
    name: 'userSlice',
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading =false
        },
        [getAll.rejected]: (state, action) => {
            state.errors = action.payload
            state.loading =false

        },
        [getAll.pending]: (state) => {
            state.loading = true
        },
        [getById.fulfilled]: (state, action) => {
            state.selectedUser = action.payload
            state.loading =false
        },
        [getById.rejected]: (state, action) => {
            state.errors = action.payload
            state.loading =false

        },
        [getById.pending]: (state) => {
            state.loading = true
        }
    }
})

const {reducer: userReducer, actions: {setSelectedUser}} = UserSlice

const userActions = {
    getAll,
    setSelectedUser,
    getById
}

export {
    userActions,
    userReducer
}
