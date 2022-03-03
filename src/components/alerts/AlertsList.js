import React, { useEffect, useState } from 'react'
import { Alert } from './Alert'

/* 
    "alerts" example:
    - [
        { type: "error", message: "test" },
        { type: "success", message: "OK" }
    ]
 */
export const AlertsList = ( { alerts = [], setAlerts } ) => {
    const [alertDeleted, setAlertDeleted] = useState( false )

    useEffect( () => {
    }, [ alerts ] )

    // If alert gets deleted, it trims the first item of the alert array
    useEffect(() => {
        setAlertDeleted( false )
        alerts.length > 0 && setAlerts( alerts.slice( 1, alerts.length ) )
    }, [ alertDeleted ])

    return (
        
        <div className='alert-list-container'>
            {
                alerts.map( ( alert, index ) => (
                    <Alert {...alert}
                        key={ `alert-${ alert.type }-${index}` }
                        alertIndex={ index }
                        setAlerts={ setAlerts }
                        alerts = { alerts }
                        index= { index }
                    />
                ) )
            }
        </div>
    )

}
