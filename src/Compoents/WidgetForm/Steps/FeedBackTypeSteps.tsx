import React from 'react'
import { CloseButton } from '../../CloseButton';
import { FeedBackType, feedbackTypes } from '../Index'




type FeedBackProps = {
    oncFeedbackTypeChanged: (type: FeedBackType) => void;

}
export default function FeedBackTypeSteps({oncFeedbackTypeChanged}: FeedBackProps) {
  return (
      <>
        <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton/>
        </header>   
        <main className='flex py-8 gap-2 w-full'>
            {Object.entries(feedbackTypes).map(([key, value]) =>{
                return (
                    <button key={key}
                    className=' flex flex-col items-center bg-zinc-800 rounded-lg py-5 w-24 flex-1 gap-2 border-2 border-transparent hover:border-brand-500 focus:to-brand-500 focus:outline-none'
                    onClick={()=>oncFeedbackTypeChanged(key as FeedBackType)}
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                       <span>{value.title}</span>
                    </button>
                )
            })}
        </main>
    </>
  )
}
