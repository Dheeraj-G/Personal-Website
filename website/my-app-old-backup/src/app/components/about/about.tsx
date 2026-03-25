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
                    href="https://drive.google.com/file/d/12o64KxAoULOaMXOY-6bmqCq3NjRfLd6q/view?usp=drive_link"
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