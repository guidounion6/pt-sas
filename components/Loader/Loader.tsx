import React from 'react'
import Image from 'next/image'

import styles from "./loader.module.css"


const Loader = () => {
  return (
    <div className={styles.loader}>
      <Image
      src="/icons/loading-circle.svg"
      alt="Loading"
      width={50}
      height={50}
      priority
      />
    </div>
  )
}

export default Loader