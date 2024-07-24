import React from 'react'
import { Section } from './Section'
import { Badge } from 'lucide-react'
import { JupyterLogo } from '@/icons/JupyterLogo'
import { TensorflowLogo } from '@/icons/TensorflowLogo'
import { PythonLogo } from '@/icons/PythonLogo'

export const Skills = () => {
  return (
    <Section classname='flex flex-col items-start gap-4'>

        <h2 className='scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            I love working on ...
        </h2>

        <div className='flex max-md:flex-col gap-10 flex-1'>
            <div className='flex flex-col gap-4'>
                <JupyterLogo size={42} className='animate-spin' style={{animationDuration:"8s"}}/>
                <h3 className="font-2xl font-semibold tracking-tight mb-2">Jupyter</h3>
            </div>
            <div className='flex flex-col gap-4'>
                
                <TensorflowLogo size={42} className='animate-spin ml-4' style={{animationDuration:"8s"}}/>
                <h3 className="font-2xl font-semibold tracking-tight mb-2">Tensorflow</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <PythonLogo size={42} className='animate-spin' style={{animationDuration:"8s"}}/>
                <h3 className="font-2xl font-semibold tracking-tight mb-2">Python</h3>
            </div>
                
                
            
      </div>
    </Section>
  )
}

