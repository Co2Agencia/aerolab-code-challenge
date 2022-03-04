import React, { useEffect, useState } from 'react'
import { getIconImages } from '../../helpers/getIconImages'
import { BalanceBox } from './BalanceBox'

export const AeroPay = ({ userData, setUserData, alerts2, dispatchAlert }) => {
    const arrowIconClass = "aeropay-arrow";
    const arrowIconClassActive = "aeropay-arrow-active"

    const [activeClass, setActiveClass] = useState( false )

    const handleClick = event => {
        (activeClass) ? setActiveClass( false ) : setActiveClass( true )
    }

    useEffect(()=>{

    }, [ activeClass ])

  return (

    <div className='aeropay-container'>

        <button className='aeropay-button-container' onClick={ handleClick }>
            <img className='aeropay-aerolab-logo' src={ getIconImages( 'aeropay-1' ) } alt="Aerolab logo"/>
            <span className={ userData.loading ? 'user-loading' : 'animate__animated animate__fadeIn' }>{ userData.data.points }</span>
            <img className={ activeClass ? `${ arrowIconClass } ${arrowIconClassActive}` : arrowIconClass  } src={ getIconImages( 'chevron-default' ) } alt="Arrow icon"/>
        </button>

        {
            activeClass && <BalanceBox userData={ userData }
                setUserData={ setUserData } setActiveClass={ setActiveClass }
                dispatchAlert = { dispatchAlert }
                />
        }

    </div>    

  )
}
