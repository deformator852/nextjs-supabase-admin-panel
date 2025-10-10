'use client'

import Breadcrumb from '@/components/Breadcrumb'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

export default function Users() {
  return (
    <Box>
      <Breadcrumb text='Users' />
      <div className='p-4 rounded-xl border-1 bg-[var(--main)] border-[var(--color-light-gray)]'>
        <h4>Create user</h4>
        <div className='mt-2 md:flex lg:flex'>
          <div className='w-full md:mr-3 lg:mr-3 mb-2'>
            <TextField
              sx={{
                color: 'var(--secondary-main)',
                '& .MuiOutlinedInput-root' : {
                  '&:hover fieldset':{
                    borderColor:'var(--secondary-main)'
                  }
                }
              }}
              className='w-full'
              size='small'
              id='first-name'
              label='First name'
            />
          </div>
          <div className='w-full'>
            <TextField
              sx={{
                color: 'var(--secondary-main)',
                '& .MuiOutlinedInput-root' : {
                  '&:hover fieldset':{
                    borderColor:'var(--secondary-main)'
                  }
                }
              }}
              className='w-full'
              size='small'
              id='last-name'
              label='Last name'
            />
          </div>
        </div>
        <div className='my-2 md:flex lg:flex'>
          <div className='w-full mb-2 md:mr-3 lg:mr-3'>
            <TextField
              sx={{
                color: 'var(--secondary-main)',
                '& .MuiOutlinedInput-root' : {
                  '&:hover fieldset':{
                    borderColor:'var(--secondary-main)'
                  }
                }
              }}
              className='w-full'
              size='small'
              id='email'
              label='Email'
            />
          </div>
          <div className='w-full'>
            <TextField
              sx={{
                color: 'var(--secondary-main)',
                '& .MuiOutlinedInput-root' : {
                  '&:hover fieldset':{
                    borderColor:'var(--secondary-main)'
                  }
                }
              }}
              className='w-full'
              size='small'
              id='password'
              label='Password'
            />
          </div>
        </div>
        <div>
          <div className='w-full flex justify-center'>
            <Button className='w-full lg:w-[30rem]' variant='outlined'>
              Create
            </Button>
          </div>
        </div>
      </div>
    </Box>
  )
}
