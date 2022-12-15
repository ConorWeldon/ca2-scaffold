import React from 'react';
import { Button } from '@mui/material';

//Importing my Image using react
import ScaffoldingAbout from '../assets/images/scaffoldingAbout.png'

//Icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import ContactlessRoundedIcon from '@mui/icons-material/ContactlessRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

const About = (props) => {

    return (
        <>
            <div class="heightAbout">
                <h1 class="indexAbout">About Us</h1>

                <div class="">
                    <img src={ScaffoldingAbout} alt='Two workers on a scaffold' class="aboutPhoto" />

                    <div class="iconsAbout">
                        <Button startIcon={<FacebookRoundedIcon />} color='primary' />
                        <Button startIcon={<AddLocationRoundedIcon />} color='primary' />
                        <Button startIcon={<ContactlessRoundedIcon />} color='primary' />
                        <Button startIcon={<MailRoundedIcon />} color='primary' />
                    </div>

                    <h3 class="aboutText">
                        Welcome to Premium Scaffolding, the leading provider of high-quality scaffolding solutions in the Greater XYZ area. Our team of experienced professionals 
                        is dedicated to providing safe, efficient, and cost-effective scaffolding services for a wide range of construction, maintenance, and repair projects.
                        <br/><br/>With over 20 years of experience in the industry, we have the knowledge and expertise to handle any scaffolding challenge. Our team is trained to 
                        work safely and efficiently, and we are fully licensed and insured for your peace of mind.<br/><br/>At Premium Scaffolding, we pride ourselves on our customer 
                        service. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements. We are 
                        committed to completing every project on time and on budget, and we always go the extra mile to ensure our clients are satisfied with our work.<br/><br/>
                        In addition to our exceptional scaffolding services, we also offer a range of accessories and equipment to support your project. From handrails and 
                        ladders to safety netting and temporary roofing, we have everything you need to get the job done right.<br/><br/>Thank you for considering Premium Scaffolding for 
                        your scaffolding needs. We look forward to working with you on your next project.
                    </h3>
                </div>
            </div>
        </>
    );
};

export default About;