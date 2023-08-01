'use client'
import './globals.css'
//import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeContext, ThemeChangeContext } from './context'
import { useReducer } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carmine Sacco - Software Engineer',
  description: 'Carmine Sacco\'s Portfolio built with Next.js',
}

function changeTheme(theme: string, isChanged: boolean): string{
  if(isChanged)
  {
    theme = theme==='light' ? 'dark' : 'light';
  }

  return theme;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, switchTheme] = useReducer(changeTheme,
    'light');
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  return (
        <ThemeContext.Provider value={theme}>
          <ThemeChangeContext.Provider value={switchTheme}>
          <html className={`${theme} text-center`}>
            <body className='dark:bg-black-800'>
              {children}
            </body>
          </html>
          
        </ThemeChangeContext.Provider>
        </ThemeContext.Provider>
  )
}
