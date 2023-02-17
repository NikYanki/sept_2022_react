import React from 'react';
import {Outlet} from "react-router-dom";

const AuthRequiereLayout = () => {
    return (
        <div>
<Outlet/>
        </div>
    );
};

export {AuthRequiereLayout}
