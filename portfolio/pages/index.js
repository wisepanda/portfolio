import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { IoMdContact } from "react-icons/io"
import { ImMail4 } from "react-icons/im"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ivan's Portfolio</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.titleDiv}>
        <h1 className={styles.title}>
          Welcome Visitor!
        </h1>
        </div>
      <div className={styles.infos}>
        <div className={styles.picSection}>
        <Image className={styles.img} src="/untitled1.png" alt='me' width={350} height={350}/>
          <div className={styles.logos}>
          <Link href="https://www.linkedin.com/in/ivan-fanello-25b344230/" passHref>
            <AiFillLinkedin className={styles.linkedin}/>
          </Link>
          <Link href="mailto:ivan.fanello@gmail.com" passHref>
            <ImMail4 className={styles.email}/>
          </Link>
          <Link href="/Ivan Fanello (London) - CV.pdf"
          target='_blank' passHref>
          <IoMdContact className={styles.cv}/>
          </Link>
          <Link href="https://github.com/wisepanda" passHref>
            <AiFillGithub className={styles.github}/>
          </Link>
          </div>
        </div>
        <div className={styles.description}>
        <h2 className={styles.subtitle}>
            This is Ivan
        </h2>
        <p className={styles.text}>
        
I've been a manager in hospitality for the last 6 years, but when I felt the time was right for a change I decided to join school of code for a new adventure.
So here I am, challenging myself to improve, grow and be successfull in my new career as software engineer. I've loved tech since I was a kid and I'm excited to finally reveal it's mysteries!</p>

<p className={styles.text}>
I am just at the beginning of the journey and I am aware there is a long way to go, but I know that with my personality, experience and knowledge I can add value to any team.</p>
        <div className={styles.grid}>
        <Link href="/projects">
          <a className={styles.card}>
            <h4>My Projects</h4>
          </a>
        </Link>
        </div>
      </div>
      </div>

      </main>
    </div>
  )
}
