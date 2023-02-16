import React from 'react';

import {CarFormComponent, CarsComponent} from "./components";

const App = () => {
    return (
        <div>
            <CarFormComponent/>
            <hr/>
            <CarsComponent/>
        </div>
    );
};

export {App};
