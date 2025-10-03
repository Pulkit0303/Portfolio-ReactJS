import React from 'react'
import {GitHub,Figma} from '../assets'

function ProjectCard({Company, date, imgSrc, description,Position}) {
  return (
      <div className='flex flex-col px-8 py-2 text-start gap-8'>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row gap-4 items-center text-5xl'>
          <img className='w-16 h-16 bg-black rounded-lg' src={imgSrc}/>
          <div className='flex flex-col gap-1'>
          <p className='text-[1.3vw]'>{Company}</p>
          <p className='text-[0.8vw] font-mono'>{Position}</p>
          </div>
        </div>
        <p className='w-fit h-fit font-mono text-xl font-semibold p-4 rounded-full bg-black/20'>{date}</p>
        </div>
        <p className='text-[1vw] font-sans'>{description}</p>
      </div>
  )
}

export default ProjectCard