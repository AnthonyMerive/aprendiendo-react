import React, { useEffect, useState } from 'react'

export default function Cards({ categoria }) {

    const [stateImages, setStateImages] = useState([])

    useEffect(() => {
        imgGif(categoria)
            .then(imgData => setStateImages(imgData))
    }, [categoria])

    const imgGif = async (categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const imgData = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return imgData
    }
    imgGif()


    return (<>

        <ol>
            {
                stateImages.map(img => (
                    <li key={img.id}>
                        <h3>{img.title}</h3>
                        <img src={img.url} alt="imagen" />
                    </li>

                ))

            }
        </ol>

    </>)
}
