import React, {useEffect, useState} from 'react';

import {UsersService} from "../../services";

const DeepUserComponent = ({userId}) => {
const [user, setUser]= useState(null)

 useEffect(()=>{
     UsersService.getUserById(userId).then(value => value.data).then(value => setUser(value))
 },[userId])

    return (
        <div>
            {userId && <p>{JSON.stringify(user)}</p>}
        </div>
    );
};

export {DeepUserComponent};
