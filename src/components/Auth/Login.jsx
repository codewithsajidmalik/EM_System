import React, { useState } from 'react';

const  Login = ({handleLogin})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
     
   const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password);
    setEmail("")
    setPassword("")

   }


  return(
    
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2  rounded-xl border-blue-900 p-20'>
        <form 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className='flex flex-col items-center justify center '>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required className='text-white outline-none bg-transparent border-2 border-blue-900 py-3 px-5  rounded-full placeholder:text-grey-100' type="email"  placeholder='enter your email'/>
            <input
              value={password}
              onChange={(e)=>{
                  setPassword(e.target.value)
              }}
            
            required className='text-white outline-none bg-transparent border-2 border-blue-900 py-3 px-5  rounded-full mt-2 placeholder:text-grey-100' type= "password" placeholder='enter your password' />
            <button className=' mt-5 text-white outline-none   bg-red-900 py-3 px-20  rounded-full placeholder:text-white' >Log in</button>
        </form>
        </div>
    
    </div>
  )
}

export  default Login;