'use client'

import { Box } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import { SidebarItem } from './SidebarItem'
import { usePathname } from 'next/navigation'
import { useUser } from '@supabase/auth-helpers-react'
import { grantAdminUUID } from '@/lib/grantAdmin'

export default function Sidebar() {
  const pathName = usePathname()
  const user = useUser()
  const prefix = '/admin'
  return (
    <Box
      component='aside'
      className='text-[1rem] w-28 md:w-54 sm:w-36 mr-2 sm:mr-4 md:mr-4 lg:mr-4'
      sx={{
        pt: 2,
        backgroundColor: 'var(--main)',
        color: 'text.primary',
        height: '100vh',
        borderRight: '1px solid var(--color-light-gray)',
      }}
    >
      <div className='flex flex-col'>
        <SidebarItem
          className={`text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px]  ${
            pathName === prefix + '/dashboard' ? 'active-link' : ''
          }`}
          icon={
            <DashboardIcon className='w-[18px]! h-[18px]! sm:w-[22px] sm:h-[14px] md:w-[22px] md:h-[14px] lg:w-[22px] lg:h-[14px]' />
          }
          link={`${prefix}/dashboard`}
          text='Dashboard'
        ></SidebarItem>
        {user?.id === grantAdminUUID && (
          <SidebarItem
            className={`text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px] ${
              pathName === prefix + '/users' ? 'active-link' : ''
            }`}
            icon={
              <PeopleIcon className='w-[18px]! h-[18px]! sm:w-[22px] sm:h-[14px] md:w-[22px] md:h-[14px] lg:w-[22px] lg:h-[14px]' />
            }
            link={`${prefix}/users`}
            text='Users'
          ></SidebarItem>
        )}
      </div>
    </Box>
  )
}
