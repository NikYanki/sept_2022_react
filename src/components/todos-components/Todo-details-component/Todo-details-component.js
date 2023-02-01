import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {TodosService} from "../../../services";

const TodoDetailsComponent = () => {

    const {id} = useParams()
    const [todoDetails, setTodoDetails] = useState(null)
    useEffect(()=>{
        TodosService.getTodoById(id).then(({data}) => setTodoDetails(data))
    },[id])

    return (
        <div>
            {todoDetails && <p>{JSON.stringify(todoDetails)}</p>}
        </div>
    );
};

export {TodoDetailsComponent}
