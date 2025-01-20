'use client';
import React, {forwardRef} from 'react'
import styles from './skills.module.css';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import * as data from "./skills.json";
const skillString = JSON.stringify(data);
const skills = JSON.parse(skillString).skills;

type Skill = {
    label: string;
}

interface SkillsBarProps {
    skills: Skill[];
  }
  
  const SkillsBar = forwardRef<HTMLDivElement, SkillsBarProps>(({ skills }, ref) => (
    <div ref={ref} className={styles['skills-button-container']}>
      {skills.map((skill) => (
        <div key={skill.label} className={styles['button']}>
          <a
            className={styles['skills-button']}
            target="_blank"
            rel="noopener noreferrer"
          >
            {skill.label}
          </a>
        </div>
      ))}
    </div>
  ));

const Skills: React.FC = () => {
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  const direction = -1;

  const animation = () => {
    if (xPercent <= -100) {
        xPercent = 0;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }

  useEffect( () => {
    requestAnimationFrame(animation);
  }, [animation])


  return (
    <div id="skills" className={styles['skills-container']}>
        <div className={styles['skills-title']}>
            <h1>Skills</h1>
        </div>
        <div className={styles['skills-body']}>
            <div className={styles['slider']}>
                <SkillsBar ref={firstText} skills={skills}></SkillsBar>
                <SkillsBar ref={secondText} skills={skills}></SkillsBar>
            </div>
        </div>
    </div>
  )

}
/*Skills.displayName = 'Skills';*/
export default Skills;