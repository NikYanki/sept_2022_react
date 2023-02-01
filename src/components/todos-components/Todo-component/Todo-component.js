import React from 'react';
import {useNavigate} from "react-router-dom";

const TodoComponent = ({todo}) => {

    const navigate = useNavigate()
    const {id, title} = todo

    return (
        <div>
            <p>{title}</p>
            <button onClick={()=>{navigate(id.toString())}}>details</button>
        </div>
    );
};

export {TodoComponent}
