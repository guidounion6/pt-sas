"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import styles from "./MobileNav.module.css"

const MobileNav = () => {

  const pathname = usePathname()
  return (
    <section className={styles.section1}>
      <Sheet>
          <SheetTrigger asChild>
      <Image
        src="/icons/hamburger.svg"
        width={36}
        height={36}
        alt="hamburguer icon"
        className={styles.image1}
      />
      </SheetTrigger>
      <SheetContent side="left" className={styles.sheetcontent}> 
      <Link href="/" className={styles.link1}>
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="logo icon"
          className={styles.image2}
        />
        <p className={styles.p1}>Tech Test</p>
      </Link>
      <div className={styles.div1}>
        <SheetClose asChild> 
        <section className={styles.section2}>
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
            return (
              <SheetClose asChild key={item.label}>
              <Link
                href={item.route}
                key={item.label}
                className={cn([styles.link2], {
                  [styles.active] : isActive
                })}
              >
                <Image
                  src={item.imgUrl}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <p className={styles.p2}>
                  {item.label}
                </p>
              </Link>
              </SheetClose>
            )
          })}
        </section>
         </SheetClose> 
      </div>
       </SheetContent > 
      </Sheet> 
    </section>
  )
}

export default MobileNav