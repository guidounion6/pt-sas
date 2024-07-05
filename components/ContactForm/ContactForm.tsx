"use client"
import React from 'react'
import { ContactSchema } from '@/schema'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'


import { useFormStatus } from 'react-dom'
import CardWrapper from '../CardWrapper/CardWrapper'

import styles from "./contactform.module.css"
import { useToast } from '../ui/use-toast'


const ContactForm = () => {
  const { toast } = useToast()

  const { pending } = useFormStatus() 

  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  })

  const onSubmit = (data: z.infer<typeof ContactSchema>) => {
    toast({ 
      title: "Message sended"
  })
  }
  return (
    
    <CardWrapper
    title="Contact me!"
    label="send a message"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className={styles.card}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                  <FormLabel className="text-white">Name:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Write your name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                  <FormLabel className="text-white">Email: </FormLabel>
                  <FormControl>
                    <Input {...field} type="mail" placeholder="example@gmail.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => {
                return (
                  <FormItem>
                  <FormLabel className="text-white">Subject: </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Write the subject of your message" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => {
                return (
                  <FormItem>
                  <FormLabel className="text-white">Message: </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )
              }}
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            Send Message
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default ContactForm