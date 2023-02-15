import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PostsService} from "../../../services";

const initialState = {
    posts: [],
    selectedPost: null,
    errors: null,
    loading: null
}
const getById = createAsyncThunk("postSlice/getById",
    async ({id}, {rejectWithValue}) => {
        try {
            await new Promise(resolve => setTimeout(() => resolve(), 500))
            const {data} = await PostsService.getById(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    })

const getAll = createAsyncThunk("postSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            await new Promise(resolve => setTimeout(() => resolve(), 500))
            const {data} = await PostsService.getAll()
            console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    })
const PostSlice = createSlice({
    reducers: {},
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.loading = false
        },
        [getAll.rejected]: (state, action) => {
            state.errors = action.payload
            state.loading = false
        },
        [getAll.pending]: (state) => {
            state.loading = true
        },
        [getById.fulfilled]: (state, action) => {
            state.selectedPost = action.payload
            state.loading = false
        },
        [getById.rejected]: (state, action) => {
            state.errors = action.payload
            state.loading = false
        },
        [getById.pending]: (state) => {
            state.loading = true
        }
    },
    name: "postSlice",
    initialState
})
const {reducer: postReducer} = PostSlice
const postsActions = {
    getAll,
    getById
}
export {
    postsActions,
    postReducer
}
