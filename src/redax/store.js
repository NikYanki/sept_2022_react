import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/user-slice/user-slice";

const rootReducer = combineReducers({
    users: userReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}

