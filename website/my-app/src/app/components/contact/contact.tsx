'use client';
import React from 'react';
import styles from './contact.module.css';
import  ContactForm from './contact-form';
import { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isSubmitted) {
            timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 5000); // 5000 milliseconds = 5 seconds
        }
        return () => clearTimeout(timer);
    }, [isSubmitted]);

  return (
    <div id="contact" className={styles['contact-container']}>
        <div className={styles['contact-title']}>
            <h1>Contact</h1>
        </div>
        <div className={styles['contact-body']}>
            <div className={styles['contact-card']}>
                <ContactForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
            </div>
            <div className={styles['contact-info']}>
                <div className={styles['contact-link']}>
                    <GitHubIcon />
                    <p className={styles['text']}>  Github.com/Dheeraj-G</p>
                </div>
                <div className={styles['contact-link']}>
                    <LinkedInIcon />
                    <p className={styles['text']}>  Linkedin.com/in/dheeraj-gosula</p>
                </div>
                <div className={styles['contact-link']}>
                    <EmailIcon />
                    <p className={styles['text']}>  Gosuladheeraj@gmail.com</p>
                </div>
            </div>
        </div>
        {isSubmitted && (
            <div className={styles['success-message']}>
                Form submitted successfully!
            </div>
        )}
        <footer className={styles['footer']}>
            <p>Author - Dheeraj Gosula</p>
        </footer>
    </div>
  )
}

export default Contact