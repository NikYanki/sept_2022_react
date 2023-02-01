import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {PostService} from "../../services";

const PostComponent = () => {

    const {id} = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        PostService.getPost(id).then(({data}) => setPost(data))
    }, [id])

    return (
        <div>
            {post && JSON.stringify(post)}
        </div>
    );
};

export {PostComponent}
