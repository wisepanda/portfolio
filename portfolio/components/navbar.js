import React from 'react';
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar({link, pageName}){
    return (
        <div className={styles.navContainer}>
        <button className={styles.linkButton}>
        <a href={link}>
        <p>{pageName}</p>
        </a>
        </button>
        </div>
    )
}