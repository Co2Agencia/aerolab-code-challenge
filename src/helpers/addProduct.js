
export const addProduct = async( productId, setProcessing, setUserData, newUserData ) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://coding-challenge-api.aerolab.co/redeem`;
    const data = JSON.stringify( { productId } )

    setProcessing( true )
    const resp = await fetch( url, {
        method: 'POST',
        body: data,
        headers:{
            'Content-Type': 'application/json',
            'Authorization': api_key
        }
    } )

    setUserData( newUserData ) // Updates user data

    const respData = await resp.json()

    setProcessing( false )
    return respData
  
}