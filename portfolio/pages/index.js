import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
        <div className={styles.grid}>
        <Link href="/projects">
          <a className={styles.card}>
            <h2>My Projects</h2>
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.card}>
            <h2>About me..</h2>
            <p></p>
          </a>
        </Link>
        </div>
        <div>
        {/* <hr/> */}
      <footer className={styles.footer}>
          <div className={styles.logo}>
          <button className="linkedin">Linkedin</button>
          <button className='Github'>Github</button>
          </div>
      </footer>
      </div>
      </main>
    </div>
  )
}
