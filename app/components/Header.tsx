import React from 'react';
import Title from './ui/Title';
import { ListTodo } from 'lucide-react';

export default function Header() {
  return (
    <header className="p1-5">
        <Title type="h1"><ListTodo /><strong className="ultrabold">Todo</strong> App</Title>
        <p className="tc">Easy way to manage your todo list</p>
    </header>
  )
}
