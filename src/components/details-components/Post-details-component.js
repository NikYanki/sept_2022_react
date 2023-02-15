import React from 'react';
import {useSelector} from "react-redux";
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import PrettyRating from "pretty-rating-react";

import {LoaderComponent} from "../";

const PostDetailsComponent = () => {
    const {selectedPost, loading} = useSelector(state => state.posts)

    return (
        <div>
            {loading && <LoaderComponent/>}
            {selectedPost && <div>
                <ul>
                    <h2>post {selectedPost.title}</h2>
                    <li>id: {selectedPost.id}</li>
                    <li>title: {selectedPost.title}</li>
                    <li>body: {selectedPost.body}</li>
                    <li>userId: {selectedPost.userId}</li>

                </ul>
                <PrettyRating rating={5} icons={{
                    complete: faStar,
                    half: faStarHalfAlt,
                    empty: faStar
                }} colors={['#d9ad26', '#d9ad26', '#434b4d']} value={Math.random() * 5}/>
            </div>}
        </div>
    );
};

export {PostDetailsComponent};
