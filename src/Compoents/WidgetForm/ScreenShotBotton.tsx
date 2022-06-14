import { Camera, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import html2canvas from 'html2canvas'
import Loading from './Loading'


type screenshotProps = {
    screenShot: string | null;
    onScreenShotTook: (screenShot: string | null) => void;

}
export default function ScreenShotButton(props: screenshotProps) {
    const [isTakingScreenShot, SetIsTakingScreenShot] = useState(false)
    async function handleTakeScreenShot(){
        SetIsTakingScreenShot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')

        props.onScreenShotTook(base64image)
        SetIsTakingScreenShot(false)

    }
    if(props.screenShot){
        return (
            <button
                type='button'
                className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
                onClick={()=>props.onScreenShotTook(null)}
                style={{
                    backgroundImage: `url(${props.screenShot})`
                }}
            >
                <Trash weight='fill'/>
            </button>
        )
    }
  return (
    <button 
        type='button'
        className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
        onClick={handleTakeScreenShot}
    >
        {isTakingScreenShot? <Loading /> : <Camera className='w-6 h-6'/>}
    </button>
  )
}
