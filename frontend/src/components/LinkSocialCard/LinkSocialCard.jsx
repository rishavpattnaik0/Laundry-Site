import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const LinkSocialCard = () => {
  return (
    <div className='w-full h-full border shadow rounded-lg px-3'>
        <div className='flex justify-start p-3'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" className='max-w-[30px] w-[50px]'/>
        </div>
        <div className='breaker h-[2px] w-full bg-[black]'></div>
        <div className='card-data-holder'>
            <div>Add Yor Github Accounf here</div>
            <div className='flex justify-end p-3'>
                <AiOutlinePlusCircle className='text-3xl'/>
            </div>
        </div>

    </div>
  )
}

export default LinkSocialCard