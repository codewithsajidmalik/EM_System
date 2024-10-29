import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {
const [userData, setUserData] = useContext(AuthContext)



  return (
    <div className='bg-zinc-900 p-5 rounded mt-5 h-50 '>

<div className='bg-red-400 mb-2 py-2 px-3 flex justify-between rounded'>
        <h2 className=' text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className=' text-lg font-medium w-1/5'>New Task</h3>
        <h5 className=' text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className=' text-lg font-medium w-1/5'>completed</h5>
        <h5 className=' text-lg font-medium w-1/5'>Failed</h5>
    </div>

    <div className=''>
         {userData.map(function(elem,idx){

        return  <div key={idx} className='bg-zinc-500 mb-2 py-2 px-3 flex justify-between rounded'>
        <h2 className=' text-lg font-medium w-1/5'>{elem.firstname}</h2>
        <h3 className=' text-lg font-medium w-1/5 text-red-400'>{elem.taskNumbers.new_task}</h3>
        <h5 className=' text-lg font-medium w-1/5 text-green-400'>{elem.taskNumbers.active}</h5>
        <h5 className=' text-lg font-medium w-1/5 text-white-400'>{elem.taskNumbers.completed}</h5>
        <h5 className=' text-lg font-medium w-1/5 text-emerald-400'>{elem.taskNumbers.failed}</h5>

    </div>

       })}
    </div>

       

    </div>
  )
}

export default Alltask