import React, { useEffect, useState } from 'react'
import { getIconImages } from '../../helpers/getIconImages';

export const Alert = ({ dispatchAlert, text, id, type = "error", timeOut = 8000 }) => {

    const alertIconSrc = (type === "error") ? getIconImages( "system-error" ) : getIconImages( "system-success" );
    const alertIconAlt = (type === "error") ? "Icon for error alert." : "Icon for success alert.";
    

    const [ active, setActive ] = useState( true )
    // If Timeout completes, timePassed = true
    const [ timePassed, setTimePassed ] = useState( false )
    // If user hovers the alert, hover = true
    const [ hover, setHover ] = useState( false )
    const [ alertClass, setAlertClass ] = useState( "" )

    // Deletes the alert
    const closeAlert = () => {

        dispatchAlert( {
            type: "delete",
            payload: id
        } )

    }

    // If timeOut completes and user is not hovering the alert, 
    // It will get deleted.
    useEffect( () => {
        
        ( timePassed && !hover ) && closeAlert()

    }, [ timePassed, hover ] )


    // Adds the timeOut and classes to the Alert
    useEffect(() => {
        
        setAlertClass( (type === "error" ) ? 'alert-container error' : "alert-container" )

        const timeOut2 = setTimeout( () => {
            !hover && setActive( true )
            setTimePassed( true )
        }, timeOut )


        return () => {
            clearTimeout( timeOut2 )
            dispatchAlert( {
                type: "delete",
                payload: id
            } )

        };

    }, [])


    const handleMouseEnter = event => setHover( true )
    const handleMouseLeave = event => setHover( false )

    const handleClick = event => {
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
                        <p className='text-1-d'>{ text }</p> :
                        ( type === "product" ) ? 
                        <p className='text-1-d'> <span>{ text }</span> redeemed successfully</p>
                        : <p className='text-1-d'>{ text }</p>
                }

                <button onClick={ handleClick }>
                    <img src={ getIconImages("cross-active") } />
                </button>
            </div>
    )

}

