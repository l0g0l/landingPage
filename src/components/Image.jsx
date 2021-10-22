import {useEffect, useState} from 'react'


const Image = () => {
    const [image, setImage] = useState()

    const images = ["img/krakenAquaman.jpg", "img/krakenMJ.jpg", "img/krakenCatrina.jpg", "img/krakenCenicienta.jpg", "img/krakenHomer.jpg", "img/krakenMujerFuerte.jpg", "img/krakenWonderWoman.jpg", "img/krakenYoda.jpg"]

    useEffect(() => {
        const randomImageIndex = Math.floor(Math.random() * images.length);
        setImage(randomImageIndex) //guardo en el state el num random de la posición del array
        
    }, [])

    return (
        <>
          <img src={images[image]} alt="" className="imgball"/>  
        </>
    )
}

export default Image
