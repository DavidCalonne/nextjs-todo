import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'todos.json')

interface Todo {
  id: number
  text: string
  category: string
  completed: boolean
}

interface Data {
  todos: Todo[]
  categories: string[]
}

async function getData(): Promise<Data> {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return { todos: [], categories: ['My Category'] }
  }
}

async function saveData(data: Data): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2))
}

export async function GET() {
  const data = await getData()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const { action, payload } = await request.json()
  const data = await getData()

  switch (action) {
    case 'ADD_TODO':
      data.todos.push(payload)
      break
    case 'TOGGLE_TODO':
      data.todos = data.todos.map(todo =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      )
      break
    case 'UPDATE_TODO':
      data.todos = data.todos.map(todo =>
        todo.id === payload.id ? payload : todo
      )
      break
    case 'DELETE_TODO':
      data.todos = data.todos.filter(todo => todo.id !== payload.id)
      break
    case 'ADD_CATEGORY':
      if (!data.categories.includes(payload)) {
        data.categories.push(payload)
      }
      break
    case 'UPDATE_CATEGORY':
      data.categories = data.categories.map(category =>
        category === payload.oldCategory ? payload.newCategory : category
      )
      data.todos = data.todos.map(todo =>
        todo.category === payload.oldCategory ? { ...todo, category: payload.newCategory } : todo
      )
      break
    case 'DELETE_CATEGORY':
      data.categories = data.categories.filter(category => category !== payload)
      data.todos = data.todos.map(todo =>
        todo.category === payload ? { ...todo, category: 'My Category' } : todo
      )
      break
    default:
      return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 })
  }

  await saveData(data)
  return NextResponse.json(data)
}

