import React from 'react'
import Title from './ui/Title'
import Input from './ui/Input'
import Button from './ui/Button'

export default function AddTodoForm() {
  return (
    <article>
      <Title type="h2" center={false}>Add a todo</Title>
      <form className="flex gap10">
        <Input type="text" placeholder="What do you want to do?" />
        <Button onClick={() => console.log("Add todo")}>Add</Button>
      </form>
    </article>
  )
}
