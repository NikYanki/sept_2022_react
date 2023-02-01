import React from 'react';
import {Route, Routes} from "react-router-dom";
import {
    AboutPageComponent,
    AlbumDetailsPageComponent,
    AlbumsPageComponent,
    CommentDetailsPageComponent,
    CommentsPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    PostsPageComponent,
    TodoDetailsPageComponent,
    TodosPageComponent,
    UserDetailsPageComponent,
    UserPageComponent,

} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePageComponent/>}/>
                    <Route path={'users'} element={<UserPageComponent/>}>
                        <Route path={':id'} element={<UserDetailsPageComponent/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPageComponent/>}/>
                    <Route path={'comments'} element={<CommentsPageComponent/>}>
                        <Route path={':id'} element={<CommentDetailsPageComponent/>}>
                            <Route path={'post/:id'} element={<PostsPageComponent/>}/>
                        </Route>
                    </Route>
                    <Route path={'todos'} element={<TodosPageComponent/>}>
                        <Route path={':id'} element={<TodoDetailsPageComponent/>}/>
                    </Route>
                    <Route path={'albums'} element={<AlbumsPageComponent/>}>
                        <Route path={':id'} element={<AlbumDetailsPageComponent/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPageComponent/>}/>
            </Routes>
        </div>
    );
};

export {App};
