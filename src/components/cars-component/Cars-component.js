import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {CarComponent} from "../car-component/Car-component";

const CarsComponent = () => {
    const dispatch = useDispatch()
    const {cars} = useSelector(state => state.cars)
    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])
    return (
        <div>
            {cars && cars.map(car => <CarComponent key={car.id} value={car}/>)}
        </div>
    );
};

export {CarsComponent};
