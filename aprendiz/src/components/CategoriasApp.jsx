import React, { useState } from 'react'
import CategorieList from './CategorieList'
import CategoriesAdd from './CategoriesAdd'

export default function CategoriasApp() {

    const [categories, setCategories] = useState(['Horror'])

    // const handleAdd = () => {
    //     setCategories(
    //         [...categories,
    //             'Comedia'
    //         ]
    //     )
    // }


    return (<>

        <h1>Componentes con hooks</h1>

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>

            <CategoriesAdd setCategories={setCategories}/>

            <CategorieList categoria={categories} />


        </ol>
    </>)
}
