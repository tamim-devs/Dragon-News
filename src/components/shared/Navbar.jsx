'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from '@/components/shared/NavLink'
import { authClient } from "@/lib/auth-client"
const Navbar = () => {
    
const { data: session } = authClient.useSession();

const user = session?.user;

console.log(user,"session");


  return (
    <div className='flex justify-between  container mx-auto mt-4'>
        <div></div>
        <ul className='flex gap-2 items-center text-center text-gray-700'>
            <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink href={'/about'}>About</NavLink></li>
            <li><NavLink  href={'/career'}>Career</NavLink></li>
        </ul>
        {user ? (
            <div className='flex items-center gap-2 '>
            <h2>{user?.name}</h2>
              <Image 
              src={user?.image }
              width={60} 
              height={60} 
              alt='user'
              className='rounded-full'
            />
            <button className='btn bg-purple-600 text-white'>
                <Link onClick={async ()=> await authClient.signOut()} href={'/'}>
                Log out
            </Link></button>
        </div>
        ):(
              <button className='btn bg-purple-600 text-white'>
                <Link href={'/login'}>
                Login
            </Link></button>
        )}
        
    </div>
  )
}

export default Navbar