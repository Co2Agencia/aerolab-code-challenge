import React from 'react'
import { getIconImages } from '../../helpers/getIconImages'

export const ProductsPagination = ({ page, setPage, pagesAmount }) => {
    
    const handleClick = direction => {

        // If direction is "previous" --> return -1
        // Else return 1
        const sum = (direction === "previous" ) ? -1 : 1;
        let futurePage = page + sum

        // If futurePage is less than 1 --> return 1
        // If futurePage is greater than pagesAmount --> return pagesAmount
        // Else --> Return futurePage
        futurePage = ( futurePage < 1 ) ?
            1 : ( futurePage > pagesAmount ) ?
                pagesAmount : futurePage;

        setPage( futurePage )
    }

  return (

    <div className='products-pagination'>

        <button className={
            ( page <= 1 ) ?
            'pagination-btn btn-pre blocked' : 'pagination-btn btn-pre'
        }
            onClick={ () => handleClick( "previous" ) }
            ariaLabel = "Previous Page"
        >
            <img src={ 
                (page <= 1) ?
                    getIconImages( 'chevron-default' ) : getIconImages( 'chevron-active' )
            }
            alt="Previous Arrow icon"
            />
        </button>

        <p className='page-number text-1-d'>
            page <span>{ page } of { pagesAmount }</span>
        </p>
        
        <button className={
            ( page >= pagesAmount ) ?
            'pagination-btn btn-next blocked' : 'pagination-btn btn-next'
        }
            onClick={ () => handleClick( "next" ) }
            ariaLabel = "Next Page"
        >
            <img src={ 
                (page >= pagesAmount) ?
                    getIconImages( 'chevron-default' ) : getIconImages( 'chevron-active' )
            }
            alt="Next Arrow icon"
            />
        </button>

    </div>
  )
}
