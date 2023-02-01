import React from 'react';
import {Outlet} from "react-router-dom";

import style from "./Albums-page-component.module.css"

import {AlbumsComponent} from "../../../components";

const AlbumsPageComponent = () => {

    return (
        <div className={style.AlbumsPage}>
            <AlbumsComponent/>
            <Outlet/>
        </div>
    );
};

export {AlbumsPageComponent}
