'use client'
import { createContext } from 'react'

import './page.css'
import Login from './login/login.js'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Login>

      </Login>
    </ThemeProvider>
  )
}

