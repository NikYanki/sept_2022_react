import React from 'react';
import {HeaderComponent, PostsComponent, UsersComponent} from "./components";
import {Route, Routes} from "react-router-dom";
import {HomePageComponent, PostsPageComponent, UsersPageComponent} from "./pages";

const App = () => {
    return (
        <div>
<Routes>
    <Route path={'/'} element={<HomePageComponent/>}/>
    <Route path={"users"} element={<UsersPageComponent/>}/>
    <Route path={"posts"} element={<PostsPageComponent/>}/>
</Routes>
        </div>
    );
};

export {App};
