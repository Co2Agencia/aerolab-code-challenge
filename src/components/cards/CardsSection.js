import React from 'react'
import { getIconImages } from '../../helpers/getIconImages'
import { getIllustrations } from '../../helpers/getIllustrations'
import { useCheckMobile } from '../../hooks/useCheckMobile'
import { ExplanationCard } from './ExplanationCard'

export const CardsSection = () => {

    const card1 = {
        illustration: (useCheckMobile()) ? 
        getIllustrations("walkthroug-1-responsive")
        : getIllustrations("walkthroug-1-desktop"),

        icon: getIconImages( "walkthrough-1" ),
        title: "1—browse",
        text: "Browse our tech catalog with more than 20 top tech products"
    }

    const card2 = {
        illustration: (useCheckMobile()) ? 
        getIllustrations("walkthroug-2-responsive")
        : getIllustrations("walkthroug-2-desktop"),

        icon: getIconImages( "walkthrough-3" ),
        title: "2—choose",
        text: "Exchange your hard earned AeroPoints for the item you want"
    }

    const card3 = {
        illustration: (useCheckMobile()) ? 
        getIllustrations("walkthroug-3-responsive")
        : getIllustrations("walkthroug-3-desktop"),

        icon: getIconImages( "walkthrough-2" ),
        title: "3—enjoy!",
        text: "All done, you can relax! We’ll take care of delivery of your tech item!"
    }


  return (
    <div className='explanation-cards-container'>

        <ExplanationCard { ...card1 } />
        <ExplanationCard { ...card2 } />
        <ExplanationCard { ...card3 } />

    </div>
  )
}
