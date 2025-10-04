'use client'

import Breadcrumb from '@/components/Breadcrumb'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

export default function Dashboard() {
  return (
    <Box sx={{ width: 'w-full' }}>
      <Breadcrumb text='Users' />
      <div className='w-full flex'>
        <div className='inline-flex pb-2 rounded-xl border-1 bg-[var(--main)] border-[var(--color-light-gray)]'>
          <div className='w-full m-4'>
            <h4>Create user</h4>
            <div className='mt-2 md:flex lg:flex'>
              <div className='md:mr-3 lg:mr-3 mb-2'>
                <TextField size='small' id='first-name' label='First name' />
              </div>
              <div>
                <TextField size='small' id='last-name' label='Last name' />
              </div>
            </div>
            <div className='my-2 md:flex lg:flex'>
              <div className='mb-2 md:mr-3 lg:mr-3'>
                <TextField size='small' id='email' label='Email' />
              </div>
              <div>
                <TextField size='small' id='password' label='Password' />
              </div>
            </div>
            <div>
              <div className='w-auto'>
                <FormControl sx={{ width: '100%' }} size='small'>
                  <InputLabel id='role'>Role</InputLabel>
                  <Select id='role' label='Role' labelId='role' className='mb-2 md:mb-4 lg:mb-4'>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <Button variant='outlined'>Create</Button>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
