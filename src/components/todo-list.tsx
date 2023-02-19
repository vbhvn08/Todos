import React, {Dispatch, SetStateAction} from 'react';
import { Todo } from '@/types/types';

const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  const handleOnChange = (id: number) => {
      const completedTodo = todos.find((todo: Todo) => todo.id === id);
    setCompletedTodos([
        ...completedTodos,
        completedTodo as Todo,
    ]);
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };
  return (
    <>
      <h2 className="text-center">To do</h2>
      <div className="todo-list row p-3">
        {todos.map((todo: Todo, index: number) => (
          <div key={todo.id} className="p-2 col-12 bg-white mb-3">
            <input
              type="checkbox"
              name="scales"
              id={`todo-checkbox-${todo.id}`}
              onChange={() => handleOnChange(todo.id)}
              className="form-check-input me-2"
            />
            <label
              className="form-check-label d-inline"
              htmlFor={`todo-checkbox-${todo.id}`}
            >
              <span className="me-2">{index + 1}.</span>
              <span>{todo.todo}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

type Props = {
    todos: Todo[];
    completedTodos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
    setCompletedTodos: Dispatch<SetStateAction<Todo[]>>;
};
export default TodoList;
