import React from 'react';

import style from './header.module.css'
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className={style.header}>
<div>
    <NavLink to={"/login"}>login</NavLink>
    <NavLink to={"/register"}>register</NavLink>
</div>
        </div>
    );
};

export {HeaderComponent}
