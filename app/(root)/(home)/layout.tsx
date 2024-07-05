import React, { ReactNode } from 'react'
import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';

import styles from "./layout.module.css"

export const metadata: Metadata = {
    title: "Prueba Tecnica",
    description: "Profile App",
    icons: {
        icon: "/icons/logo.svg",
      },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.div1}>
                <SideBar />
                <section className={styles.section}>
                    <div className={styles.div2}>
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomeLayout