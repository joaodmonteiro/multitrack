import React from 'react'
import Heading from '../Components/Heading'
import classes from '../Styles/Apply.module.css'
import singerPhoto from '../Images/singer.jpeg'
import TextBlock from '../Components/TextBlock';

export default function Apply() {
    const headingContent = ['READY TO APPLY?'];
    const headingColor = '#CC52E0';

    const bodyText = 
    <div>
        <p style={{fontSize: 'var(--fs-small)' }}>
            Get a copy of the application from <a href='https://docs.google.com/document/d/1DMw0Nea1GcuUTi_fY10B_k3BMKP2foZ4XfDCcpM-uoI/edit?usp=sharing' target='_blank'>Google Docs</a> or by downloading this <a href='https://www.multitrack.uk/s/Multitrack-2022_-Audio-Producer-Fellowship-application-form.docx' target='_blank'>Word document</a>. 
        </p>
        <p style={{fontSize: 'var(--fs-small)' }}>
            When you’ve written your application, save it as a PDF and submit it (along with some other details we need from you) using this <a href='https://forms.gle/UEnDPNKA9QTK5JCc8' target='_blank'>Google Form</a>. 
        </p>
    </div>

  return (
    <div className={classes.apply}>
        <Heading content={headingContent} color={headingColor}/>
        <div className={classes.body}>
            <TextBlock body={bodyText}/>
            <div className={classes.image}>
                <img src={singerPhoto}></img>
            </div>
            
        </div>
    </div>
  )
}
