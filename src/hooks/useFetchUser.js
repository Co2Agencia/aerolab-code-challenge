import { useEffect, useState } from "react"
import { getUserInfo } from "../helpers/getUserInfo"

export const useFetchUser = ( points ) => {

    const [ state, setState ] = useState({
        userData:[],
        loading: true
    })

    useEffect(() => {
        
        if( !points || points <= 0 ){
            getUserInfo()
                .then( data => {
                    setState({
                        userData: data,
                        loading: false
                    })
            })
        }
    
    }, [points])
    

    return state

}
