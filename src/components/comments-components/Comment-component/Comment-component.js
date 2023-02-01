import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";

const CommentComponent = ({comment}) => {

    const {id, name} = comment
    const navigate = useNavigate()

    return (
        <div>
            <h4>{id}--{name}</h4>
            <button onClick={() => {navigate(id.toString())}}>get details</button>
        </div>
    );
};

export {CommentComponent}
