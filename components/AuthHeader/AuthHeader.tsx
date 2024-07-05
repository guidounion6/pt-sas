import React from 'react'

import styles from "./authheader.module.css"

interface AuthHeaderProps {
    label: string,
    title: string, 
}

const AuthHeader = ({label, title}: AuthHeaderProps) => {
  return (
    <div className={styles.div1}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.p}>{label}</p>
    </div>
  )
}

export default AuthHeader