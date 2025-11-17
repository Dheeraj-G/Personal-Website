import React from 'react'
import styles from './projects.module.css';

const Projects: React.FC = () => {
  return (
   <div id="projects" className={styles['project-container']}>
        <div className={styles['project-header']}>
            <div className={styles['project-title']}>
                <h1>Projects</h1>
            </div>
            <div className={styles['title-description']}>
                <p>To view my other projects, please view my <a href="https://github.com/Dheeraj-G" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
        </div>
        <div className={styles['project1-container']}>
            <div className={styles['project-description1']}>
                <p className={styles['text']}>Created a front-end interface for students to see where open tables were at Ohio State libraries to 
                    save 20+ minutes finding a seat. Utilized multithreading on four instances of YOLOv8 on various live 
                    camera feeds to get aggregate data on seat availability.Developed a React JS web interface tied to live
                     Python script using Flask to allow users to see real time seat updates on phone app.</p>
            </div>
            <div className={styles['project-name']}>
                <h1 className={styles['title']}>Buck-Eye</h1>
                <p className={styles['text-info']}>Computer Vision Model + Full Stack Application</p>
            </div>
        </div>
        <div className={styles['project2-container']}>
            <div className={styles['project-name']}>
                <h1 className={styles['title']}>Perspective Generator</h1>
                <p className={styles['text-info']}>API Integration + Full Stack Application</p>
            </div>
            <div className={styles['project-description2']}>
                <p className={styles['text']}>Developed a full-stack web application that encourages users to explore diverse perspectives and approach 
                    issues from new viewpoints. Utilized the OpenAI API to output the three varying perspectives with a React 
                    JS frontend tied to a Python script using Flask. Sanitized the user input, used common prompt engineering 
                    techniques to iterate on the prompt, evaluated different models, and passed the output to the UI.</p>
            </div>
        </div>
        <div className={styles['project3-container']}>
            <div className={styles['project-description1']}>
                <p className={styles['text']}> Utilized algorithms such as logistic regression and decision trees 
                    to evaluate the Iris Flowers Dataset. Implemented the project using Python 
                    and utilized popular machine learning libraries such as Scikit-Learn and Pandas 
                    for data preprocessing, model training, and evaluation.</p>
            </div>
            <div className={styles['project-name']}>
                <h1 className={styles['title']}>Iris Flowers Classification</h1>
                <p className={styles['text-info']}>Machine Learning Dataset Classification</p>
            </div>
        </div>
   </div>
  )
}

export default Projects