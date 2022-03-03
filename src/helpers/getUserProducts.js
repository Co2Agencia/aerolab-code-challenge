export const getUserProducts = async() => {
    
    const api_key = process.env.REACT_APP_API_KEY
    const url = `https://coding-challenge-api.aerolab.co/user/history?token=${ api_key }`
    const resp = await fetch( url )

    const data = await resp.json()

    return data
}