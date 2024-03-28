import React from 'react'
import NavBar from '../components/navBar/navBar'
import HomeScreen from '../components/home/home'
import Cards from '../components/cards/cards'
import Footer from '../components/footer/footer'

const UserHomePage = () => {
  return (
    <div>
      <NavBar/>
       <HomeScreen/>
       <Cards/>
       <Footer/>

    </div>
  )
}

export default UserHomePage
