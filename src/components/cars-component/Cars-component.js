import React, {useEffect, useState} from 'react';
import {CarsService} from "../../services";
import {CarComponent} from "../car-component/Car-component";

const CarsComponent = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        CarsService.getAllCars().then(({data}) => setCars(data))
    }, [])
    return (
        <div>
            {cars && cars.map(car=><CarComponent key={car.id} value={car}/>)}
        </div>
    );
};

export {CarsComponent};
