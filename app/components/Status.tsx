import React from 'react'
import { Section } from './Section'
import { Card } from '@/components/ui/card'
import { ArrowUpRight, BadgeDollarSign, Code, Home, LucideIcon, Notebook, Rss } from 'lucide-react'
import Link from 'next/link'
export const Status = () => {
  return (
    <Section classname='flex max-md:flex-col items-start gap-4'>

        <div className='flex-[3] w-full'>
            <Card className='w-full p-4 flex flex-col gap-2 '>
                <p className=' text-lg text-muted-foreground'>
                    Side, fun project
                </p> 

                <div className='flex flex-col gap-4'>
                    {
                        SIDE_PROJECTS.map((project, index)=>(
                            <SideProject 
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url = "/"
                            />
                        ))
                    }
                </div> 

            </Card>
        </div>
        <div className='flex-[2] w-full flex flex-col h-full gap-4'>
            <Card className='p-4 flex-1'>
            <p className=' text-lg text-muted-foreground'>
                    Work
            </p> 

            <div className='flex flex-col gap-4'>
                {
                    WORKS.map((work, index) =>(
                        <Work 
                            key={index}
                            image={work.image}
                            title={work.title}
                            role={work.role}
                            date={work.date}
                            url={work.url}
                        />
                    ))

                    
                }
            </div>

            </Card> 
            <Card className='p-4 flex-1 mb-12flex flex-col gap-2 mt-1'>
                <p className=' text-lg text-muted-foreground'>
                        Contact me
                </p>
                

                <ContactCard name='@mamaneargi' image='/picture.png' mediumImage='https://imgs.search.brave.com/10C8cH0McTXECJpmBAzPR2OfqPsXOwQIKu8mVW6Qxys/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ2Lzc4LzIz/LzM2MF9GXzU0Njc4/MjM5OF8yNlYzcEw4/NGRKWUw3b3ZnSUlJ/amNESjdJaFBVRHhT/QS5qcGc' description='10 post'
                />
                <ContactCard name='@mamaneargi' image='/picture.png' mediumImage='https://imgs.search.brave.com/10C8cH0McTXECJpmBAzPR2OfqPsXOwQIKu8mVW6Qxys/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ2Lzc4LzIz/LzM2MF9GXzU0Njc4/MjM5OF8yNlYzcEw4/NGRKWUw3b3ZnSUlJ/amNESjdJaFBVRHhT/QS5qcGc' description='10 post'
                />
            </Card>
        </div>
    </Section>
  )
}

const ContactCard = (props: {
    image: string;
    mediumImage:string;
    name:string;
    description:string;

})=>{
    return(
        <Card  className='p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4'>
            <div className='relative'>
            <img 
                src={props.image} 
                alt={props.name} 
                className='w-10 h-10 rounded-full object-contain'
            />
            <img 
                src={props.mediumImage} 
                alt={props.name} 
                className='w-4 h-4 absolute -bottom-1 -right-1  rounded-full object-contain'
            />
            </div>

            <div className='mr-auto'>
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-semibold'>{props.name}</p>
                </div>
                    
                <p className=' text-xs text-muted-foreground'>{props.description}</p>
            </div>
            <ArrowUpRight className='group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform' size={16} />

        </Card>
    )
}





const SIDE_PROJECTS:SideProjectProps[] =[
    {
        Logo:Code,
        title:"My Open The Iris",
        description: "Predict which class of iris plant belongs to based on its characteristics",
        url:"/"
    },
    {
        Logo:Notebook,
        title:"My First Scraper Ds",
        description: "Using python libraries requests and beautifulsoup4, return a CSV of the TOP 25 trending repositories from Github.",
        url:"/"
    },
    {
        Logo:Rss,
        title:"My Convex Optimization",
        description: "Our goal is to classify fruits to know if a fruit is an apple, an orange, or something else, depending on some attributes (color, shape, weight...)",
        url:''
    },
    {
        Logo:BadgeDollarSign,
        title:"My Vivino",
        description: "My Vivino is an online marketplace. We have a vast wine database, and we have 27 million users, mainly in North America.",
        url:''
    },

]


type SideProjectProps = {
    Logo:LucideIcon;
    title: string;
    description: string;
    url:string
}

const SideProject = (props:SideProjectProps)=>{
    return (

        <Link href={props.url} className='inline-flex  items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded'>
            
                <span className='bg-accent text-accent-foreground p-3 rounded-sm'> 
                    <props.Logo size={16} />
                </span> 
                <div>
                    <p className='text-lg font-semibold'>{props.title}</p>
                    <p className=' text-sm text-muted-foreground'>{props.description}</p>

                </div>
            
        </Link>

    )
}


const WORKS:WorkProps[]= [
    {
        image:"https://qwasar.io/",
        title:"Qwasar",
        role:"student",
        date:"2022-present",
        url:"/"

    },
    {
        image:"https://qwasar.io/",
        title:"Qwasar",
        role:"student",
        date:"2022-present",
        url:"/"

    },
    {
        image:"https://qwasar.io/",
        title:"Qwasar",
        role:"student",
        date:"2022-present",
        url:"/"

    },
]

type WorkProps = {
    image:string;
    title: string;
    role: string;
    date:string;
    url:string
}

const Work = (props:WorkProps)=>{
    return (

        <Link href={props.url} className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded'>
            
                <span className='bg-accent text-accent-foreground p-3 rounded-sm'> 
                    <img 
                        src={props.image} 
                        alt={props.title} 
                        className='w-4 h-4 object-contain'
                    />
                </span> 
                <div>
                    <p className='text-lg font-semibold'>{props.title}</p>
                    <p className=' text-sm text-muted-foreground'>{props.role}</p>
                </div>
                <div className='ml-auto'>
                    <p className=' text-sm text-muted-foreground'>{props.date}</p>
                </div>
            
        </Link>

    )
}