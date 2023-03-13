import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const link_action = 'https://verci-action-nft.netlify.app/'
const link_dgames = 'https://dgames.dev/'
const link_writer = 'https://writer.up.railway.app/'
const link_hire = 'https://cal.com/verci'
const link_pivopo = null

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
        <div className={styles.grid}>
          <div className={styles.bot}
          onClick={() => window.open(link_hire, '_blank')}>
            <h2 className={inter.className}>Pivopo <span>-&gt;</span></h2>
            <p className={inter.className}>Grid bot that trades around custom daily Pivot Points calculated based on market volatility</p>
          </div>
          <div className={styles.bot}
          onClick={() => window.open(link_hire, '_blank')}>
            <h2 className={inter.className}>Grid <span>-&gt;</span></h2>
            <p className={inter.className}>Spot, Futures and Moon grid bots</p>
          </div>
          <div className={styles.bot}
          onClick={() => window.open(link_hire, '_blank')}>
            <h2 className={inter.className}>Recurring Buy <span>-&gt;</span></h2>
            <p className={inter.className}>Spot and Futures DCA with or without Martingale</p>
          </div>
        </div>
      </div>
    )}

  // function to render automate
  const renderAutomate = () => {
    return(
      <div className={styles.center}>
        <div className={styles.about}>
          <p>If you want to automate your trading strategy or part of it, I am here to help!</p>
          <p>Talking about <b>Forex, Stock and Commodities</b> markets, I am specialized in <a href='https://www.metatrader5.com/' target='_blank' rel="noreferrer">Metatrader</a> platforms for which I can build <b>INDICATORS, EXPERTS, SCRIPTS</b> for any broker.</p>
          <p>Talking about <b>Crypto</b> market, I can build custom <b>BOT and TOOL</b> for the main centralized exchanges.</p>
          <p>Everything can be easily integrated with a <b>Telegram Bot</b> to have all the information you need on the go!</p>
          <p>Our knowledge is the limit! ✨</p>
          <button className='asd' onClick={() => window.open(link_hire, '_blank')}>hire me</button>
        </div>
        <div className={styles.about}>
          <p><b>METHODOLOGY</b></p>
          <p>1️⃣ Scope<br>
            </br>| We define WHAT and HOW to build:<br>
            </br>| tech stack, milestones, iterations</p>
          <p>2️⃣ Iterate<br>
            </br>| Build {'>>'} Demo {'>>'} Repeat</p>
          <p>3️⃣ Delivery<br>
            </br>| Fine-tuning the solution</p>
          <p>🥳 Celebrate! We built something great together 🤝</p>
        </div>
      </div>
    )}

  // function to render about
  const renderAbout = () => {
    return(
      <div className={styles.center}>
        <div className={styles.about}>
          <p>🤓 Coding since I was 16, mainly for fun.</p>
          <p>👨‍🎓 Student of Computer-Science and Industrial Engineering at <a href='https://www.polimi.it/' target='_blank' rel="noreferrer">Politecnico di Milano</a>.</p>
          <p>🇰🇷 Exchange student at <a href='https://www.kaist.ac.kr/en/' target='_blank' rel="noreferrer">KAIST</a>, South Korea.</p>
          <p>👨‍💼 ERP Cloud consultant at <a href='https://www.oracle.com/' target='_blank' rel="noreferrer">Oracle</a> for 6 years.</p>
          <p>I have been implementing integrated Cloud Applications in both Supply Chain and Finance domains.</p>
          <p>Helping customers like <a href='https://www.ge.com/' target='_blank' rel="noreferrer">GE Oil & Gas</a>, <a href='https://www.windtre.it/' target='_blank' rel="noreferrer">Wind3</a>, <a href='https://www.mzb-group.com/' target='_blank' rel="noreferrer">Zanetti</a>, <a href='https://www.amplifon.com/' target='_blank' rel="noreferrer">Amplifon</a> reaching their corporate goals through process improvement and digitalization.</p>
        </div>
        <div className={styles.about}>
          <p>👨‍💻 Digital Project Manager at <a href='https://www.bancaprogetto.it/' target='_blank' rel="noreferrer">Banca Progetto</a> for 1 year.</p>
          <p>I have been delivering cool and innovative digital projects like Test Automation, Custom Web Apps, Instant Lending, Tax Credits.</p>
          <p>👨‍🔬 Quit corporate job and city life to start working remotely on algotrading full-time</p>
          <p>🏦 Currently managing 50k€ investment portfolio through automated trading strategies</p>
        </div>
      </div>
    )}

  // function to render lab
  const renderLab = () => {
    return(
      <div className={styles.center}>
        <div className={styles.grid}>
          <div className={styles.lab}
          onClick={() => window.open(link_dgames, '_blank')}>
            <h2 className={inter.className}>dGames <span>-&gt;</span></h2>
            <p className={inter.className}>decentralized rock paper scissors</p>
          </div>
          <div className={styles.lab}
          onClick={() => window.open(link_action, '_blank')}>
            <h2 className={inter.className}>ACTION <span>-&gt;</span></h2>
            <p className={inter.className}>NFT collection leveraging on-chain data</p>
          </div>
          <div className={styles.lab}
          onClick={() => window.open(link_writer, '_blank')}>
            <h2 className={inter.className}>writer <span>-&gt;</span></h2>
            <p className={inter.className}>prompt generator to talk better to AI</p>
          </div>
        </div>
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
