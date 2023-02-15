import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {postsActions} from "../../redax";

const PostComponent = ({post}) => {
    const navigate =useNavigate()
    const dispatch =useDispatch()
    const {id, title} = post
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <button onClick={()=> {dispatch(postsActions.getById({id}))
            navigate(id.toString())
            }
            }>select</button>
        </div>
    );
};

export {PostComponent};
