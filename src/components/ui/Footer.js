import React from 'react'
import { getIconImages } from '../../helpers/getIconImages'

export const Footer = () => {
    
  return (
    <footer>
        <a href="#" className='footer-btn'>
            <img src={ getIconImages( "github-default" ) }/>
            <p className='text-1-d'>View this repository</p>
        </a>
    </footer>
  )
}
