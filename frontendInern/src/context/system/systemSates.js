import React,{useState} from "react";
import systemContext from "./systemContext";
import Swal from "sweetalert2";
export const  SystemStates = (props)=>{
     
    // Users States and function
    const [users, setUsers] = useState({});
   
    const fetchUsers = async ()=>{
    
        try {
            const URL = "http://localhost:5000/api/fetch-users"
            let response = await fetch(URL, {
              method:"GET",
              headers:{
                "Content-Type":"application/json"
                 },
            });
            response = await response.json();
            if(response.status===false){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: `<strong>${response.res}</strong>`,
                });
            }
            else if(response.status===true){
               await setUsers(response) 
            }
            else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: `<strong>Something Went Wrong</strong>`,
               });
            }
           } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              html: `<strong>Something Went Wrong</strong>`,
             });
           }
    }
    
      
    return (
        <systemContext.Provider value={{users,fetchUsers}}>
            {props.children}
        </systemContext.Provider>
    )
}

