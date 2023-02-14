import React, {useState} from 'react';
import {useSelector} from "react-redux";

const HeaderComponent = () => {
    const {selectedUser} = useSelector(state => state.users)
    return (
        <div>
            {selectedUser && JSON.stringify(selectedUser)}
        </div>
    );
};

export {HeaderComponent}
