"use client"
import Image from "next/image"
import Link from "next/link"

import styles from "./header.module.css"
import MobileNav from "../MobileNav/MobileNav"
import { SignedIn, UserButton, useUser } from "@clerk/nextjs"

const Header = () => {
  const user = useUser()
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        <Image
          src="/icons/logo.svg"
          width={40}
          height={40}
          alt="logo"
          className={styles.Image}
        />
        <p className={styles.p}>
          Tech Test
        </p>
      </Link>
      <div className={styles.div2}>
        <h1 className={styles.h1}>Welcome {user?.user?.firstName}</h1>
      </div>
      <div className={styles.div1}>
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>
          <MobileNav />
      </div>
    </nav>
  )
}

export default Header