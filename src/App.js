import React, {useState} from 'react';

import {DeepUserComponent,LounchesComponent,UsersComponent} from "./components";

const App = () => {
    const [userId, setUserId] = useState(null)
    return (
        <div>
            {userId && <DeepUserComponent userId={userId}/>}
            <UsersComponent setUserId={setUserId}/>
            <LounchesComponent/>
        </div>
    );
};

export {App};
