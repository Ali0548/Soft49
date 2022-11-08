import React from 'react'
import Footer from '../../components/admin-panel/Footer'
import Sidebar from '../../components/admin-panel/Sidebar'

const Complaints = () => {
    return (
        <>
              <div class="wrapper">
                <Sidebar />
                <div class="content-wrapper">
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">Complaints</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">Complaints</li>
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
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>email@gmail.come</td>

                                                <td><span class="tag tag-success">Approved</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>email@gmail.come</td>

                                                <td><span class="tag tag-warning">Pending</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>email@gmail.com</td>

                                                <td><span class="tag tag-primary">Approved</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>email@gmail.come</td>

                                                <td><span class="tag tag-danger">Denied</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>email@gmail.com</td>

                                                <td><span class="tag tag-success">Approved</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>email@gmail.coma Doe</td>

                                                <td><span class="tag tag-warning">Pending</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>email@gmail.com Doe</td>

                                                <td><span class="tag tag-primary">Approved</span></td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>email@gmail.comoe</td>

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

export default Complaints