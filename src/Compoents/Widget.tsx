import React, { useState } from 'react'
import {ChatTeardropDots} from 'phosphor-react'
import {Popover} from "@headlessui/react"
import { WidgetForm } from './WidgetForm';
export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <Popover className='absolute bottom-5 right-5'>
       <Popover.Panel> <WidgetForm/> </Popover.Panel>
        <Popover.Button className='bg-brand-500 text-white px-3 h-12 rounded-full flex items-center group ' >
        <ChatTeardropDots className='w-6 h-6'/>

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500'>
          <span>Feedback</span>
        </span>
    </Popover.Button>
    </Popover>
    
  )
}
