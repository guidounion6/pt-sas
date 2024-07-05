"use client"

import React from 'react'
import { Button } from '../ui/button'
import styles from "./about.module.css"
import { Textarea } from '../ui/textarea'

const About = () => {
  return (
    <section className={styles.section} >
      <div className={styles.div1}>
        <div className={styles.div2}>
          <h1 className={styles.h1}>About Me</h1>
          <h2 className={styles.h2}>
          My name is Guido Contartese i am an Argentinian Fullstack Developer. I love making sites and creating aesthetical, practical and scalable solutions for my clients while sharing my experience with colleagues and partners. I have been doing this for +2 years learning by myself and as a freelancer and one year ago started to do it professionally acheiving a degree in Fullstack Development. My main techs are JavaScript, React, Next, and Redux for client-side views, as well as Node.JS, Express, and Sequelize for server-side operations, and, of course, version control with Git. Additionally, my skills extend to managing relational databases with PostgreSQL, MySQL, and API consumption. I wish you the best and hope we could work togheter sometime, if so...contact me!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default About