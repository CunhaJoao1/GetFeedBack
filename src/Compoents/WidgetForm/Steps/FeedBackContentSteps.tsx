import { ArrowLeft, Camera } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import { api } from '../../../lib/api'
import { CloseButton } from '../../CloseButton'
import { FeedBackType, feedbackTypes } from '../Index'
import Loading from '../Loading'
import ScreenShotButton from '../ScreenShotBotton'


type feedbackContentStepsProps ={
    feedbackType: FeedBackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;

}
export function FeedBackContentSteps(props: feedbackContentStepsProps) {
    const feedbackTypeInfo = feedbackTypes[props.feedbackType];
    const [screeshot, setScreenShot] = useState<string | null>(null)
    const [comment, setComment] = useState("")
    const [isFeedbackSending, setIsFeedbackSending] = useState(false)

   async function handleSubmitFeedback(event: FormEvent){
       setIsFeedbackSending(true)
        event.preventDefault()
        console.log({
            screeshot,
            comment,
        })
      /*   props.onFeedbackSent(); */

     await api.post('/feedbacks', {
          type: props.feedbackType,
          comment: comment,
          screeshot: screeshot,
      }).catch((error) =>{
          console.log(error)
      })
      setIsFeedbackSending(false)
      props.onFeedbackSent()
      
    }

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

        <form className='my-4 w-full' onSubmit={handleSubmitFeedback}>
        <textarea
            className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-tranparent scrollbar-thin' 
            placeholder='Conte com detalhes o que est?? acontecendo...'
            onChange={(event) =>setComment(event.target.value)}
        />
        <footer className='flex gap-2 mt-2'>
            <ScreenShotButton
                screenShot={screeshot}
                onScreenShotTook={setScreenShot}
            />
            <button
                type='submit'
                className='p-2 bg-brand-500 rounded-md border-transparent flex flex-1 w-full  justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:bg-brand-500'
                disabled={comment.length === 0 }
                onClick={()=>props.onFeedbackSent()}
            >
                {isFeedbackSending?<Loading/> :  'Enviar feedback'}
            </button>
        </footer>
    </form>

    </>
  )
}

