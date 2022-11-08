import React from 'react'
import Footer from '../../components/admin-panel/Footer'
import Sidebar from '../../components/admin-panel/Sidebar'

const Contracts = () => {

    //window.location.reload();

    return (
        <>
            <div class="wrapper">
                <Sidebar />
                <div class="content-wrapper">
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">Contracts</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">Contracts</li>
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
                                                <th>Contractor</th>
                                                <th>User</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>John Doe</td>
                                                <td>1000 PKR</td>
                                                <td><span class="tag tag-success">Approved</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>Alexander Pierce</td>
                                                <td>1000 PKR</td>
                                                <td><span class="tag tag-warning">Pending</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>Bob Doe</td>
                                                <td>1000 PKR</td>
                                                <td><span class="tag tag-primary">Approved</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>Mike Doe</td>
                                                <td>1000 PKR</td>
                                                <td><span class="tag tag-danger">Denied</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>Jim Doe</td>
                                                <td>1000 PKR</td>
                                                <td><span class="tag tag-success">Approved</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>Victoria Doe</td>
                                                <td>1000 PKR</td>
                                                <td><span class="tag tag-warning">Pending</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>Michael Doe</td>
                                                <td>1000 PKR</td>
                                                <td><span class="tag tag-primary">Approved</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>Rocky Doe</td>
                                                <td>1000 PKR</td>
                                                <td><span class="tag tag-danger">Denied</span></td>
                                                <td>Delete</td>
                                            </tr>
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

export default Contracts