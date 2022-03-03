

export const addPoints = async( points ) => {
    const pointsAmounts = [ 1000, 5000, 7500 ]
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://coding-challenge-api.aerolab.co/user/points`;
    const data = JSON.stringify( { amount: points } )

    if( pointsAmounts.includes( points ) ){

        const resp = await fetch( url, {
            method: 'POST',
            body: data,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': api_key
            }
        } )

        const respData = await resp.json()

        return respData

    }
    return false
  
}
