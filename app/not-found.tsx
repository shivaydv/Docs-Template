import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex w-screen h-[100dvh] justify-center items-center gap-2 flex-col '>
      <h1 className='text-4xl font-bold'>Page Not Found</h1>
      <p className='text-muted-foreground '>You just hit a route that doesn&#39;t exist.</p>
      <Link className='text-foreground font-semibold underline ' href="/">Go home</Link>
    </div>
  )
}

export default NotFound