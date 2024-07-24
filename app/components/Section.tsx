import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

export const Section = (props: PropsWithChildren<{classname?:string}>) => {
  return (
    <section className={cn('max-w-3xl px-4 m-auto',props.classname)}>
        {props.children}
    </section>
  )
}
