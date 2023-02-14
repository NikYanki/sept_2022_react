import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redax";

const UserComponent = ({user}) => {
    const {id, name} = user
    const dispatch =useDispatch()
    return (
        <div>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <button onClick={()=>{dispatch(userActions.setSelectedUser(user))}}></button>
        </div>
    );
};

export {UserComponent};
