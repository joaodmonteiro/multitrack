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

        let timer = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    let styles = {
        transform: `translateX(${translateAmount}vw)` 
    }

    function handleSlider() {

        let slider = document.querySelector('.range_slider');

        if(slider.value < 1) {
            slider.value = 1;
        } else if(slider.value > 3) {
            slider.value = 3;
        }

        setTranslateAmount((slider.value - 1) * -100);
    }

    function nextSlide() {
        let slider = document.querySelector('.range_slider');
        if(slider.value < 3) {
            slider.value++;
            setTranslateAmount((slider.value - 1) * -100);
        } else {
            slider.value = 1;
            setTranslateAmount((slider.value - 1) * -100);
        }
        
    }

    return (
        <div className={classes.carousel}>
            <div style={styles} className={classes.carousel_slider}>
                <div className={classes.carousel_slider_frame}><img src={image2} alt="" /></div>
                <div className={classes.carousel_slider_frame}><img src={image3} alt="" /></div>
                <div className={classes.carousel_slider_frame}><img src={image1} alt="" /></div>
            </div>
            <div className={classes.slider_container}>
                <input className='range_slider' type='range' min='0' max='4' step='1' onChange={handleSlider} ></input>
            </div>
        </div>
    )
}
