import React from 'react'
import classes from '../Styles/AboutUs.module.css'
import Heading from '../Components/Heading'
import TextBlock from '../Components/TextBlock'
import groupPhoto from '../Images/whoweareimage.png'
import waveform from '../Images/waveform.png'
import Sponsors from './Sponsors'
import groupPhoto2 from '../Images/groupphoto.jpeg'

export default function AboutUs() {
  const titleContent = ["HOW CAN WE MAKE", "OUR AUDIO COMMUNITY BETTER?"];
  const titleColor = "#7F5BFF";

  const whoWeAreBody = "Multitrack is organised by a volunteer steering team. Past team members include Husain Husaini (from Wire Free Productions), Zezi Ifore (broadcaster) and Leanne Alie (BBC and independent podcast project manager and diversity consultant).";
  const whoWeAreTitle = "Who we are";
  const whoWeAreStyle = { gridArea: 'whoWeAre', justifyContent: 'center', borderTop: '1px solid black'};

  const whyWeExistTitle = "Why we exist";
  const whyWeExistBody = [
    `OFCOM does an annual report called ‘Diversity and equal opportunities in radio’, which measures diversity among broadcasters using the protected characters set out in the Equalities Act 2010. The 2019 report found that within the UK radio industry: ‘6% of employees define as having a minority ethnic background’ (this is the terminology used by OFCOM) and ‘6% of people self-define as disabled’.`,
    `The report also noted that ‘Barriers of social class and privilege can prevent the widest pool of people from being able to fulfil their potential, regardless of their background.`,
    `The research paper ‘Panic! Social Class, Taste and Ine qualities in the Creative Industries‘ (commissioned by Create London) also states that ‘the cultural and crea tive industries are marked by significant inequalities; in particular […] the social class background of the work force, and how this intersects with other issues, includ ing attitudes and values, experiences of working for free, social networks, and cultural tastes.’`
  ]
  const whyWeExistStyle = { gridArea: 'whyWeExist', borderTop: '1px solid black' };

  const yellowCopy = "‘Barriers of social class and privilege can prevent the widest pool of people from being able to fulfil their potential, regardless of their background.’"
  const yellowCopyStyle = { gridArea: 'yellowCopy', backgroundColor: 'yellow', justifyContent: 'center', borderTop: '1px solid black', borderLeft: '1px solid black'};

  const steeringTeamTitle = '2021 Steering Team';
  const steeringTeamBody = [
    'Arlie Adlington – Audio Producer',
    'Deborah Dudgeon – Freelance executive producer & consultant',
    'Lisa Hack – Goldsmiths Associate Lecturer & ex BBC World Service',
    'Nicole Logan – Reduced Listening',
    'Joby Waldman – Reduced Listening'
  ]
  const steeringTeamStyle = { gridArea: 'steeringTeam', borderTop: '1px solid black', borderLeft: '1px solid black'}

  const joinUsTitle = 'Join us';
  const joinUsBody = 'If you are interested in supporting Multitrack or be coming a Fellow, contact us today or follow our news bulletin for the latest opportunities.';
  const joinUsStyle = { gridArea: 'joinUs', justifyContent: 'center', borderTop: '1px solid black', borderLeft: '1px solid black', borderBottom: '1px solid black'};

  const ourStoryTitle = 'Our story';
  const ourStoryBody = 'The idea for Multitrack came out of an event in 2018, where members of the UK audio community got together to ask the question ‘How can we make our audio community better?’ After the event, a group of people got together to create a new initiative aimed at improving access to the audio industry, for people who are underrepresented and may be struggling to get their break.';
  const ourStoryStyle = { gridArea: 'ourStory', borderTop: '1px solid black'};

  const ourValuesTitle = 'Our values';
  const ourValuesBody = [
    'Audio is an amazing medium for sharing ideas, telling stories and expressing creativity',
    'Everyone who has a passion for audio should have an equal opportunity to make it their job – regardless of background, race, class, financial means, disability or other factors',
    'Audio, like many creative industries, has an access problem caused in part by a culture of unpaid internships, low paid work and a reliance on personal and professional networks that not everyone can break into',
    'Everyone should feel welcome at work, and we need to work harder to help underrepresented groups to feel included',
    'Building an audio industry that is representative of the society we live in, and is accessible to everyone, is the right thing to do because:',
    'We believe in fairness and equality',
    'A diversity of voices and opinions will make the work created within this industry better'
  ];
  const ourValuesStyle = { gridArea: 'ourValues', borderLeft: '1px solid black'};

  return (
    <div>
      <Heading content={titleContent} color={titleColor}/>
      <div className={classes.body}>
        <TextBlock title={<h1>{whoWeAreTitle}</h1>} body={<p>{whoWeAreBody}</p>} style={whoWeAreStyle}/>
        <div className={classes.imageBlock} id='groupPhoto1'>
          <img src={groupPhoto}/>
        </div>
        <TextBlock title={<h1>{whyWeExistTitle}</h1>} body={whyWeExistBody.map(string => <p>{string}</p>)} style={whyWeExistStyle}/>
        <TextBlock body={<blockquote>{yellowCopy}</blockquote>} style={yellowCopyStyle}/>
        <TextBlock title={<h1>{steeringTeamTitle}</h1>} body={steeringTeamBody.map(string => <p>{string}</p>)} style={steeringTeamStyle}/>
        <div className={classes.waveform}>
          <img src={waveform}/>
        </div>
        <TextBlock title={<h1>{joinUsTitle}</h1>} body={<p>{joinUsBody}</p>} style={joinUsStyle}/>
        {/* <Sponsors/> */}
        <TextBlock title={<h1>{ourStoryTitle}</h1>} body={<p>{ourStoryBody}</p>} style={ourStoryStyle}/>
        <div className={classes.imageBlock} id='groupPhoto2'>
          <img src={groupPhoto2}/>
        </div>
        <TextBlock title={<h1>{ourValuesTitle}</h1>} body={<div><p>We Believe:</p><ul className='list'>{ourValuesBody.map(value => <li>{value}</li>)}</ul></div>} style={ourValuesStyle}/>
      </div>
    </div>
  )
}
