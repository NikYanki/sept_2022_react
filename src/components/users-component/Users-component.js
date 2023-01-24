import React, {useEffect, useState} from 'react';

import {UsersService} from "../../services";
import {UserComponent} from "../user-component/User-component";

const UsersComponent = ({setUserId})=> {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        UsersService.getAllUsers().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {UsersComponent};
