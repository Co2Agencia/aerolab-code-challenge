import React from 'react'
import { getIconImages } from '../../helpers/getIconImages'
import { useCheckMobile } from '../../hooks/useCheckMobile'
import { AeroPay } from '../aeropay/AeroPay'

export const NavBar = ({ userData, setUserData, alerts2, dispatchAlert }) => {

  const checkMobile = useCheckMobile()

  const navLogo = ( checkMobile ) ? "aerolab-logo-2" : "aerolab-logo";

  return (
    <nav className='animate__animated animate__fadeInDown'>

      <div className='nav-container'>
        
        <div className='nav-logo-container'>
            <img src={ getIconImages( navLogo ) } alt="Menu Aerolab Logo"/>
        </div>

        <AeroPay userData={ userData }
        setUserData={ setUserData }
        alerts2={ alerts2 } dispatchAlert = { dispatchAlert }
        />
      </div>


    </nav>
  )
  }
