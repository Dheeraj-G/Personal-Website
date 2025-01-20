'use client'
import React from 'react';
import styles from './nav.module.css';
import * as data from "./links.json";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import logo from './logo.png';

const AnchorLink = dynamic(() => import('react-anchor-link-smooth-scroll'), { ssr: false });
const linkString = JSON.stringify(data);
const links = JSON.parse(linkString).links;

type Link = {
    label: string;
    href: string;
}

const Links: React.FC<{links:Link[]}> = ({links}) => {
    return (
        <div className={styles['links-container']}>
        {links.map((link: Link) => {
            return(
                <div key={link.href} className={styles['link']}>
                    <AnchorLink href={link.href} offset={75}>
                        {link.label}
                    </AnchorLink>
                </div>
            )
        })}
      </div>
    )
}

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}> 
      <div className={styles['logo_container']}>
        <Image src={logo} alt="Logo" className={styles['logo']} />
      </div>
      <Links links={links}/>
    </nav>
  );
};

export default Navbar;