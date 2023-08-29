import React from 'react'
import NaveBar from '../components/NaveBar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <div>
            <Announcement />
            <NaveBar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
