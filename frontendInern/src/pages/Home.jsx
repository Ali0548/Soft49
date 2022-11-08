import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/front/Banner'
import Contractors from '../components/front/Contractors'
import UsersContracts from '../components/front/UsersContracts'
import Navbar from '../components/front/Navbar'
import Footer from '../components/front/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <UsersContracts/>
            <Contractors />
            <Footer />

        </>
    )
}

export default Home