import React from 'react'
import data from '@/lib/data.json'
import Link from 'next/link'
const slider = () => {
  return (
    <ul className='flex gap-2'>
        {data.crew.map((person, i) => 
        <li><Link href={`/crew/${i}`} className='bg-black flex w-4 h-4 rounded-full'></Link></li>
        )}
    </ul>
  )
}

export default slider