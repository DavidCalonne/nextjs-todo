"use client"

import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="p1-5 flex gap5 fa-c fj-c">
        <p className="tc">Made with ❤️ by <a href="https://github.com/DavidCalonne" className="t-violet" target="_blank" rel="noopener noreferrer">David Calonne</a></p>
        <nav>
            <ul className="list-logo flex gap5 fj-c">
                <li><a href="https://github.com/DavidCalonne" target="_blank" rel="noopener noreferrer" className="flex gap5"><Github /> <span className="sr-only">Github</span></a></li>
                <li><a href="https://www.linkedin.com/in/dcalonne/" target="_blank" rel="noopener noreferrer" className="flex gap5"><Linkedin /> <span className="sr-only">Linkedin</span></a></li>
            </ul>
        </nav>
    </footer>
  )
}
