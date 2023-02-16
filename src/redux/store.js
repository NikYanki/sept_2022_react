import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices/car-slice/car-slice";

const rootReducer = combineReducers({
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}
