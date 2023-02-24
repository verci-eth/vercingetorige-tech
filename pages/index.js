import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // home state
  const [home, setHome] = useState(true)
  // invest state
  const [invest, setInvest] = useState(false)
  // automate state
  const [automate, setAutomate] = useState(false)
  // about state
  const [about, setAbout] = useState(false)
  // lab state
  const [lab, setLab] = useState(false)

  // function to toggle invest
  const toggleInvest = () => {
    if(invest) {
      setHome(true);
      setInvest(false);
      setAutomate(false);
      setAbout(false);
      setLab(false);
    } else {
      setHome(false);
      setInvest(true);
      setAutomate(false);
      setAbout(false);
      setLab(false);
    }
  }

  // function to toggle automate
  const toggleAutomate = () => {
    if(automate) {
      setHome(true);
      setInvest(false);
      setAutomate(false);
      setAbout(false);
      setLab(false);
    } else {
      setHome(false);
      setInvest(false);
      setAutomate(true);
      setAbout(false);
      setLab(false);
    }
  }

  // function to toggle about
  const toggleAbout = () => {
    if(about) {
      setHome(true);
      setInvest(false);
      setAutomate(false);
      setAbout(false);
      setLab(false);
    } else {
      setHome(false);
      setInvest(false);
      setAutomate(false);
      setAbout(true);
      setLab(false);
    }
  }

  // function to toggle lab
  const toggleLab = () => {
    if(lab) {
      setHome(true);
      setInvest(false);
      setAutomate(false);
      setAbout(false);
      setLab(false);
    } else {
      setHome(false);
      setInvest(false);
      setAutomate(false);
      setAbout(false);
      setLab(true);
    }
  }

  // function to render home
  const renderHome = () => {
    return(
      <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className={styles.thirteen}>
        <Image
          src="/logo.png"
          alt="logo"
          width={75}
          height={75}
          priority
        />
      </div>
    </div>
    )}
  
  // function to render invest
  const renderInvest = () => {
    return(
      <div className={styles.center}>
        invest
      </div>
    )}

  // function to render automate
  const renderAutomate = () => {
    return(
      <div className={styles.center}>
        automate
      </div>
    )}

  // function to render about
  const renderAbout = () => {
    return(
      <div className={styles.center}>
        about
      </div>
    )}

  // function to render lab
  const renderLab = () => {
    return(
      <div className={styles.center}>
        lab
      </div>
    )}

  return (
    <>
      <Head>
        <title>Vercingetorige</title>
        <meta name="description" content="algotrader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            algotrader building emotionless trading strategies
          </p>
          <div>
            <a
              href="https://twitter.com/verci_eth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter Logo"
                width={40}
                height={40}
                priority
              />
            </a>
          </div>
        </div>

        {home ? renderHome() : null}
        {invest ? renderInvest() : null}
        {automate ? renderAutomate() : null}
        {about ? renderAbout() : null}
        {lab ? renderLab() : null}

        <div className={styles.grid}>
          <div
            className={styles.card}
            onClick={toggleInvest}
          >
            <h2 className={inter.className}>
              Invest <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find the bot that fit your needs
            </p>
          </div>

          <div
            className={styles.card}
            onClick={toggleAutomate}
          >
            <h2 className={inter.className}>
              Automate <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Tell me about your strategy and let it work for you
            </p>
          </div>

          <div
            className={styles.card}
            onClick={toggleAbout}
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Let me talk a little bit about myself
            </p>
          </div>

          <div
            className={styles.card}
            onClick={toggleLab}
          >
            <h2 className={inter.className}>
              Lab <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              I am always challenging myself to explore promising domains
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
