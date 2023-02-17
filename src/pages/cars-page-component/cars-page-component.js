import React from 'react';
import {CarFormComponent, CarsComponent} from "../../components";

const CarsPageComponent = () => {
    return (
        <div>
            <CarFormComponent/>
            <hr/>
            <CarsComponent/>
        </div>
    );
};

export {CarsPageComponent};
