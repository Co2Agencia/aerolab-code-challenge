
export const getCategories = ( products = [] ) => {
    const categories = new Set().add("All Products")

    products.forEach( prod => {
        categories.add( prod.category )
    } )

    return Array.from(categories).sort()
}