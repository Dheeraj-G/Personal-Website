import React from 'react'
import styles from './about.module.css';
import Image from 'next/image';


const About: React.FC = () => {
    return (
      <div id="about" className={styles.about}> 
        <div className={styles['about-container']}>
            <div className={styles['about-title']}>
                <h1>Hi, I&apos;m Dheeraj</h1>
            </div>
            <div className={styles['about-content']}>
                <p> Through my various experiences including sketching, reading, rock climbing, and software development, 
                    I discovered a passion for harnessing creativity to drive meaningful change. I aspire to apply my academic knowledge,
                     innovative mindset, and passion for technology to create impactful solutions that make a positive difference in those 
                     around me. 
                </p>
                <a
                    className={styles['resume-button']}
                    href="https://drive.google.com/file/d/1tcITRy7V0tZIXdsmC25bAYL-_inUZH5y/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View my Resume
                </a>
            </div>
        </div>
        <div className={styles['image-container']}>
            <Image 
            src="/personal-photo.jpeg" 
            width={400}
            height={300}
            alt="Personal photo" />
        </div>
      </div>
    );
  };
  
  export default About;