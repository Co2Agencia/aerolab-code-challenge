import React, { useEffect, useState } from 'react'
import { filterProds } from '../../helpers/filterProds'
import { getCategories } from '../../helpers/getCategories'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { ProductCard } from './ProductCard'
import { ProductCardSkeleton } from './ProductCardSkeleton'
import { ProductsFilters } from './ProductsFilters'
import { ProductsPagination } from './ProductsPagination'

export const ProductsList = ({ userData, setUserData, dispatchAlert }) => {

    let { data: prods, loading } = useFetchProducts()
    const categories = getCategories( prods )
    
    const [ page, setPage ] = useState( 1 )
    const [ category, setCategory ] = useState( "All Products" )
    const [ orderBy, setOrderBy ] = useState( "" )

    const [ filteredProdsData, setFilteredProdsData ] = useState( {
        pagesAmount: undefined,
        products: [],
        page: undefined,
        productsAmount: undefined
    } )

    // When prods loading completes, it triggers the reducer
    useEffect(() => {
        const action = {
            page, category, orderBy
        }
        const newProds = filterProds( prods, action, userData.data.points )        
        setFilteredProdsData( newProds )

    }, [ page, category, orderBy, loading ])

    

  return (

    <div className='products-container' id='products-container'>

        <div className='products-title-container'>

            <h2 className='title-2'>
                <span>tech</span> products
            </h2>

        </div>

        {/* Products filters */}
        <ProductsFilters 
            categories={categories}
            orderBy={ orderBy } setOrderBy={ setOrderBy }
            category={ category } setCategory={ setCategory }
            page={ page } setPage={ setPage }
            pagesAmount = { filteredProdsData.pagesAmount }
        />

        {/* Products List */}
        <div 
            className={( loading ) ? 'products-list products-loading' : 'products-list products-completed'}>
            
            {
                !loading ?

                    filteredProdsData.products.map( prod => (

                        <ProductCard {...prod} userData={ userData } setUserData={ setUserData } 
                        key={ prod._id } 
                        dispatchAlert={ dispatchAlert } 
                        />
                    ) )
                    :
                    <>
                        <ProductCardSkeleton/>
                        <ProductCardSkeleton/>
                        <ProductCardSkeleton/>
                        <ProductCardSkeleton/>
                    </>
            }
        </div>

        {/* Products Footer */}
        <div className='products-footer'>

            <div className='products-amount-container'>
                <p className='text-1-d'>
                    { filteredProdsData.products.length } of { filteredProdsData.productsAmount }
                    <span> products</span>
                </p>
            </div>

            <ProductsPagination 
                page={ page }
                setPage={ setPage }
                pagesAmount = { filteredProdsData.pagesAmount }
            />

        </div>
        
    </div>

  )
}
