"use client"

import React, { useState, useEffect } from "react";
import Title from "./components/ui/Title";
import AddCategoryForm from "./components/AddCategoryForm";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

interface Todo {
  id: number
  text: string 
  category: string
  completed: boolean
}

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([])
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch('/api/todos')
    const data = await response.json()
    setTodos(data.todos)
    setCategories(data.categories)
    console.log(data)
  }
  

  return (
    <main className="">
      <section className="manage-todo p1">
        <Title type="h1" center={false}>Manage your todo list</Title>
        <div className="grid2">
          <AddTodoForm />
          <AddCategoryForm />
        </div>
        <TodoList />
      </section>
    </main>
  );
}
