import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {PostComponent} from "../Post-component/Post-component";
import {LoaderComponent} from "../Loader-component/Loader-component";
import {postsActions} from "../../redax";

const PostsComponent = () => {
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(postsActions.getAll())
    },
        [dispatch])
    const {posts,loading} =useSelector(state => state.posts)

    return (
        <div>
            {loading&&<LoaderComponent/>}
            {posts&&posts.map(post=><PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsComponent};
