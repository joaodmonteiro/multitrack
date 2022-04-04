import React from 'react';
import classes from '../Styles/TextBlock.module.css';

export default function TextBlock({title, body, style}) {
  return (
    <div className={classes.block} style={style}>
        {title}
        {body}
    </div>
  )
}
