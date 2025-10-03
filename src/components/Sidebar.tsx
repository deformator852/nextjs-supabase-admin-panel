'use client'

import { Box } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import { SidebarItem } from './SidebarItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathName = usePathname()
  const prefix = '/admin'
  return (
    <Box
      component='aside'
      className='absolute left-0 text-[1rem]'
      sx={{
        pt: 2,
        backgroundColor: 'var(--main)',
        color: 'text.primary',
        minWidth: 200,
        height: '100vh',
        borderRight: '1px solid var(--color-light-gray)',
      }}
    >
      <SidebarItem className={pathName === prefix + '/dashboard' ? 'active-link' : ''}>
        <DashboardIcon />
        <Link href='/dashboard' className='font-normal'>
          Dashboard
        </Link>
      </SidebarItem>
      <SidebarItem className={pathName === prefix + '/users' ? 'active-link' : ''}>
        <PeopleIcon />
        <Link href='/users' className='font-normal'>
          Users
        </Link>
      </SidebarItem>
    </Box>
  )
}
