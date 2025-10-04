import Link from 'next/link'
import React from 'react'

type SidebarItemProps = {
  icon: React.ReactNode
  link: string
  text: string
  className?: string
}

export function SidebarItem({ icon, link, text, className }: SidebarItemProps) {
  return (
    <Link
      href={link}
      className={`${className} px-3 py-2 cursor-pointer hover:bg-[var(--secondary-main-01)]`}
    >
      {icon}
      {text}
    </Link>
  )
}
