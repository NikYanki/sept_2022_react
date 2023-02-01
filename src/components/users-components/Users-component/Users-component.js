import React, {useEffect, useState} from 'react';
import {UserService} from "../../../services";
import {UserComponent} from "../../index";

const UsersComponent = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const {data} = await UserService.getAllUsers()
        setUsers([...data])
    }

    return (
        <div>
            <button onClick={getUsers}>{users.length ? 'update' : 'getUsers'}</button>
            {users && users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};
