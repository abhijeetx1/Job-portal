import React, { useState } from 'react'
import dayjs from 'dayjs'

function JobCard(props) {
    // const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className='mx-4 md:mx-10 lg:mx-40 mb-4'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103 transition-transform duration-200'>
      <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                <p className='text-sm'>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <div className='flex flex-wrap items-center gap-2'>
                    {props.skills.map((skill,i) => (
                        <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black text-xs'>{skill}</p>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-center w-full md:w-auto mt-4 md:mt-0'>
            <p className='text-gray-500 text-sm'>Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
            <a href={props.job_link} target="_blank" rel="noopener noreferrer">
            <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-md text-sm md:px-10 md:py-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg ml-4'>
              Apply
            </button>
                            </a>
                
            </div>
        </div>
    </div>
  )
}

export default JobCard



