'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href,children,className}) => {
    const pathName = usePathname()
    const isActive = href === pathName
  return   <Link  className={`${isActive ?  " border-0  border-b-4 outline-0 border-b-purple-500" : ""} ${className}`} href={href}>{children}</Link>
     
}

export default NavLink