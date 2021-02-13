import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Button from '@/components/Button'
import Container from '@/components/Container'
import GitHub from '@/components/Icons/GitHub'
import Google from '@/components/Icons/Google'
import Twitter from '@/components/Icons/Twitter'

import useUser, { USER_STATES } from '@/hooks/useUser'

import { loginWithGitHub, loginWithGoogle, loginWithTwitter } from '@/lib/firebase'

import styles from '@/styles/Home.module.css'

export default function Home () {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClickGitHub = () => loginWithGitHub().catch((err) => console.log(err))

  const handleClickGoogle = () => loginWithGoogle().catch((err) => console.log(err))

  const handleClickTwitter = () => loginWithTwitter().catch((err) => console.log(err))

  return (
    <Container>
      <section className={styles.section}>
        <h1 className={styles.title}>Comicbook</h1>

        <h2 className={styles.subtitle}>
          ¿List@ para organizar tus comics?
        </h2>

        <div className={styles.button__container}>
          {user === USER_STATES.NOT_LOGGED && (
            <div className={styles.buttons}>
              <Button onClick={handleClickGitHub}>
                <GitHub fill='#fff' width={24} height={24} />
                Login with GitHub
              </Button>

              <Button onClick={handleClickGoogle}>
                <Google width={24} height={24} />
                Login with Google
              </Button>

              <Button onClick={handleClickTwitter}>
                <Twitter width={24} height={24} />
                Login with Twitter
              </Button>
            </div>
          )}
          {user === USER_STATES.NOT_KNOWN && <img src='/vercel.svg' width={100} />}
        </div>
      </section>
    </Container>
  )
}
