import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const CarComponent = ({value}) => {
    const {id, brand, price, year} = value
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Car# :{id}</h3>
<ul>
    <li>brand: {brand}</li>
    <li>price: {price}</li>
    <li>year: {year}</li>
</ul>
            <button onClick={()=>{dispatch(carActions.setCarForUpdate(value))}}>update</button>
            <button onClick={()=>{dispatch(carActions.deleteCar({id}))}}>delete</button>
        </div>
    );
};

export {CarComponent};
