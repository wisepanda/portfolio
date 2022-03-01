import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ivan's Portfolio</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Ivan's Portfolio
        </h1>
      <div className={styles.infos}>
        <div>
        <Image className={styles.img} src="/untitled1.png" alt='me' width={360} height={360}/>
        </div>
        <div className={styles.description}>
            <p>
              Ciao sono Ivan!
            </p>
        </div>
      </div>
        <div className={styles.grid}>
        <Link href="/projects">
          <a className={styles.card}>
            <h4>My Projects</h4>
          </a>
        </Link>
        <Link href="/get-in-touch">
          <a className={styles.card}>
            <h4>Get in Touch!</h4>
          </a>
        </Link>
        </div>
        <div>
        {/* <hr/> */}
      <footer className={styles.footer}>
          <div className={styles.logos}>
            <AiFillLinkedin className={styles.linkedin}/>
            <AiFillGithub className={styles.github}/>
          </div>
      </footer>
      </div>
      </main>
    </div>
  )
}
