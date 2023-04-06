import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login.js'
import SignUp from './components/Signup.js'
import MainPage from "./pages/index"
// import MasterSection from './components/masterSection/MasterSection.js'
// import WorkWith from './components/workWith/WorkWith.js'
import Services from './components/services/Services.js'
import Blogs from './components/blogs/Blogs.js'
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs.js'
import About from './components/about/About.js'

function Router() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/blogs" element={<Blogs />} />
                <Route exact path="/contact" element={<WhyChooseUs />} />
                <Route exact path="/signin" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
            </Routes>
        </>
    )
}

export default Router