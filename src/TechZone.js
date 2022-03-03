import React, { useEffect, useReducer, useState } from 'react'
import { alertReducer } from './components/alerts/alertReducer'
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
  const [ alerts2, dispatchAlert ] = useReducer( alertReducer, [] )


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
          alerts2 = { alerts2 } dispatchAlert = { dispatchAlert }
        />
        <Hero/>
        <CardsSection/>
        <AlertsList alerts = { alerts } setAlerts={ setAlerts } 
          alerts2 = { alerts2 } dispatchAlert = { dispatchAlert }
        />
        <ProductsList userData={ userData } setUserData={ setUserData } dispatchAlert={ dispatchAlert } />
        <Footer/>
    </div>
  )
}
