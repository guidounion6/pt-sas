"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card'

import styles from "./cardwrapper.module.css"
import AuthHeader from '../AuthHeader/AuthHeader'

interface CardWrapperProps {
    label: string,
    title: string, 
    children: React.ReactNode

}

const CardWrapper = ({label, title, children }: CardWrapperProps) => {
  return (
    <Card className={styles.card}>
        <CardHeader >
            <AuthHeader label={label} title={title}/>
        </CardHeader>
       <CardContent>
        {children}
       </CardContent>
    </Card>
  )
}

export default CardWrapper