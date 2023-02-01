import React from 'react';
import {Outlet} from "react-router-dom";

import {HeaderComponent} from "../../components";

const MainLayout = () => {

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}
