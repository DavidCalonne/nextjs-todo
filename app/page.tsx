"use client"

import React from "react";
import Title from "./components/ui/Title";
import AddCategoryForm from "./components/AddCategoryForm";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

export default function Home() {

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
