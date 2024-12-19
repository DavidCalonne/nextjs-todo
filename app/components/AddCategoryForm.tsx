"use client"

import React, { useState } from 'react'
import Title from './ui/Title'
import Input from './ui/Input'
import Button from './ui/Button'

interface AddCategoryFormProps {
  onAdd: (category: string) => void
}

export default function AddCategoryForm({ onAdd }: AddCategoryFormProps) {
  const [newCategory, setNewCategory] = useState<string>('')

  const handleSubmit = () => {
    if (newCategory.trim() !== '') {
      onAdd(newCategory)
      setNewCategory('')
    }
  }

  return (
    <article>
      <Title type="h2" center={false}>Category</Title>
      <form className="flex gap10">
        <Input 
          type="text" 
          placeholder="My new category" 
          onChange={(e: any) => setNewCategory(e.target.value)} 
        />
        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </article>
  )
}
