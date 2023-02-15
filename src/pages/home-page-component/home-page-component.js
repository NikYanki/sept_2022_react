import React from 'react';
import {useNavigate} from "react-router-dom";

const HomePageComponent = () => {
    const navigate =useNavigate()

    return (
        <div>
            <button onClick={()=>navigate("users")}>users</button>
            <button onClick={()=>navigate("posts")}>posts</button>
        </div>
    );
};

export {HomePageComponent};
