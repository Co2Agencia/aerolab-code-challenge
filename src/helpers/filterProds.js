import { orderByTypes } from "../types/orderByTypes";

export const filterProds = (products = [], action, userPoints, prodsPerPage = 16 ) => {

    let newState;

    const { category, page, orderBy } = action

    // Sorts the products based on the amount of point the user has.
    function defaultProdsSort( prodArr = [] ){
        newState = [ ...prodArr ].sort( ( a, b ) => {
            return ( a.cost <= userPoints ) ?
                -1 : ( b.cost <= userPoints ) ?
                1 : 0;
        } )
    }
    

    // Filter category
    if( category ){
        newState = [ ...products ].filter( prod => prod.category.toLowerCase() == category.toLowerCase() )
        defaultProdsSort( newState )
        if( category.toLowerCase() == "all products" ) defaultProdsSort( products )
    }

    else defaultProdsSort( products )


    switch (orderBy) {
        
        // Taking into account that the index of the products array received from the API
        // represents the "date" of the product. So index 0 would be the most recent prod.
        case orderByTypes.mostRecent.value:
            newState.sort( (a, b) => {
                const aIndex = products.findIndex( prod => prod._id === a._id )
                const bIndex = products.findIndex( prod => prod._id === b._id )
                if( aIndex > bIndex ) return 1
                return -1
            } )
            break;
        
        case orderByTypes.lowestPrice.value:
            newState = newState.sort( ( a, b ) => {
                if( a.cost > b.cost ) return 1
                return -1
            } )
            break

        case orderByTypes.highestPrice.value:
            newState = newState.sort( ( a, b ) => {
                if( a.cost < b.cost ) return 1
                return -1
            } )
            break
        
        case "":
            defaultProdsSort( newState )
            break

        default:
            defaultProdsSort( newState )
            break;
    }

    

    let pagesAmount = newState.length / prodsPerPage
    if( pagesAmount % 2 > 0 ) pagesAmount = parseInt( pagesAmount ) + 1

    const startSlice = ( page - 1 ) * prodsPerPage
    const endSlice = page * prodsPerPage

    const productsAmount = newState.length
    const filteredProducts = newState.slice( startSlice, endSlice )


    return { pagesAmount, products: filteredProducts, page, productsAmount }

}