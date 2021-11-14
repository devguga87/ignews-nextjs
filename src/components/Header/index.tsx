import Link from 'next/link'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt="Logo do ignews" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}