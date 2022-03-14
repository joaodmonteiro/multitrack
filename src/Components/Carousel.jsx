import React from 'react'
import { useState } from 'react'
import classes from '../Styles/Carousel.module.css'
import image1 from '../Images/image-1.png'
import image2 from '../Images/image-2.png'
import image3 from '../Images/image-3.png'

export default function Carousel() {
    const [translateAmount, setTranslateAmount] = useState(0);
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

    return (
        <div className={classes.carousel}>
            <div style={styles} className={classes.carousel_slider}>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
            <button className={classes.left_button} onClick={handleLeftButtonClick}>left</button>
            <button className={classes.right_button} onClick={handleRightButtonClick}>right</button>
        </div>
    )
}
