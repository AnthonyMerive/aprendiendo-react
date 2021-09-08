import React, { useEffect, useRef, useState } from 'react'

export default function CategoriesAdd({setCategories}) {
  
    const [search, setSearch] = useState('')


    const handleSubmit = e =>{
        e.preventDefault()
        setCategories(categorias=>[search, ...categorias])
        setSearch('')
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }
  
    const hrefSearch = useRef()

    useEffect(() => {
        hrefSearch.current.focus()
    }, [])

  return (<>
            
            <form onSubmit={handleSubmit}>

                <input 
                    ref={hrefSearch}
                    name="search"
                    placeholder="categories"
                    value={search}
                    onChange={handleInputChange}
                />

            </form>




        </>)
}
