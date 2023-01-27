import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarValidator} from "../../validators";
import {CarsService} from "../../services";

const CarFormComponent = () => {
    // const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'})
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    })

    const submit = async (car) => {
        const {data} =await CarsService.createCar(car)
        console.log(data);
    }
    return (
        // <form onSubmit={handleSubmit(submit)}>
        //     <input type="text" placeholder={'brand'} {...register('brand', {
        //         pattern: {
        //             value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
        //             message: 'wtf'
        //         }
        //     })}/>
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //     <input type="text" placeholder={'price'} {...register('price', {
        //         valueAsNumber: true,
        //         min: {value: 0, message: 'min:0'},
        //         max: {value: 1000000, message: 'max:1000000'}
        //     })}/>
        //     {errors.price && <span>{errors.price.message}</span>}
        //     <input type="text" placeholder={'year'} {...register('year', {
        //         valueAsNumber: true,
        //         min: {value: 1990, message: 'min:0'},
        //         max: {value: new Date().getFullYear(), message: `max:${new Date().getFullYear()}`}
        //     })}/>
        //     {errors.year && <span>{errors.year.message}</span>}
        //     <button>Save</button>
        // </form>

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CarFormComponent};
