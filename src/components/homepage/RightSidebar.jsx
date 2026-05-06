'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const RightSidebar = () => {
  
  const handleGoogleSignIn = async () => {
   const data = await authClient.signIn.social({
    provider: "google",
  })

  console.log(data , 'data');
  
  }

  const handleGithubSignIn = async () => {
   const data = await authClient.signIn.social({
    provider: "github",
  })

  console.log(data , 'data');
  
  }
  return (
    <div>
        <h2 className='mb-4'>Login with</h2 >
       <div className='flex flex-col gap-2'>
         <button onClick={handleGoogleSignIn} className='btn text-2xl bg-transparent py-2 border-blue-500 border-2'>
            <FaGoogle className='text-2xl'/> Login with Google</button>
        <button onClick={handleGithubSignIn} className='btn text-2xl bg-transparent p-2 border-blue-500 border-2'>
            <FaGithub className='text-2xl'/>
            Login with Github</button>
       </div>
    </div>
  )
}

export default RightSidebar