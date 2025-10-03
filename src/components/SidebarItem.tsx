import React from 'react'

type SidebarItemProps = {
  children: React.ReactNode
  className?: string
}

export function SidebarItem({ children, className }: SidebarItemProps) {
  return (
    <div className={`${className} px-3 py-2 cursor-pointer hover:bg-[var(--secondary-main-01)]`}>
      {children}
    </div>
  )
}
