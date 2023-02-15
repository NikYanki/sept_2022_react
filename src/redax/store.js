import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/user-slice/user-slice";
import {postReducer} from "./slices/post-slice/post-slice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}

