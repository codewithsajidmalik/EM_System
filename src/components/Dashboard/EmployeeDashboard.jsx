import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import Tasklist from "../taskList/Tasklist";

const EmployeeDashboard = (props) =>{
  
    return(
        <div className="p-10 bg-[#1c1c1c] h-screen">
            
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumber data={props.data}/>
           < Tasklist data={props.data}/>

        </div>
    )

}

export default EmployeeDashboard