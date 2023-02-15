import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redax";
import {faHeart, faHeartBroken} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import PrettyRating from "pretty-rating-react";

const UserComponent = ({user}) => {
    const heart= {
        complete: faHeart,
        half: faHeartBroken,
        empty: farHeart,
    }
    const colors = ['#9b111e', '#a83f39']

    const {id, name} = user
    const dispatch =useDispatch()
    return (
        <div>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <PrettyRating rating={5} icons={heart} colors={colors}value={Math.random()*5}/>
            <button onClick={()=>{dispatch(userActions.setSelectedUser(user))}}>select</button>
            <button onClick={()=>{dispatch(userActions.getById({id}))}}>api select</button>
        </div>
    );
};

export {UserComponent};
