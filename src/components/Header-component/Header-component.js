import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Header.module.css'

const HeaderComponent = () => {

    return (
        <div className={style.header}>
            <NavLink to={''}>home</NavLink>
            <NavLink to={'users'}>users</NavLink>
            <NavLink to={'todos'}>todos</NavLink>
            <NavLink to={'albums'}>albums</NavLink>
            <NavLink to={'comments'}>comments</NavLink>
            <NavLink to={'about'}>about</NavLink>
        </div>
    );
};

export {HeaderComponent}
