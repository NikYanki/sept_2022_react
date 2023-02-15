import React from 'react';
import {Route, Routes} from "react-router-dom";

import {
    HomePageComponent,
    PostPageComponent,
    PostsPageComponent,
    UserPageComponent,
    UsersPageComponent
} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePageComponent/>}/>
                <Route path={"users"} element={<UsersPageComponent/>}/>
                <Route path={"users/:id"} element={<UserPageComponent/>}/>
                <Route path={"posts"} element={<PostsPageComponent/>}/>
                <Route path={"posts/:id"} element={<PostPageComponent/>}/>

            </Routes>
        </div>
    );
};

export {App};
