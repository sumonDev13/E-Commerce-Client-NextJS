import React from 'react'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./navbar/page'))

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default page