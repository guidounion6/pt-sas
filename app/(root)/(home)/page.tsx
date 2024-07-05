"use client"
import React, { useEffect, useState } from 'react'

import styles from "./page.module.css"
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import CardWrapper from '@/components/CardWrapper/CardWrapper'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

const Home = () => {

  const {toast} = useToast()
  const now = new Date()

  const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now)

  const user = useUser()
  const image = user?.user?.imageUrl

  const [name, setName] = useState(user?.user?.firstName)
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (user?.user?.firstName) {
      setName(user?.user?.firstName);
    }
  }, [user?.user?.firstName]);


  const submitChangeName = () => {
    setName(inputValue);
    
  };

  return (
    <section className={styles.section}>
      <div className={styles.div1}>
        <div className={styles.div2}>
          {image && (
            <Image
              src={image}
              alt=""
              width={100}
              height={100}
              className={styles.image}
            />
          )}
          <h1 className={styles.h2}>{name}&apos;s profile </h1>
        </div>
        <div className={styles.div3}>
          <h2 className={styles.h1}>{time}</h2>
          <p className={styles.p}>{date}</p>
        </div>
      </div>

      <CardWrapper
        title="Change your profile's title"
        label="write your title"
      >
        <form onSubmit={(e) => {
          toast({ 
            title: "Profile's name changed"
        })
          e.preventDefault();
          submitChangeName();
        }}>
          <div className={styles.card}>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} />
            <Button type="submit">Submit Change</Button>
          </div>
        </form>
      </CardWrapper>


    </section>
  )
}

export default Home

