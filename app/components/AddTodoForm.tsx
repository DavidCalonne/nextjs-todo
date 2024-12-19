"use client"

import React, { useState } from 'react'
import Title from './ui/Title'
import Input from './ui/Input'
import Button from './ui/Button'

interface AddTodoFormProps {
  categories: string[]
  onAdd: (text: string, category: string) => void
}

export default function AddTodoForm({categories, onAdd}: AddTodoFormProps) {
  const [newTodo, setNewTodo] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSubmit = () => {
    if (newTodo.trim() !== '') {
      onAdd(newTodo, selectedCategory || 'My Category')
      setNewTodo('')
      setSelectedCategory('')
    }
  }

  return (
    <article>
      <Title type="h2" center={false}>Add a todo</Title>
      <form className="flex gap10">
        <Input 
          type="text" 
          placeholder="What do you want to do?" 
          onChange={(e: any) => setNewTodo(e.target.value)} 
        />
        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </article>
  )
}
