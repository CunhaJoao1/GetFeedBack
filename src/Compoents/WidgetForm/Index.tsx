import React, { useState } from 'react'
import  bugIcon from "../../Assets/bug.svg"
import  ideaIcon from "../../Assets/idea.svg"
import ThoughtIcon from "../../Assets/thought.svg"
import FeedBackTypeSteps from './Steps/FeedBackTypeSteps'
import { FeedBackContentSteps } from './Steps/FeedBackContentSteps'
import { FeedBackSuccesStep } from './Steps/FeedBackSuccesStep'


export const feedbackTypes = {
    BUG:{
        title: "Problema",
        image:{
            source: bugIcon,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA:{
        title: "Ideia",
        image:{
            source: ideaIcon,
            alt: 'Imagem de um inseto',
    },
},
    THOUGHT:{
        title: "Outro",
        image:{
            source: ThoughtIcon,
            alt: 'Imagem de um inseto',
            },
    },
};
export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)
   const [feedbackSent, setFeedbackSent] = useState(false)
   function handleRestartFeedback(){
       setFeedbackSent(false)
       setFeedbackType(null)
   }
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto'>
       {/*  {feedbackSent?( <FeedBackSuccesStep onFeedbackRestartRequested={handleRestartFeedback}/>
        
        ):( */}
            <>
                {!feedbackType? (
            <FeedBackTypeSteps
            oncFeedbackTypeChanged = {setFeedbackType}
            />
            ): (<FeedBackContentSteps 
            feedbackType = {feedbackType} 
            onFeedbackRestartRequested = {handleRestartFeedback}
            onFeedbackSent = {()=> setFeedbackSent(true)}
            />
            )}
            </>
        {/*) }    */}    
        

        <footer className='text-neutral-400'>
            Feito com 💙 por <a href="" className='underline underline-offset-2'>Victor Cunha</a> 
        </footer>
    </div>
  )
}
