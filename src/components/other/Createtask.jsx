import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Createtask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const[task_title, setTask_title] = useState('')
  const[task_description, setTask_description] = useState('')
  const[task_date, setTask_date] = useState('')
  const[category, setCategory] = useState('')
  const[asignTo, setAsignTo] = useState('')
const [new_task, setNew_task]  = useState({})


  

  const submitHandler =(e)=>{
    e.preventDefault()

    setNew_task({task_title,task_description,task_date,category,asignTo,active:false,new_task:true,failed: false,completed:false})
    
   const data= userData
   

    data.forEach(function(elem){
      if(asignTo == elem.firstname){
        elem.tasks.push(new_task)
       elem.taskNumbers.new_task = elem.taskNumbers.new_task+1

      }
    })

    setUserData(data)
    console.log(data)
   


    setTask_date('')
    setAsignTo('')
    setCategory('')
    setTask_description('')
    setTask_title('')
  
    
  }
  return (
    <div className='p-5 bg-zinc-900 mt-7 rounded'>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}
    
    className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task titile</h3>
        <input 
        value={task_title}
        onChange={(e)=>{
          setTask_title(e.target.value)
        }}
        
        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type=" text" placeholder='Make your text' /></div>
        <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
     <input 
      value={task_date}
      onChange={(e)=>{
        setTask_date(e.target.value)
      }}
     
     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" /></div>
      <div> 
         <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
      <input 
       value={asignTo}
       onChange={(e)=>{
        setAsignTo(e.target.value)
       }}

      className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' /></div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input 
         value={category}
         onChange={(e)=>{
          setCategory(e.target.value)
         }}

        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design.dev,etc' /></div>
        </div>
     
      <div className='w-2/5 flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
      <textarea 
        value={task_description}
        onChange={(e)=>{
         setTask_description(e.target.value)
        }}
      className = 'w-full h-44 text-sm py-2 px-3 rounded outline-none bg-transparent border-[1px] border-gray-400'name="" id="" cols="30" rows="10"></textarea></div>
    
        <button className='bg-blue-600 py-3 hover:bg-blue-900 px-5 rounded text-sm mt-4 w-full'>Create task</button>

    </form>
</div>
  )
}

export default Createtask