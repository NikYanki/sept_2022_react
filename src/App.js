import React, {useState,useEffect} from 'react';
import {CarFormComponent, CarsComponent} from "./components";
import {CarsService} from "./services";


const App = () => {
    const [cars, setCars] = useState([])
    const [updateCar, setUpdateCar] = useState(null)
    useEffect(() => {
        CarsService.getAllCars().then(({data}) => setCars([...data]))
    }, [])
    return (
        <div>
            <CarFormComponent setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <CarsComponent cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
        </div>
    );
};

export {App};
