import React, { useEffect } from 'react'
import { useState } from 'react'
import classes from '../Styles/Carousel.module.css'
import whatismultitrackimage from '../Images/whatismultitrack.png'
import springImage from '../Images/springImage.png'
import image3 from '../Images/image-3.png'
import { Link } from 'react-router-dom'

export default function Carousel({mobileLayout}) {
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
            {!mobileLayout &&
            <div style={styles} className={classes.carousel_slider}>
                <div className={classes.carousel_slider_frame}><Link to='/multitrack/apply'><img src={springImage} alt="" /></Link></div>
                <div className={classes.carousel_slider_frame}><Link to='/multitrack/meet-the-fellows'><img src={image3} alt="" /></Link></div>
                <div className={classes.carousel_slider_frame}><Link to='/multitrack/about-us'><img src={whatismultitrackimage} alt="" /></Link></div>
            </div>}
            {!mobileLayout &&
            <div className={classes.slider_container}>
                <input className='range_slider' type='range' min='0' max='4' step='1' onChange={handleSlider} ></input>
            </div>}
            {mobileLayout && 
                <Link to='/multitrack/apply'><img src={springImage} alt="" /></Link>
            }
        </div>
    )
}
