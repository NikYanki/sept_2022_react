import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {CarValidator} from "../../validators";
import {carActions} from "../../redux";

const CarFormComponent = () => {
    const dispatch = useDispatch()
    const {selectCar} = useSelector((state) => state.cars)
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    })
    useEffect(() => {
        if (selectCar) {
            setValue('brand', selectCar.brand, {shouldValidate: true})
            setValue('price', selectCar.price, {shouldValidate: true})
            setValue('year', selectCar.year, {shouldValidate: true})
        }
    }, [selectCar])
    const submit = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    }
    const update = async (car) => {
        await dispatch(carActions.update({id:selectCar.id, car}))
        reset()
        dispatch(carActions.setCarForUpdate(null))
    }
    return (

        <form onSubmit={handleSubmit(selectCar ? update : submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{selectCar ? "Update" : "Save"}</button>
        </form>
    );
};

export {CarFormComponent};
