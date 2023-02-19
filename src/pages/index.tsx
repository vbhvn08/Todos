import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoList from '@/components/todo-list'
import CompletedTodos from '@/components/completed-todos'
import { Todo } from '@/types/types'

const API_URL_TODOS = 'https://dummyjson.com/todos'
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const getTodos = async () => {
    try {
      const response = await axios.get(API_URL_TODOS);
      const completed = response.data.todos.filter(
        (todo: Todo) => todo.completed
      );
      setTodos(response.data.todos.filter((todo: Todo) => !todo.completed));
      setCompletedTodos(completed);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Something went wrong');
    }
  }

  useEffect(() => {
    setLoading(true);
    getTodos()
  }, [])
  return (
    <>
      <Head>
        <title>Todos Home</title>
      </Head>
      <div className="md-container container">
        {!loading && !error ? (
          <>
            <CompletedTodos completedTodos={completedTodos}></CompletedTodos>

            <TodoList
              todos={todos}
              setTodos={setTodos}
              setCompletedTodos={setCompletedTodos}
              completedTodos={completedTodos}
            ></TodoList>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
