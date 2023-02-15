import React from 'react';
import style from "./Loader-component.module.css"

const LoaderComponent = () => {

    return (
        <div>
            <span className={style.loader}></span>
        </div>
    );
};

export {LoaderComponent}
