import React, { useEffect, useState } from 'react'
import { AlertsList } from './components/alerts/AlertsList'
import { CardsSection } from './components/cards/CardsSection'
import { ProductsList } from './components/products/ProductsList'
import { Footer } from './components/ui/Footer'
import { Hero } from './components/ui/Hero'
import { NavBar } from './components/ui/NavBar'
import { getUserInfo } from './helpers/getUserInfo'

export const TechZone = () => {
  const [userData, setUserData] = useState({
    data: [],
    loading: true
  })

  const [alerts, setAlerts] = useState( [] )

  useEffect(()=>{

      getUserInfo().then( resp =>{
          
          setUserData({
              data: resp,
              loading: false
          })

      } )

  }, [])

  return (
    <div className='tech-zone-container'>
        <NavBar userData={ userData } 
          setUserData={ setUserData }
          setAlerts = { setAlerts } alerts={ alerts }
        />
        <Hero/>
        <CardsSection/>
        <AlertsList alerts = { alerts } setAlerts={ setAlerts } />
        <ProductsList userData={ userData } setUserData={ setUserData } />
        <Footer/>
    </div>
  )
}
