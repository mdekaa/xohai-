import React from 'react'
import './AboutMe.css'

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa'
import {SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro, SiAdobelightroom} from 'react-icons/si'

const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Sadman Saquib"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 8011 255811"
        },
        {
            fieldName: "Whatsapp",
            fieldValue: "(+91) 8876 315857"
        },
        {
            fieldName: "Email",
            fieldValue: "sadmansaquib12@gmail.com"
        },
        {
            fieldName: "Instagram",
            fieldValue: "sadman_saquib"
        },
        {
            fieldName: "Address",
            fieldValue: "N.S. Road, ward no.4, Dhubri, Assam, PIN: 783301"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        }
    ]
}

const internshipExperiences = {
    // icon:,
    title: "Internship Experiences",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!",
    items: [
        {
            company: "NEEPCO AGgBPS",
            position: "Intern",
            designation: "Full-time",
            duration: "Summer 2023"
        },
        {
            company: "Byok",
            position: "Video-editing Intern",
            designation: "Part-Time",
            duration: "October 2023 - December 2023"
        }
    ]
}

const positionOfResponsibility = {
    icon: '/assets/send-white.png',
    title: 'Position Of Responsibilities',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!", 
    items: [
        {
            company: "Electra Society",
            position: "Technical Head",
            duration: "2023-2024"
        },
        {
            company: "Institute of Engineers India: Student's Chapter (Silchar)",
            position: "Design Head",
            duration: "2023-2024"
        },
        {
            company: "SriGen, E-Cell",
            position: "Video Editing co-Head",
            duration: "2023-2024"
        },
        {
            company: "Incandescence 2024, NIT Silchar",
            position: "Design Co-Head (Lead)",
            duration: "2024"
        },
        {
            company: "Tecnoesis 2024, NIT Silchar",
            position: "Design & Video-Editing Co-Head",
            duration: "2024"
        },
        {
            company: "Symphonits - Music Club, NIT Silchar",
            position: "Core Team Member",
            duration: "2024"
        },
        {
            company: "Posua 2023",
            position: "Video Editing Executive",
            duration: "2023"
        },
    ]
}

const education = {
    icon: '/assets/send-white.png',
    title: 'Position Of Responsibilities',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!", 
    items: [
        {
            institution: "S.P. English Medium High School, Dhubri",
            degree: "HSLC",
            percentage: "92%",
            Place: "Assam, India"
        },
        {
            institution: "S.P. Higher Secondary School, Dhubri",
            degree: "HSC",
            percentage: "89.2%",
            Place: "Assam, India"
        },
        {
            institution: "National Institute of Technology, Silchar",
            degree: "Bachelor of Technology - Electrical Engineering",
            percentage: "7.66",
            Place: "Assam, India"
        }
    ]
}

const skills = {
    title: "Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!",
    items : [
        {
            icon: <FaHtml5 />,
            name: "html 5" 
        },
        {
            icon: <FaCss3 />,
            name: "css 3" 
        },
        {
            icon: <FaJs />,
            name: "javacript" 
        },
        {
            icon: <FaReact />,
            name: "react,js" 
        },
        {
            icon: <FaNodeJs />,
            name: "node js" 
        },
        {
            icon: <SiAdobeillustrator />,
            name: "adobe illustrator" 
        },
        {
            icon: <SiAdobephotoshop />,
            name: "adobe photoshop" 
        },
        {
            icon: <SiAdobeaftereffects />,
            name: "after effects" 
        },
        {
            icon: <SiAdobepremierepro />,
            name: "adobe premiere pr" 
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@radix-ui/react-tooltip"
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <motion.div  initial = {{opacity:0}}  animate = {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl: py-0">
        <div className='container mx-auto'>
            <Tabs 
            defaultValue='education'
            className='flex flex-col cl: flex-row gap-[60px]'>
                <TabsList className='flex flex-col w-fill max-w-[380px] mx-auto xl:mx-0'>
                    <TabsTrigger>Education</TabsTrigger>
                    <TabsTrigger>Skills</TabsTrigger>
                    <TabsTrigger>Internship Experiences</TabsTrigger>
                    <TabsTrigger>Positions of Responsibility</TabsTrigger>
                    <TabsTrigger>About Me</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    </motion.div>
  )
}

export default AboutMe
