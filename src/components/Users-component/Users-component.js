import React, {useEffect} from 'react';
import {UsersService} from "../../services/users-service/users-service";
import {userActions} from "../../redax";
import {useDispatch, useSelector} from "react-redux";
import {UserComponent} from "../User-component/User-component";

const UsersComponent = () => {
    const dispatch =useDispatch()
    const {users}=useSelector(state=>state.users)
    useEffect(()=>{
        UsersService.getAllUsers().then(({data})=>dispatch(userActions.getAll(data)))
    },[])
    return (
        <div>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};
