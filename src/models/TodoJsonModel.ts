import {ITodo}  from './TodoModel.ts';

export interface ITodoJsonModel {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}
