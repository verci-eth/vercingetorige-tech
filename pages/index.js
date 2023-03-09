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
        <div>
          <p>Tell me about your strategy and we are going to make it work for you</p>
          <p>I can build indicators, expert advisors and bots around any financial market</p>
          <p>This is my methodology to build successful products</p>
          <p>1. scope</p>
          <p>we define what to build and how: tech stack, milestones, iterations</p>
          <p>2. iterate</p>
          <p>we build {'>>'} we demo {'>>'} repeat</p>
          <p>3. delivery</p>
          <p>fine tuning the solution</p>
          <p>celebrate</p>
          <p>we built something great</p>
        </div>
      </div>
    )}

  // function to render about
  const renderAbout = () => {
    return(
      <div className={styles.about}>
        <p>🤓 Coding since I was 16, mainly for fun.</p>
        <p>👨‍🎓 Student of Computer-Science and Industrial Engineering at <a href='https://www.polimi.it/' target='_blank' rel="noreferrer">Politecnico di Milano</a>.</p>
        <p>🇰🇷 Exchange student for one semester at <a href='https://www.kaist.ac.kr/en/' target='_blank' rel="noreferrer">KAIST</a>, South Korea.</p>
        <p>👨‍💼 ERP Cloud consultant at <a href='https://www.oracle.com/' target='_blank' rel="noreferrer">Oracle</a> for 6 years.</p>
        <p>I have been implementing integrated Cloud Applications in both Supply Chain and Finance domains.</p>
        <p>Helping customers like <a>GE Oil & Gas</a>, <a>Wind3</a>, <a>Zanetti</a>, <a>Amplifon</a> reaching their corporate goals through process improvement and digitalization.</p>
        <p>👨‍💻 Digital Project Manager at <a href='https://www.oracle.com/' target='_blank' rel="noreferrer">Banca Progetto</a> for 1 year.</p>
        <p>I have been delivering cool and innovative digital projects like Test Automation, Custom Web Apps, Instant Lending, Fiscal Credits.</p>
        <p>👨‍🔬 Quit corporate job and city life to start working remotely on algotrading full-time</p>
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
              Tell me about your strategy and I will make it work for you
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
