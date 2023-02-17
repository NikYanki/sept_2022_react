import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {CarComponent} from "../car-component/Car-component";
import {useSearchParams} from "react-router-dom";

const CarsComponent = () => {
    const dispatch = useDispatch()
    const {cars, prev, next} = useSelector(state => state.cars)
    const [query, setQuery]= useSearchParams({page:"1"})
    useEffect(() => {
        dispatch(carActions.getAll({page:query.get('page')}))
    }, [dispatch, query])
    return (
        <div>
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get("page")-1}))}>prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get("page")+1}))}>next</button>
            </div>
            {cars.map(car => <CarComponent key={car.id} value={car}/>)}
        </div>
    );
};

export {CarsComponent};
