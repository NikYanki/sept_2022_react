import React from 'react';

const SimpsonComponent = ({simpson}) => {
    const {name, url} = simpson;
    return (
        <div className='character'>
            <h3>{name}</h3>
            <img src={url} alt={name}/>
        </div>
    );
};

export {SimpsonComponent};
