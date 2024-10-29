import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) =>{

    // const[username, setUsername] = useState('')

    // if(!data){
    //     setUsername('Admin')
    // }else{
    //     setUsername(data.firstname)
    // }

    const loggedOutUser=()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()
    }
    return(
        <div className="flex items-end justify between">
            
            <h1 className="text-2xl font-medium">Hello <br /><span className="text-3xl font-semibold"  >username</span></h1>
            <button onClick={loggedOutUser}className="bg-blue-900 text-base  text-white px-5 py-2 rounded-small  font-medium"> Log Out</button>
        </div>
        
    )

}

export default Header