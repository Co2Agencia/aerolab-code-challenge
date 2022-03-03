export const getProducts = async() => {
    
    const api_key = process.env.REACT_APP_API_KEY
    const url = `https://coding-challenge-api.aerolab.co/products?token=${ api_key }`
    const resp = await fetch( url )

    const data = await resp.json()

    // Test products
    // const cocoFoun = {
    //     category: "Phones",
    //     cost: 150000,
    //     // img:{
    //     //     hdUrl: "https://coding-challenge-api.aerolab.co/images/iPhone8-x2.png",
    //     //     url: "https://coding-challenge-api.aerolab.co/images/iPhone8-x1.png"
    //     // },
    //     name: "CocoFoun",
    //     _id: "5az35ckfy834asf6asd54s1"
    // }

    // const cocoLaptop = {
    //     category: "Laptops",
    //     cost: 185000,
    //     img:{
    //         hdUrl: "https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png",
    //         url: "https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png"
    //     },
    //     name: "CocoBook",
    //     _id: "5az35ckfy834asf6asadcfsd54s1"
    // }
    
    // data.push( cocoFoun, cocoLaptop )

    return data
}