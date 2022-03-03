import React, { useEffect, useState } from 'react'
import { getIllustrations } from '../../helpers/getIllustrations'
import { useCheckMobile } from '../../hooks/useCheckMobile'

export const Hero = () => {

    const heroImg = ( useCheckMobile() ) ? getIllustrations( "hero-responsive" ) : getIllustrations( "hero-desktop" )

    return (
        <div className='hero-container'>

            <div className='hero-text-container'>

                    <span className='text-1-ac'>explore the</span>
                    
                    <h1 className='title-1'>
                        <span>tech</span> zone
                    </h1>
                    <p className='text-1-d'>Here you'll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</p>

                <a href='#products-container' className='btn-cta btn-cta-default'>
                    <p className='text-1-d'>VIEW ALL PRODUCTS 
                    <span>&#8595;</span></p>
                </a>

            </div>

            <div className='hero-illustration-container'>
                <img src={ heroImg }/>
            </div>

        </div>

    )
}
