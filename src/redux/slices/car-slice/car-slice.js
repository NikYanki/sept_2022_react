import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {CarsService} from "../../../services";

const initialState = {
    cars: [],
    errors: null,
    loading: null,
    selectCar: null
}

const getAll = createAsyncThunk("carSlice/getAll",
    async (_, thunkAPI) => {
        try {
            const {data} = await CarsService.getAllCars()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const create = createAsyncThunk("carSlice/create",
    async ({car}, thunkAPI) => {
        try {
            await CarsService.createCar(car)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const deleteCar = createAsyncThunk("carSlice/deleteCar",
    async ({id}, thunkAPI) => {
        try {
            await CarsService.deleteCarById(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })
const update = createAsyncThunk("carSlice/update",
    async ({id, car}, thunkAPI) => {
        try {
            await CarsService.updateCarById(id, car)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })
const CarSlice = createSlice({
    name: "carSlice",
    reducers: {
        setCarForUpdate: (state, action) => {
            state.selectCar = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
            state.loading = false
        })
        .addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload
            state.loading = false
        })
        .addDefaultCase((state, action) => {
            const [pending] = action.type.split("/").slice(-1)
            pending === "pending" ? state.loading = true : state.loading = false
        }),
    initialState
})
const {reducer: carReducer, actions: {setCarForUpdate}} = CarSlice

const carActions = {
    getAll,
    create,
    deleteCar,
    update,
    setCarForUpdate
}

export {
    carActions,
    carReducer
}
