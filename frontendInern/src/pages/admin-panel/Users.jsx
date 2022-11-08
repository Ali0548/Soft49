import React, {useEffect, useContext} from 'react'
import Footer from '../../components/admin-panel/Footer'
import Sidebar from '../../components/admin-panel/Sidebar'
import systemContext from '../../context/system/systemContext'
import { useNavigate } from "react-router-dom";
const Users = () => {
      const navigator = useNavigate();
    // globalStates
    const {fetchUsers,users} = useContext(systemContext);

    // useEffect
    useEffect(()=>{
        if(!localStorage.getItem('admin_id')){
            navigator('/admin/login');
        }
        fetchUsers();
        console.log(users)
    }, [5]);
    const toggleusers = ()=>{
 
        fetchUsers();
        console.log(users)
    }
    return (
        <>
            <div class="wrapper">
                <Sidebar />
                <div class="content-wrapper">
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">Users</h1>
                                </div>
                               
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">Users</li>
                                        <li class="breadcrumb-item active"> <button class="btn btn-primary" onClick={toggleusers}>Fetch Users</button></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="card mx-2">


                                <div class="card-body table-responsive p-0" style={{ height: '300px' }}>
                                    <table class="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contact</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {users.data && users.data.map((e)=>{
                                              return <tr>
                                                        <th>{e.user_name}</th>
                                                        <th>{e.user_email}</th>
                                                        <th>{e.user_contact}</th>
                                                    </tr>
                                           })}
                                            
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Users