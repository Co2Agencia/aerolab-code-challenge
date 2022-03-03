import React from 'react'
import { getIconImages } from '../../helpers/getIconImages'
import { AeroPay } from '../aeropay/AeroPay'

export const NavBar = ({ userData, setUserData, alerts, setAlerts }) => {

  return (
    <nav className='animate__animated animate__fadeInDown'>

        <div className='nav-logo-container'>
            <img src={ getIconImages( 'aerolab-logo' ) } />
        </div>

        <AeroPay userData={ userData }
        setUserData={ setUserData } setAlerts={ setAlerts } alerts={ alerts }/>

    </nav>
  )
}
