import React, { useState } from 'react'
import { getIconImages } from '../../helpers/getIconImages'

export const Footer = () => {
  
  const [ iconImage, setIconImage ] = useState( "github-default" )

  const toggleIconImage = () => {

    ( iconImage === "github-default" ) ? setIconImage( "github-active" ) : setIconImage( "github-default" )

  }

  return (
    <footer>
        <a href="https://github.com/Co2Agencia/aerolab-code-challenge" className='footer-btn'
          onMouseEnter={ toggleIconImage }
          onMouseLeave={ toggleIconImage }
        >
            <img src={ getIconImages( iconImage ) } alt="Github logo"/>
            <p className='text-1-d'>View this repository</p>
        </a>
    </footer>
  )
}
