// const endpoint =import.meta.env.VITE_API_BASE_URL;
import {ITodoModel} from "../models/TodoModel.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'
console.log(endpointTodos)

const loadTodos = async ():Promise<ITodoModel[]>=>{
  return await fetch(endpointTodos)
        .then(value => value.json())
}
export {loadTodos}
