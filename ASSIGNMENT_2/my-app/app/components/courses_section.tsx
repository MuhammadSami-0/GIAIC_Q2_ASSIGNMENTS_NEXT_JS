import React from 'react'
import Image from 'next/image'
import "../style/courses.css"

export default function Courses_section() {
  return (

    <div className='courses_section_container'>
        <div className="course_heading"><h1>COURSES</h1></div>
        <div className='courses_img_div'>
            <div className='img_div_1'>
                <div className='img_section'>
                    <div className="img">
                    <Image src={"/images/apm.png"} alt='class_pic' height={250} width={250}/>
                    </div>
                    <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugit!</p></div>
                </div>
                <div className='img_section'>
                    <div className="img">
                    <Image src={"/images/apm.png"} alt='class_pic' height={250} width={250}/>
                    </div>
                    <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugit!</p></div>
                </div>
                <div className='img_section'>
                    <div className="img">
                    <Image src={"/images/apm.png"} alt='class_pic' height={250} width={250}/>
                    </div>
                    <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugit!</p></div>
                </div>
            </div>
            <div className='img_div_2'>
                <div className='img_section'>
                    <div className="img">
                    <Image src={"/images/apm.png"} alt='class_pic' height={250} width={250}/>
                    </div>
                    <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugit!</p></div>
                </div>
                <div className='img_section'>
                    <div className="img">
                    <Image src={"/images/apm.png"} alt='class_pic' height={250} width={250}/>
                    </div>
                    <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugit!</p></div>
                </div>
                <div className='img_section'>
                    <div className="img">
                    <Image src={"/images/apm.png"} alt='class_pic' height={250} width={250}/>
                    </div>
                    <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugit!</p></div>
                </div>
            </div>
        </div>
    </div>
        
    
  )
}
