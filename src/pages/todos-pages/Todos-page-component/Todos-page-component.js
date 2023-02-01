import React from 'react';
import {Outlet} from "react-router-dom";

import style from "./Todos-page-component.module.css"

import {TodosComponent} from "../../../components";

const TodosPageComponent = () => {

    return (
        <div className={style.TodosPage}>
            <TodosComponent/>
            <Outlet/>
        </div>
    );
};

export {TodosPageComponent}
