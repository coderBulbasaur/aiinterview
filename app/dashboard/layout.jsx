'use client'
import React, { useEffect, useState } from 'react'
import Header from './_components/Header'
import Particles from '../../components/magicui/particles'
import { useTheme } from "next-themes";


function DashboardLayout({children}) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div > 
      <Header/>
      <Particles
      className="absolute inset-0 z-0"
      quantity={100}
      ease={80}
      color={color}
      refresh />
      <div className='mx-5 md:mx-20 lg:mx-36 relative'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
