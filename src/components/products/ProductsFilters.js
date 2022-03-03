import React, { useEffect, useState } from 'react'
import { orderByTypes } from '../../types/orderByTypes'
import { ProductsPagination } from './ProductsPagination'

export const ProductsFilters = ({ page, setPage, category, setCategory, orderBy, setOrderBy, pagesAmount, categories }) => {

    const [showCats, setShowCats] = useState( false )

    const handleCategory = catName => {
        setCategory( catName )
        setPage( 1 )
        setShowCats( false )
    }

    const handleCategoryBtn = () => {
        ( showCats ) ? setShowCats( false ) : setShowCats( true )
    }

    const handleOrderBy = orderByName => {
        if( orderBy === orderByName ) setOrderBy( "" )
        else setOrderBy( orderByName )
        setPage( 1 )
    }

    const handleBodyClick = e => {

        const checkClosest = e.target.closest( ".categories-list-container" );
        ( !checkClosest ) && setShowCats( false )
        
    }

    document.body.addEventListener( "click", handleBodyClick )

    useEffect( ()=> {

        return () => {
            document.body.removeEventListener( "click", handleBodyClick )
        }

    }, [])
    
  return (

    <div className='products-filters-container'>

        <div className='categories-container'>
            <span className='text-1-d'>Filter by:</span>
            
            <div className='categories-list-container'>
                <button className='categories-btn' onClick={ handleCategoryBtn }>
                    <p className='text-1-d'>{ category }</p> <span>&#9660;</span>
                </button>

                { showCats &&
                    <ul className='categories-list animate__animated animate__fadeIn'>
                        {
                            categories.map( (catName, index) => (
                                <li key = {`${catName}-${index}`}>
                                    <button
                                        onClick={ () => handleCategory( catName ) }
                                    >
                                        <p className='text-1-d'>{ catName }</p>
                                    </button>
                                </li>
                            ) )
                        }

                    </ul>
                }
            </div>

        </div>

        <div className='order-by-container'>

            <p className='text-1-d'>Order By: </p>
            <div className='order-by-buttons'>

                <button onClick={ () => handleOrderBy( orderByTypes.mostRecent.value ) }
                    className={ ( orderBy == orderByTypes.mostRecent.value ) ? "selected order-by-button" : "order-by-button" }
                >
                    <span className='text-1-d'>{ orderByTypes.mostRecent.name }</span>
                </button>

                <button onClick={ () => handleOrderBy( orderByTypes.lowestPrice.value ) }
                    className={ ( orderBy == orderByTypes.lowestPrice.value ) ? "selected order-by-button" : "order-by-button" }
                >
                    <span className='text-1-d'>{ orderByTypes.lowestPrice.name }</span>
                </button>
                
                <button onClick={ () => handleOrderBy( orderByTypes.highestPrice.value ) }
                    className={ ( orderBy == orderByTypes.highestPrice.value ) ? "selected order-by-button" : "order-by-button" }
                >
                    <span className='text-1-d'>{ orderByTypes.highestPrice.name }</span>
                </button>

            </div>
            
        </div>

        <ProductsPagination page={ page } setPage={ setPage } pagesAmount={ pagesAmount }/>

    </div>
  )
}
