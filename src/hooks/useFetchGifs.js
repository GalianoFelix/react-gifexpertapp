//cuando el nombre del archivo empieza por use 
//da a entender que se esta trabajando con hook

import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs';

//los hooks no son mas que funciones


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({

        data: [],
        loading: true

    }); 

    //los efectos no pueden ser async porque esperan algo sincrono
    useEffect( () => {


        getGifs( category )
            .then( imgs => {

                setTimeout( () => {

                    console.log( imgs );

                    setState({ 

                        data: imgs,
                        loading: false
    
                    });
                    
                }, 3000);

            } )


    }, [ category ])




    return state; // {data: [], loading: true};


}
