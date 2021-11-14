import { useState } from "react"
import { FaGithub } from 'react-icons/fa'
import { FiX} from 'react-icons/fi'
import styles from './styles.module.scss'

export const SignInButton = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  function handleClick(){
    setIsUserLoggedIn(!isUserLoggedIn)
  }

  return(
    <>
      {isUserLoggedIn ? (
        <button 
          type='button' 
          onClick={handleClick}
          className={styles.signInButton}
        >
          <FaGithub color="#04d361"/>
          tiago luchtenberg
          <FiX color="737380" className={styles.closeIcon}/>
        </button>
      ) : (
        <button 
          type='button' 
          onClick={handleClick}
          className={styles.signInButton}
        >
          <FaGithub color="#eba417"/>
          Sign in with Github
        </button>
      )}
    </>
  )
}