import React from 'react'
import CmTask from './CmTask'
import NwTask from './NwTask'
import Accepttask from './Accepttask'


import FailedTask from './FailedTask'


const Tasklist = ({data}) => {

  return (
    <div id="tasklist" className='h-[45%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5  mt-10'>

      {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return < Accepttask key={idx} data={elem}/>
        }
        if(elem.new_task){
          return   <NwTask  key={idx} data={elem}/>
        }
        if(elem.completed){
          return   <CmTask  key={idx} data={elem}/>
        }

        if(elem.failed){
          return   < FailedTask  key={idx} data={elem}/>
        }
})}
      
       

      
       

        
      

       
    </div>
  )
}

export default Tasklist
