import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {CommentsService} from "../../../services";

const CommentDetailsComponent = () => {

    const {id} = useParams()
    const [comment, setComment] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        CommentsService.getCommentById(id).then(({data}) => setComment(data))
    }, [id])

    return (
        <div>
            {comment && JSON.stringify(comment)}
            {comment && <button onClick={() => {navigate('post/' + comment.postId.toString())}}>reed post</button>}
        </div>
    );
};

export {CommentDetailsComponent}
