import Head from 'next/head'

import Footer from '@/components/Footer'

import styles from '@/styles/Container.module.css'

export default function Container ({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Comicbook</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main__container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}
