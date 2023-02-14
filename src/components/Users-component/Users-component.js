import React, {useEffect} from 'react';
import {UsersService} from "../../services/users-service/users-service";
import {userActions} from "../../redax";
import {useDispatch, useSelector} from "react-redux";
import {UserComponent} from "../User-component/User-component";

const UsersComponent = () => {
    const dispatch =useDispatch()
    const {users,errors,loading}=useSelector(state=>state.users)
    useEffect(()=>{
       dispatch(userActions.getAll())
    },[])
    return (
        <div>
            {loading&&<h1>loading</h1>}
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};
