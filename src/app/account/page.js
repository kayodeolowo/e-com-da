"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'



function Account() {
  const navigate = useRouter(); 
    return (
      <div className='flex gap-10'>
        
      <Link href='/account'>
      whats new klfnvlkfsnvkldfmnvkldfmbvlmvl;dkf
      <div className='bg-black w-[250px] h-[400px]'>
        nvfdjnvkdfsnvkdsn
      </div>
      </Link>

      <button onClick={() => navigate.back()} className='bg-black text-white py-2 px-5' >
        back
        </button>

      </div>
    )
  }


export default Account

