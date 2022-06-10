import React, { useState } from 'react'
import { CloseButton } from './CloseButton'
import  bugIcon from "../Assets/bug.svg"
import  ideaIcon from "../Assets/idea.svg"
import ThoughtIcon from "../Assets/thought.svg"


const feedbackTypes = {
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
type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto'>
        <header>
            <span className='text-xl leading-6'>Deixe seu feedback</span>
            <CloseButton/>
        </header>

        <main className='flex py-8 gap-2 w-full'>
            {Object.entries(feedbackTypes).map(([key, value]) =>{
                return (
                    <button key={key}
                    className=' flex flex-col items-center bg-zinc-800 rounded-lg py-5 w-24 flex-1 gap-2 border-2 border-transparent hover:border-brand-500 focus:to-brand-500 focus:outline-none'
                    onClick={()=>setFeedbackType(key as FeedBackType)}
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                       <span>{value.title}</span>
                    </button>
                )
            })}
        </main>

        <footer className='text-neutral-400'>
            Feito com 💙 por <a href="" className='underline underline-offset-2'>Victor Cunha</a> 
        </footer>
    </div>
  )
}
