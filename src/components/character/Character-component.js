import React from 'react';

const CharacterComponent = ({character}) => {
    const {name, species, image, status, gender} = character
    return (
        <div className='character'>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <p><b>{species}</b>, {status}, {gender}</p>

        </div>
    );
};

export {CharacterComponent};
