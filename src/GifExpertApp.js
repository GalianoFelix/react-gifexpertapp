import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( {saludo} ) => {
  
  //const categories = [ 'One Punch ', 'Samurai X ' , 'Dragon Ball' ];
  const [categories, setCategories] = useState([ 'One Punch ','naruto' ])

  // const handleAdd = () => {

  //   // categories.push( 'Hunter x Hunter' );
  //   // console.log( categories );
  //   //nota: no es buena manera usar el push

  //   // setCategories( [ 'HunterXHunter', ...categories] );
  //   // nota: esta es una solucion que esta bastante clara.

  //   setCategories( cats => [...cats, 'HunterXHunter'] );
   
  //}

  
  
  return (
      <>
        <h1>GifExpertApp</h1>
  
        <h2>{ saludo }</h2>

        <AddCategory setCategories = { setCategories } />
        <hr/>


        <ol>
            {
              categories.map( category  => (
                
              
                <GifGrid 
                
                key={category}
                category={category} 
                
                />

              ))
            }
        </ol>

    </>

    



 );
};

GifExpertApp.propTyes = {

    saludo: PropTypes.string.isRequired

}

export default GifExpertApp;