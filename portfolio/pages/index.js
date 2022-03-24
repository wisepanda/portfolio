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
        <div className={styles.titleDiv}>
        <h1 className={styles.title}>
          Welcome Visitor!
        </h1>
        </div>
      <div className={styles.infos}>
        <div className={styles.picSection}>
        <Image className={styles.img} src="/untitled1.png" alt='me' width={350} height={350}/>
          <div className={styles.logos}>
          <Link href="https://www.linkedin.com/in/ivan-fanello-25b344230/">
            <AiFillLinkedin className={styles.linkedin}/>
          </Link>
          <Link href="mailto:ivan.fanello@gmail.com">
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
        </div>
        <div className={styles.description}>
        <h2 className={styles.subtitle}>
            This is Ivan!
        </h2>
        <p className={styles.text}>
        School of code Alumni on bootcamp 10
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

      </main>
    </div>
  )
}
