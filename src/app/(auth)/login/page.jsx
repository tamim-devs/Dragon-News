'use client'
import { authClient } from '@/lib/auth-client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash, FaRegEyeSlash } from 'react-icons/fa'

const LoginPage = () => {

const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const handleLoginFunc = async(data) => {
console.log(data);

const { data: res, error } = await authClient.signIn.email({
    email: data.email, 
    password: data.password,
    rememberMe: true,
    callbackURL: "/",
});
console.log(res,error);


}
console.log(watch("email"));
console.log(watch("password"));

  return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-linear-to-br from-slate-100 to-slate-200'> 
      
      <div className="p-6 bg-white rounded-2xl shadow-xl w-full max-w-md mt-10 border border-gray-100">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
       
        <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-5 flex justify-center flex-col'>
          
          <fieldset className="fieldset flex flex-col gap-1">
            <legend className="fieldset-legend text-sm font-medium text-gray-600">
              Email
            </legend>
            <input 
              type="email" 
              name='email'
              className="input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
              placeholder="Type your email" 
              {...register('email', { required: "Email is required" })}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </fieldset>

          <fieldset className="fieldset relative flex flex-col gap-1">
            <legend className="fieldset-legend text-sm font-medium text-gray-600">
              Password
            </legend>
            <input 
              type={isShowPassword ? "text" : "password"} 
              name='password'
              className="input  w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
              placeholder="Type your password" 
              {...register('password', { required: "Password is required" })}
            />
            <span onClick={()=>setIsShowPassword(!isShowPassword)} className=' absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer'>
              {isShowPassword ? <FaEye className=''/> : <FaRegEyeSlash className='text-gray-500'/>}
            </span>
            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
          </fieldset>

         <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-slate-800 text-white">Login</button>

        </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
      </div>
    </div>
  )
}

export default LoginPage