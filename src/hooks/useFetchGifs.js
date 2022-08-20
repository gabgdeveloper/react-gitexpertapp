import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifts";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState ({
        data:[],
        loading: true
    });


    useEffect( ( ) => {

        setTimeout( () => {
            getGifs( category)
                .then( imgs => {
                    setState({
                        data : imgs,
                        loading:   false
                    } )
                });
        }, 1000)

    }, [ category  ] ) // if category chance, render the function getGifts

    return state; //  date [], loading: true

}