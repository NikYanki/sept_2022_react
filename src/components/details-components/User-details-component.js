import React, {useState} from 'react';
import {useSelector} from "react-redux";

import {LoaderComponent} from "../Loader-component/Loader-component";

const UserDetailsComponent = () => {
    const {selectedUser, loading} = useSelector(state => state.users)

    return (
        <div>
            {loading && <LoaderComponent/>}
            {selectedUser&&<div>
                <ul>
                    <h2>user {selectedUser.name}</h2>
                    <li>id: {selectedUser.id}</li>
                    <li>name: {selectedUser.name}</li>
                    <li>username: {selectedUser.username}</li>
                    <li>email: {selectedUser.email}</li>
                    <li>phone: {selectedUser.phone}</li>
                    <li>website: {selectedUser.website}</li>
                </ul>

            </div>}</div>
    );
};

export {UserDetailsComponent}
