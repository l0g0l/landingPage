import {useEffect, useState} from 'react'


const Ball = () => {
    const [image, setImage] = useState()

    const images = ["img/krakenAquaman.jpg", "img/krakenMJ.jpg", "img/krakenCatrina.jpg", "img/krakenCenicienta.jpg", "img/krakrenHomer.jpg", "img/krakenMujerFuerte.jpg", "img/krakenWonderWoman.jpg", "img/krakenYoda.jpg"]

    useEffect(() => {
        const randomImage = Math.floor(Math.random() * images.length);
        setImage(randomImage) //guardo en el state el num random de la posición del array
        
    }, [])

    return (
        <>
          <img src={images[image]} alt="" className="imgball"/>  
        </>
    )
}

export default Ball
