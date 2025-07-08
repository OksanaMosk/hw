
import {ITodoJsonModel} from "../models/TodoJsonModel.ts"
import {ITodo} from "../models/TodoModel.ts";
const endpointTodos= import.meta.env.VITE_API_BASE_URL + '/todos'

const loadTodos= async ():Promise<ITodo[]>  => {
   const response:ITodoJsonModel = await fetch(endpointTodos)
        .then(value=> value.json())

return response.todos
}


export {loadTodos}
