import {useEffect, useState} from 'react';
import {loadTodos} from "../data/api_service.ts";
import {TodoComponent} from "./TodoComponent.tsx"
import {ITodo} from "../models/TodoModel.ts";

export const TodosComponent = () => {
    const [todos, setTodos ]=useState<ITodo[]>([])
    useEffect(() => {
        async function fetchTodos(){
            const  allTodos=await loadTodos()
            setTodos((allTodos))
        }
        fetchTodos().catch(error => {
            console.error("You have Error", error);
        });
    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center  m-10 gap-10" >
            {todos.map((todo) => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </ul>
    );
};
