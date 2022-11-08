import React from 'react'
import {Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

    // navigator
    const navigator = useNavigate();

    // logout Function
     const logout  =()=>{
        localStorage.clear();
        navigator('/admin/login');
    }
    return (
        <>
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                    
                </ul>

                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <a class="nav-link " data-widget="navbar-search" onClick={logout} role="button">
                            <p className='btn btn-danger' style={{marginTop:'-10px'}}>
                                
                            Logout
                            </p>
                        </a>
                        
                    </li>

                   
                    
                </ul>
            </nav>


            <aside class="main-sidebar sidebar-dark-primary elevation-4" style={{ height: '100vh' }}>

                <a href="index3.html" class="brand-link">
                    <img src="../admin_assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span class="brand-text font-weight-light">Name</span>
                </a>

                <div class="sidebar" >



                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


                            <li class="nav-item">
                                <a href='/admin/dashboard' class="nav-link">
                                    <i class="nav-icon far fa-image"></i>
                                    <p>
                                        Dashboard
                                    </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href='/admin/contractors' class="nav-link">
                                    <i class="nav-icon far fa-image"></i>
                                    <p>
                                        Contractors
                                    </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <Link to='/admin/users' class="nav-link">
                                    <i class="nav-icon far fa-image"></i>
                                    <p>
                                        Users
                                    </p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a href='/admin/contracts' class="nav-link">
                                    <i class="nav-icon far fa-image"></i>
                                    <p>
                                        Contracts
                                    </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href='/admin/complaints' class="nav-link">
                                    <i class="nav-icon far fa-image"></i>
                                    <p>
                                        Complaints
                                    </p>
                                </a>
                            </li>


                        </ul>
                    </nav>

                </div>

            </aside>
        </>
    )
}

export default Sidebar