import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Vercingetorige</title>
        <meta name="description" content="Quant-trader" />
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

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Invest <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find the bot that fit your needs
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Automate <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Tell me about your strategy and let it work for you
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Let me talk a little bit about myself
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Lab <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              I am always challenging myself to explore promising domains
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
