import React, { useEffect, useReducer, useState } from 'react'
import { Alert } from './Alert'
import { alertReducer } from './alertReducer'

/* 
    "alerts" example:
    - [
        { type: "error", message: "test" },
        { type: "success", message: "OK" }
    ]
 */
export const AlertsList = ( { alerts2, dispatchAlert } ) => {

    return (
        
        <div className='alert-list-container'>
            {
                alerts2.map( ( alert, index ) => (
                    <Alert {...alert}
                        key={ `alert-${ alert.id }` }
                        index= { index }
                        dispatchAlert = { dispatchAlert }
                    />
                ) )
            }
        </div>
    )

}
