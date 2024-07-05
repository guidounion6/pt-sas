"use client"
import React from 'react'

import Link from "next/link"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'


import styles from "./sidebar.module.css"
import { cn } from '@/lib/utils'

const SideBar = () => {
  const pathname = usePathname()

  return (
    <section className={styles.container}>
      <div className={styles.div}>
        {sidebarLinks.map((item)=> {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
          return ( 
            <Link 
            key={item.route} 
            href={item.route}
            className={cn([styles.link], {
              [styles.active]: isActive
            }
          )}
            >
              <Image 
              src={item.imgUrl}
              alt={item.label}
              width={24}
              height={24}
              className={styles.image}
              />
              <p className={styles.p}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default SideBar