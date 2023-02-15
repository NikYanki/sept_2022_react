import React, {useState} from 'react';
import {useSelector} from "react-redux";

const HeaderComponent = () => {
    const {selectedUser} = useSelector(state => state.users)
    const {selectedPost} =useSelector(state => state.posts)
    return (
        <div>
            {selectedUser && JSON.stringify(selectedUser)}
            {selectedPost && JSON.stringify(selectedPost)}
        </div>
    );
};

export {HeaderComponent}
