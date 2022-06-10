import { ArrowLeft } from 'phosphor-react'
import React from 'react'
import { CloseButton } from '../../CloseButton'
import { FeedBackType, feedbackTypes } from '../Index'


type feedbackContentStepsProps ={
    feedbackType: FeedBackType;
    onFeedbackRestartRequested: () => void
}
export function FeedBackContentSteps(props: feedbackContentStepsProps) {
    const feedbackTypeInfo = feedbackTypes[props.feedbackType];

  return (
    <>
        <header >
            <button type='button' className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
            onClick={props.onFeedbackRestartRequested}
            >
                <ArrowLeft weight='bold' className='w-4 h-4'/>
            </button>

            <span className='text-xl leading-6 flex items-center gap-2'>
            <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                {feedbackTypeInfo.title}
                </span>
            <CloseButton/>
        </header> 

        <main className='flex py-8 gap-2 w-full'>

        </main>
    </>
  )
}

