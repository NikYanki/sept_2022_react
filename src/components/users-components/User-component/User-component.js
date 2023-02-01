import React from 'react';
import {useNavigate} from "react-router-dom";

const UserComponent = ({user}) => {

    const navigate = useNavigate()
    const {name,id}= user

    return (
        <div>
            <p>{name}</p>
            <button onClick={()=>{navigate(id.toString())}}>details</button>
        </div>
    );
};

export {UserComponent};
