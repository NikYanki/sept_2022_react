import React from 'react';
import {Outlet} from "react-router-dom";

import style from "./Comments-page-component.module.css"

import {CommentsComponent} from "../../../components";

const CommentsPageComponent = () => {

    return (
        <div className={style.CommentsPage}>
            <CommentsComponent/>
            <Outlet/>
        </div>
    );
};

export {CommentsPageComponent}
