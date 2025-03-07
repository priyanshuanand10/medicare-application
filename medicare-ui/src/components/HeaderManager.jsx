import React from 'react'
import NavBarCom from './NavBarCom'
import Home from './Home'
import Footer from './Footer'

const HeaderManager = () => {
  return (
    <div style={{ background: "linear-gradient(90deg, rgba(228,161,161,1) 0%, rgba(232,98,98,1) 19%, rgba(139,23,23,1) 62%, rgba(128,3,3,1) 100%)" ,height:"95vh" } }  className="text-center">
   
      <NavBarCom/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default HeaderManager
