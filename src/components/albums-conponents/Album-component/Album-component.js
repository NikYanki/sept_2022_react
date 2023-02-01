import React from 'react';
import {useNavigate} from "react-router-dom";

const AlbumComponent = ({album}) => {

    const navigate = useNavigate()
    const {id} = album

    return (
        <div>
            <h4>album#{id}</h4>
            <button onClick={() => {navigate(id.toString())}}>get details</button>
        </div>
    );
};

export {AlbumComponent}
