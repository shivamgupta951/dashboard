import React from 'react'
import { AiTwotoneHeart, AiTwotoneRocket } from 'react-icons/ai'
import TestimonialsSection from './TestimonialsSection'

const Review = () => {
  return (
    <div id='review' className='flex justify-center items-center min-h-[700px] bg-gradient-to-bl from-[#4d2707db] via-black to-[#050219] flex-col space-y-8 py-4'>
      <div className='text-sm flex text-purple-300 text-center'>3,241 People Loved our Amazing Service!<AiTwotoneRocket className='text-xl text-green-500'/> <AiTwotoneHeart className='text-xl'/></div>
      <div className='text-4xl bg-clip-text text-transparent text-center font-bold bg-gradient-to-r from-primary to-secondary '>See what our awesome clients have to say</div>
      <TestimonialsSection/>
    </div>
  )
}

export default Review
