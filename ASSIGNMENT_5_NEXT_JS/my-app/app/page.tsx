import React from 'react'

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  )
  
}

function Header(){
  return(
    <header className='flex justify-between border-solid border-2 border-black bg-amber-700	' >
      <div><h1 >purify</h1></div>
      <input type="text" name="search" id="" placeholder='search' />
      <ul>
        <li>heart</li>
        <li>cart</li>
        <li>person</li>
      </ul>
    </header>

  )
 
}

