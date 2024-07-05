import { SignUp } from '@clerk/nextjs'
import React from 'react'

import styles from "./page.module.css"

const SignUpPage = () => {
  return (
    <main className={styles.signup}>
       <SignUp />
    </main>
    
  )
}

export default SignUpPage