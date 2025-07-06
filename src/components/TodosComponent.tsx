import {useEffect, useState} from 'react';
import {loadTodos} from "../servises/api_servise.tsx";
import {ITodoModel} from "../models/TodoModel.ts";
import {TodoComponent} from "./TodoComponent";

export const TodosComponent = () => {
    const [todos, setTodos]=useState<ITodoModel[]>([])
    useEffect(() => {
        loadTodos().then(value=>setTodos(value))
    }, []);
    return (
    <ul className="flex flex-wrap justify-center self-center  m-10 gap-[40px]">
        {
        todos.map((todo:ITodoModel)=><TodoComponent todo={todo} key={todo.id}/>)
    }
    </ul>)
};


