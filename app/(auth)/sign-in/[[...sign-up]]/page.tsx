import React from 'react'
import { SignIn } from '@clerk/nextjs'

import styles from "./page.module.css"

const SingInPage = () => {
  return (
    <main className={styles.signin}>
      <SignIn />
    </main>
  )
}

export default SingInPage