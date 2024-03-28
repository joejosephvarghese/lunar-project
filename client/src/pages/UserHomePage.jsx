import React from 'react'
import NavBar from '../components/navBar/navBar'
import HomeScreen from '../components/home/home'
import Cards from '../components/cards/cards'

const UserHomePage = () => {
  return (
    <div>
      <NavBar/>
       <HomeScreen/>
       <Cards/>
    </div>
  )
}

export default UserHomePage
