'use client'

import Sidebar from '@/components/Sidebar'
import { supabase } from '@/lib/supabaseClient'
import { SessionContextProvider, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <ProtectedAdmin>{children}</ProtectedAdmin>
    </SessionContextProvider>
  )
}

function ProtectedAdmin({ children }: { children: React.ReactNode }) {
  const user = useUser()
  const router = useRouter()
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login')
      }
    })
  }, [router])

  if (!user) return null

  return (
    <div id='root'>
      <div className='flex justify-between w-full'>
        <Sidebar />
        <main className='mt-3 mr-3'>{children}</main>
      </div>
    </div>
  )
}
