import React from 'react';

const UserComponent = ({user, setUserId}) => {
    const {name, username, id} = user

    return (
        <div>
            <p>{name}, {username}</p>
            <button onClick={() => {
                setUserId(id)
            }}>
                get more
            </button>
        </div>
    );
};

export {UserComponent};
