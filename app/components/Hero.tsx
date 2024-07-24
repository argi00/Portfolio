import React, { ComponentPropsWithoutRef } from 'react'
import { Section } from './Section'
import Image from 'next/image'
import picture from './picture.jpeg'
import { cn } from '@/lib/utils'
import { Linkdlinicon } from '@/icons/Linkdlinicon'
import Link from 'next/link'

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">)=>{
  return <span className={cn("bg-accent/30 hover:bg-accent/50 transition-colors font-mono border border-accent  px-1 py-0.5 rounded-sm text-primary",className)} {...props}/>
}

export const Hero = () => {
  return (
    <Section classname='flex max-md:flex-col items-start gap-4'>
        <div className='flex-[3] flex  w-full flex-col gap-2'>
            <h2 className='font-caption text-5xl text-primary font-bold'>Mamane Argi M.B</h2>
            <h3 className='text-2xl font-caption'>Associate Data scientist & ML Developper</h3>
            <p className='text-base'>
               I love creating content on{""} 
               <Link href="www.linkedin.com/in/mamane-argi">
                <Code className='inline-flex items-center gap-1'> 
                  <Linkdlinicon size={16} className='inline'/> Linkdln
                </Code>
               </Link>
               
            </p>
        </div>
        <div className='flex-[2] max-md:m-auto ml-auto'>
            <img src="/picture.png"  alt="argi picture" className='max-w-52 h-auto rounded-full max-md:w-56 flex-end'/>
        </div>
    </Section>
  )
}
