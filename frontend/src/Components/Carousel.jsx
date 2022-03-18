import React, { useEffect } from 'react'
import { useState } from 'react'
import classes from '../Styles/Carousel.module.css'
import image1 from '../Images/image-1.png'
import image2 from '../Images/image-2.png'
import image3 from '../Images/image-3.png'

export default function Carousel() {
    const [translateAmount, setTranslateAmount] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        document.querySelector('.range_slider').value = 1;
    }, [])

    let styles = {
        transform: `translateX(${translateAmount}vw)` 
    }

    function handleRightButtonClick() {
        if(translateAmount != -200) {
            setTranslateAmount((prevAmount) => prevAmount - 100);
        }
    }

    function handleLeftButtonClick() {
        if(translateAmount != 0) {
            setTranslateAmount((prevAmount) => prevAmount + 100);
        }
    }

    function handleSlider() {
        let sliderValue = document.querySelector('.range_slider').value;

        if(sliderValue < 1) {
            document.querySelector('.range_slider').value = 1;
            sliderValue = 1;
        } else if(sliderValue > 3) {
            document.querySelector('.range_slider').value = 3;
            sliderValue = 3;
        }

        

        if(sliderValue - currentSlide < 0) {
            setTranslateAmount((prevAmount) => (prevAmount - (100 * (sliderValue - currentSlide))));
            setCurrentSlide(sliderValue);
        } else if(sliderValue - currentSlide > 0) {
            setTranslateAmount((prevAmount) => (prevAmount - (100 * (sliderValue - currentSlide))));
            setCurrentSlide(sliderValue);
        }

        console.log(document.querySelector('.range_slider').value);
    }

    return (
        <div className={classes.carousel}>
            <div style={styles} className={classes.carousel_slider}>
                <div className={classes.carousel_slider_frame}><img src={image1} alt="" /></div>
                <div className={classes.carousel_slider_frame}><img src={image2} alt="" /></div>
                <div className={classes.carousel_slider_frame}><img src={image3} alt="" /></div>
            </div>
            <div className={classes.slider_container}>
                <input className='range_slider' type='range' min='0' max='4' step='1' onChange={handleSlider} ></input>
            </div>
        </div>
    )
}
