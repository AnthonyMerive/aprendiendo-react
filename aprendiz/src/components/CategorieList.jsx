import React from 'react'
import Cards from './Cards'

export default function CategorieList( {categoria} ) {
    return (<>

        {categoria.map((cate, index)=>{
            return(
                <Cards categoria={cate} key={cate-index}/>
            )
        })}

        </>)
}
