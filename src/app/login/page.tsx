'use client'

import { supabase } from '@/lib/supabaseClient'
import theme from '@/lib/theme'
import { Button, TextField, ThemeProvider } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
    } else {
      alert('login success')
      router.push('/admin/dashboard')
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <main className='flex justify-center items-start flex-col'>
        <form onSubmit={handleLogin} className='grid grid-cols-1 grid-flow-row gap-3'>
          {error && <p className='text-red-500'>{error}</p>}
          <TextField
            type='email'
            label='email'
            variant='outlined'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type='password'
            label='password'
            variant='outlined'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='submit' variant='contained'>
            log in
          </Button>
        </form>
      </main>
    </ThemeProvider>
  )
}
