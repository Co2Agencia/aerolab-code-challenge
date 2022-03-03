import React from 'react'

export const PointsButton = ( { pointsSelected, setPointsSelected, btnPoints } ) => {

    btnPoints = parseInt( btnPoints );

    const handleButtonClick = () => {
        ( btnPoints != pointsSelected ) ? 
            setPointsSelected( btnPoints ) : setPointsSelected( undefined )
    }

  return (

    <button type='button'
        className={
            ( pointsSelected == btnPoints ) ? 'btn-number-selected' : 'btn-number-not-selected'
        }
        onClick={ handleButtonClick }
    >
        <span>{ btnPoints }</span>
    </button>

  )
}
