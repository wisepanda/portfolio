import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { IoMdContact } from "react-icons/io"
import { MdContactMail } from "react-icons/md"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ivan's Portfolio</title>
      </Head>
      <main className={styles.main}>
      <div className={styles.infos}>
        <div className='picSection'>
        <Image className={styles.img} src="/untitled1.png" alt='me' width={360} height={360}/>
        </div>
        <div className={styles.description}>
        <h1 className={styles.title}>
          Welcome Visitor!
        </h1>
        <h2>
            I'm Ivan and this my portfolio!
        </h2>
        <p>
          my story pppppp pppppppppppppp ppppppppppppppppppppp pppppppppppppppppp pppppppppppp pppppppppppppppp pppppppppppppppp p ppppppppppppp pppppppppppppppppppp pppppppppppppppppppp ppppppppppppppp ppppppppppppppppppp pppppppppppppppppppp ppppppppppp p pppppppp pppppp  
        </p>
        <div className={styles.grid}>
        <Link href="/projects">
          <a className={styles.card}>
            <h4>My Projects</h4>
          </a>
        </Link>
        </div>
      </div>
      </div>

        <div>
        {/* <hr/> */}
      <footer className={styles.footer}>
          <div className={styles.logos}>
          <Link href="https://www.linkedin.com/in/ivan-fanello-25b344230/">
            <AiFillLinkedin className={styles.linkedin}/>
          </Link>
          <Link href="">
            <MdContactMail className={styles.email}/>
          </Link>
          <Link href="/Ivan Fanello (London) - CV.pdf"
          target='_blank'>
          <IoMdContact className={styles.cv}/>
          </Link>
          <Link href="https://github.com/wisepanda">
            <AiFillGithub className={styles.github}/>
          </Link>
          </div>
      </footer>
      </div>
      </main>
    </div>
  )
}
