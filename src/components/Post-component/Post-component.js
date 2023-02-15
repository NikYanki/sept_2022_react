import React from 'react';
import {useDispatch} from "react-redux";
import {postsActions} from "../../redax";

const PostComponent = ({post}) => {
    const dispatch =useDispatch()
    const {id, title} = post
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <button onClick={()=>dispatch(postsActions.getById({id}))}>select</button>
        </div>
    );
};

export {PostComponent};
