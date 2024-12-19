import React from 'react';
import Title from './ui/Title';
import { ListTodo } from 'lucide-react';

export default function Header() {
  return (
    <header className="p1-5">
        <span className="name-app flex gap5 fa-c fj-c t-violet"><ListTodo /><strong className="ultrabold">Todo</strong> App</span>
        <p className="tc">Easy way to manage your todo list</p>
    </header>
  )
}
