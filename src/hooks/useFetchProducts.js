import { useEffect, useState } from "react"
import { getProducts } from "../helpers/getProducts"

export const useFetchProducts = ( prodsPerPage = 16 ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
        pagesAmount: undefined,
    })

    useEffect( () => {
        
        getProducts()
            .then(prods => {

                let pagesAmount = prods.length / prodsPerPage
                if( pagesAmount % 2 > 0 ) pagesAmount = parseInt( pagesAmount ) + 1

                setState({
                    data: prods,
                    loading: false,
                    pagesAmount
                })

        })

    }, [] )

    return state
}