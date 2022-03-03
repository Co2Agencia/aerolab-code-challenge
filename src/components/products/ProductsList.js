import React, { useEffect, useState } from 'react'
import { filterProds } from '../../helpers/filterProds'
import { getCategories } from '../../helpers/getCategories'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { Alert } from '../alerts/Alert'
import { ProductCard } from './ProductCard'
import { ProductsFilters } from './ProductsFilters'
import { ProductsPagination } from './ProductsPagination'

export const ProductsList = ({ userData, setUserData }) => {

    const { data: prods, loading } = useFetchProducts()
    
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

        <ProductsFilters 
            categories={categories}
            orderBy={ orderBy } setOrderBy={ setOrderBy }
            category={ category } setCategory={ setCategory }
            page={ page } setPage={ setPage }
            pagesAmount = { filteredProdsData.pagesAmount }
        />

        <div className='products-list'>
            {
                filteredProdsData.products &&
                    filteredProdsData.products.map( prod => (
                        <ProductCard {...prod} userData={ userData } setUserData={ setUserData } key={ prod._id } />
                    ) )
            }
        </div>

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
