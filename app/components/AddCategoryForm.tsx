"use client"

import React from 'react'
import Title from './ui/Title'
import Input from './ui/Input'
import Button from './ui/Button'

export default function AddCategoryForm() {
  return (
    <article>
      <Title type="h2" center={false}>Category</Title>
      <form className="flex gap10">
        <Input type="text" placeholder="My new category" />
        <Button onClick={() => console.log("Add todo")}>Add</Button>
      </form>
    </article>
  )
}
