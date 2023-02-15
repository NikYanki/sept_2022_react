import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {UserComponent} from "../User-component/User-component";
import {LoaderComponent} from "../Loader-component/Loader-component";
import {userActions} from "../../redax";

const UsersComponent = () => {
    const dispatch =useDispatch()
    const {users,errors,loading}=useSelector(state=>state.users)
    useEffect(()=>{
       dispatch(userActions.getAll())
    },[dispatch])

    return (
        <div>
            {loading&&<LoaderComponent/>}
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};
