import React from 'react'
import Image from 'next/image'
import "../style/hero.css"


export default function Hero() {
  return (
  <div className='container1'>
    <div className='heading'>
      <h1>ABOUT US</h1>
    </div>
    <div className='hero_container'>
        <div className='img_div'>
          <div className='img'>
          <Image src={"/images/apm.png"} alt='class_pic' height={375} width={375}/>
          </div>
           
        </div>
        <div className='text_div'>

          <div className='text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti quasi quas vero natus quibusdam perferendis? Similique, quos, voluptates id unde, sequi esse aliquam odio veniam aspernatur repellat tenetur minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur officia nulla dolore quibusdam, rerum deserunt fugit dolorum omnis ad aliquid asperiores cumque totam accusantium unde recusandae reiciendis porro nesciunt?</p>
          </div>
           
        </div>
    </div>
  </div>
    
  )
}

