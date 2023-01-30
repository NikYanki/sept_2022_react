import React from 'react';
import {CarsService} from "../../services";

const CarComponent = ({value, setUpdateCar, setCars}) => {
    const {id, brand, price, year} = value
    const deleteCar = async (value) => {
        await CarsService.deleteCarById(id)
        const {data} = await CarsService.getAllCars()
        setCars(data)
    }
    return (
        <div>
            <h3>Car# :{id}</h3>
            <ul>
                <li>brand: {brand}</li>
                <li>price: {price}</li>
                <li>year: {year}</li>
            </ul>
            <button onClick={() => setUpdateCar(value)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {CarComponent};
