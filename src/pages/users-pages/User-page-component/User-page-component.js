import React from 'react';
import {Outlet} from "react-router-dom";

import {UsersComponent} from "../../../components";

const UserPageComponent = () => {

    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export {UserPageComponent};
