import React, { useEffect, useState } from 'react'
import { getIconImages } from '../../helpers/getIconImages';

export const Alert = ({ index, type = "error", message = "", timeOut = 5000, alertIndex, setAlerts, alerts=[] }) => {

    const alertIconSrc = (type === "error") ? getIconImages( "system-error" ) : getIconImages( "system-success" );
    const alertIconAlt = (type === "error") ? "Icon for error alert." : "Icon for success alert.";
    

    const [ active, setActive ] = useState( true )
    // If Timeout completes, timePassed = true
    const [ timePassed, setTimePassed ] = useState( false )
    // If user hovers the alert, hover = true
    const [ hover, setHover ] = useState( false )
    const [ alertClass, setAlertClass ] = useState( "" )
    const [ timeOutId, setTimeOutId ] = useState( null )

    const closeAlert = () => {
        setActive( false )
    }

    useEffect( () => {
        
        if( timePassed && !hover ) {
            setAlertClass( `${ alertClass } animate__animated animate__fadeOut` )
            setTimeout(() => {
                if( !hover ) closeAlert()
            }, 1000)
        }

    }, [ timePassed, hover ] )

    useEffect(() => {
        
        setAlertClass( (type === "error" ) ? 'alert-container error' : "alert-container" )

        const timeOut2 = setTimeout( () => {
            !hover && setActive( true )
            setTimePassed( true )
        }, timeOut )

        setTimeOutId( timeOut2 )

        return () => {
            const newAlerts = [ ...alerts.slice( 0, alertIndex ), ...alerts.slice( alertIndex+1, alerts.length ) ]
            clearTimeout( timeOutId )
            setAlerts( newAlerts )
        };

    }, [])

    


    const handleMouseEnter = event => setHover( true )
    const handleMouseLeave = event => setHover( false )

    const handleClick = event => {
        timeOutId && clearTimeout( timeOutId )
        closeAlert()
    }

    return (
        active &&
            <div className={ alertClass }
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
            >

                <img src={ alertIconSrc } alt={ alertIconAlt }/>

                {
                    ( type === "error" ) ?
                        <p className='text-1-d'>{ message }</p> :
                        ( type === "product" ) ? 
                        <p className='text-1-d'> <span>{ message }</span> redeemed successfully</p>
                        : <p className='text-1-d'>{ message }</p>
                }

                <button onClick={ handleClick }>
                    <img src={ getIconImages("cross-active") } />
                </button>
            </div>
    )

}

