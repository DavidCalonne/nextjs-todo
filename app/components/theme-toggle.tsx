"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"


export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="theme-switcher" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon /> : <Sun />}
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}