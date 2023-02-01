import React, {useEffect, useState} from 'react';

import {TodosService} from "../../../services";
import {TodoComponent} from "../Todo-component/Todo-component";

const TodosComponent = () => {

    const [todos, setTodos]=useState([])

    useEffect(()=>{
        TodosService.getAllTodos().then(({data})=>setTodos([...data]))
    },[])

    return (
        <div>
            {todos && todos.map(todo=><TodoComponent key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {TodosComponent}
