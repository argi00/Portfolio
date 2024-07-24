import React from 'react'
import { Section } from './Section'
import { Button } from '@/components/ui/button'
import { Githubicon } from '@/icons/Githubicon'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Linkdlinicon } from '@/icons/Linkdlinicon'
export const Header = () => {
  return (
    <header className='sticky top-0 py-4'>
        <Section classname='flex items-baseline'>
            <h1 className='text-lg font-bold text-primary'>argi.com</h1>
            <div className='flex-1'/>
                <ul className='flex items-center gap-2'>
                    <Link 
                      href= "https://github.com/argi00"
                      className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                      >
                    <Githubicon  size={12} className='text-foreground'/>
                    </Link>
                    <Link 
                      href= "www.linkedin.com/in/mamane-argi"
                      className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                      >
                    <Linkdlinicon size={12} className='text-foreground'/>
                    </Link>
                </ul>
           
        </Section>

    </header>
  )
}
