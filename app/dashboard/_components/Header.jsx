'use client'

import { UserButton } from '@clerk/nextjs'
import { BotIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {Pricing} from '../../pricing/page'

function Header() {

    const path = usePathname();
    const router = useRouter();

    useEffect(()=>{
        console.log(path)
    })

    const home = () =>{
      router.push('/')
    }
    
    const navigateToPricing = () =>{
      router.push('/pricing')
    }
    const navigateToDashboard = () =>{
      router.push('/dashboard')
    }
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md relative z-10' style={{backgroundImage:'url(/grid.svg)'}}>
      sche
      <ul className='hidden md:flex gap-6'>

        <li className={`hover:text-purple-400 hover:font-bold transition-all cursor-pointer ${path == '/dashboard' && 'text-purple-400 font-bold'}`} onClick={navigateToDashboard}>Dashboard</li>
        {/* <li className={`hover:text-purple-400 hover:font-bold transition-all cursor-pointer ${path == '/question' && 'text-purple-400 font-bold'}`}>Question</li> */}
        <li className={`hover:text-purple-400 hover:font-bold transition-all cursor-pointer ${path == '/pricing' && 'text-purple-400 font-bold'}`} onClick={navigateToPricing}>Upgrade</li>
        {/* <li className={`hover:text-purple-400 hover:font-bold transition-all cursor-pointer ${path == '/working' && 'text-purple-400 font-bold'}`}>How it Works?</li> */}
      </ul>

      <UserButton/>
    </div>
  )
}

export default Header
