import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {CarsService} from "../../services";
import {CarValidator} from "../../validators";
import {joiResolver} from "@hookform/resolvers/joi";


const CarFormComponent = ({setCars, updateCar}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    })
    useEffect(() => {
            if (updateCar) {
                setValue('brand', updateCar.brand)
                setValue('price', updateCar.price)
                setValue('year', updateCar.year)
            }
        },
        [updateCar])
    const submit = async (car) => {
        const {data} = await CarsService.createCar(car)
        setCars(prev => [...prev, data])
        reset()
    }
    const update = async (car) => {
        const {data} = await CarsService.updateCarById(updateCar.id, car)
        if (Object.keys(data).length) {
            const {data} = await CarsService.getAllCars()
            setCars(data)
        }
    }

    return (

        <form onSubmit={handleSubmit(updateCar ? update : submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarFormComponent};
