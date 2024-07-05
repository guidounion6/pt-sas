import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import React from 'react'

import styles from "./page.module.css"

const InteretsPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <div className={styles.div3}>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardtitle}>Work</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/icons/js.svg"
                  alt="JS"
                  height={35}
                  width={35}
                  className={styles.image}
                />
              </CardContent>
            </Card>
          </div>
          <div className={styles.div3}>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardtitle}>Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/icons/ball.svg"
                  alt="ball"
                  height={35}
                  width={35}
                  className={styles.image}
                />
              </CardContent>
            </Card>
          </div>
          <div className={styles.div3}>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardtitle}>Videogames</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/icons/games.svg"
                  alt="games"
                  height={35}
                  width={35}
                  className={styles.image}
                />
              </CardContent>
            </Card>
          </div>
          <div className={styles.div3}> 
            <Card className={styles.card}>
            <CardHeader>
              <CardTitle className={styles.cardtitle}>Learn new stuff</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/icons/learn.svg"
                alt="learn"
                height={35}
                width={35}
                className={styles.image}
              />
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteretsPage