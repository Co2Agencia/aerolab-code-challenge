import React from 'react'

export const ExplanationCard = ({ illustration, icon, text, title }) => {
  return (

    <div className='explanation-card-container'>
        
        <div className='card-img-container'>
            <img src={ illustration } alt="Illustration for card explanation" />
        </div>

        <div className='card-text-container'>

            <div className='card-title-container'>
                <img src={ icon } alt={ `Icon for card explanation` }/>
                <h3 className='title-3'>{ title }</h3>
            </div>

            <p className='text-1-d'>{ text }</p>

        </div>

    </div>

  )
}
