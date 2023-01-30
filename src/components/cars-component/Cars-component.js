import React from 'react';
import {CarComponent} from "../car-component/Car-component";

const CarsComponent = ({cars,setUpdateCar,setCars}) => {

    return (
        <div>
            {cars && cars.map(car=><CarComponent key={car.id} value={car} setUpdateCar={setUpdateCar} setCars={setCars}/>)}
        </div>
    );
};

export {CarsComponent};
