import React, {useState} from 'react';

import {CommentsService} from "../../../services";
import {CommentComponent} from "../Comment-component/Comment-component";

const CommentsComponent = () => {

    const [comments, setComments] = useState([])
    const getComments = async () => {
        const {data} = await CommentsService.getAllComments()
        setComments([...data])
    }

    return (
        <div>
            <button onClick={getComments}>{comments.length ? 'update' : 'getComments'}</button>
            {comments && comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsComponent}
