import React from 'react'
import Image from 'next/image'
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";



export default function Home() {
  return (
    <div>
    <Header />
    <NavBar />
    <HeroSection/>
    <Trust />
    <CoursesCat />
    <Achievement_section/>
    <Courses/>
    <Team/>
    <Customer/>
    <Footer/>
    </div>
    
  )
}

function Header(){
  return(
    <div className='flex justify-between border-b-2 border-b-black py-4 px-16 bg-gray-100 w-xl max-mob:hidden'>
      <div className='flex gap-3'>
        <div>
          <span>Phone Number : 394 695 294 445</span>
        </div>
        <div className='border-l-2 border-foreground pl-3'>
          <span>Email:info@ddsgnr.com</span>
        </div>
      </div>
        <div className='flex gap-2'>
          <FaFacebookF size={24} />
          <FaInstagram  size={24}/>
          <FaTwitter size={24}/>
          <FaLinkedin size={24}/>
        </div>
    </div>
  )
}

function NavBar(){
  return(
    <div className='flex items-center justify-around bg-gray-100 mt-2 h-16 w-xl max-mob:w-sm max-mob:justify-between max-mob:px-4' >
      <div>
      <Image src={"/logo.png"} alt='logo' width={120} height={120}/>
      </div>

      <div className='max-mob:hidden'>
        <ul className='flex items-center gap-10 pl-5 bg-white'>
          <li className='cursor-pointer duration-300 ease-in hover:border-b hover:border-gray-400'>Home</li>
          <li className='cursor-pointer duration-300 ease-in hover:border-b hover:border-gray-400'>Courses</li>
          <li className='cursor-pointer duration-300 ease-in hover:border-b hover:border-gray-400'>Services</li>
          <li className='cursor-pointer duration-300 ease-in hover:border-b hover:border-gray-400'>Achievement</li>
          <li className='cursor-pointer duration-300 ease-in hover:border-b hover:border-gray-400'>About Us</li>
          <li className='cursor-pointer duration-300 ease-in hover:border-b hover:border-gray-400'>Testimonial</li>
          <button className='cursor-pointer border-2 border-black rounded h-10 w-20 duration-100 ease-in hover:bg-black hover:text-white'>Login</button>
          <button className='cursor-pointer bg-black border-2 border-black rounded h-10 w-20 text-white duration-100 ease-in hover:bg-white hover:text-black'>Sign Up</button>
        </ul>
      </div>
      <IoMenuOutline size={24} className='hidden max-mob:block' />

    </div>
  )
}

function HeroSection(){
  return(
    <div className='flex justify-between items-center mt-2 h-lg w-xl max-mob:w-sm max-mob:flex-col max-mob:gap-12 max-mob:pt-10 '>
      <div>
        <div className='relative left-20 max-mob:static'>
          <h1 className='py-1 text-5xl font-bold '>Learn new skills</h1>
          <h1 className='pb-4 text-5xl font-bold '>Online with ease</h1>
          <p>Discover a wide range of courses covering a variety of</p>
          <p className='pb-4'>subjects, taught by expert instructors</p>
          <div className='flex gap-2'>
          <button className='bg-black text-white cursor-pointer border-2 border-black rounded h-10 w-40 duration-100 ease-in hover:bg-white hover:text-black'>Start learning now</button>
          <button className='cursor-pointer border-2 border-black rounded h-10 w-40 duration-100 ease-in hover:bg-black hover:text-white'>Explore Courses</button>
          </div>
        </div>
      </div>
      <div className='h-lg  overflow-hidden rounded'>
      <Image src={"/lady.png"} alt='lady' height={640} width={700}/>
      </div>
    </div>
  )
}

function Trust(){
  return(
    <div className='flex items-center justify-around h-56 w-xl bg-gray-100 max-mob:w-sm max-mob:flex-col max-mob:overflow-hidden max-mob:pt-6'>
      <div>
      <h1 className='text-2xl font-bold'>Trusted by 2000+ companies</h1>
      <h1 className='text-2xl font-bold'>worldwide</h1>
      </div>
      <div className='h-10 flex gap-10'>
        <Image src={"/Airbnb Logo.png"} alt='logo' width={120} height={38}/>
        <Image src={"/Airbnb Logo2.png"} alt='logo' width={120} height={38}/>
        <Image src={"/Airbnb Logo3.png"} alt='logo' width={123} height={38}/>
        <Image src={"/Airbnb Logo4.png"} alt='logo' width={123} height={38}/>
        <Image src={"/Airbnb Logo5.png"} alt='logo' width={123} height={38} className='max-mob:hidden'/>
        <Image src={"/Airbnb Logo6.png"} alt='logo' width={123} height={38} className='max-mob:hidden'/>
      </div>
    </div>
  )
}

function CoursesCat(){
  return(
    <div className='h-xl w-xl flex flex-col items-center pt-28 max-mob:w-sm'>
      <div className='flex flex-col items-center'>
      <h1 className='text-5xl font-bold pb-10 max-mob:pb-0 max-mob:text-4xl'>Explore Courses <span className='max-mob:hidden'>By Category</span> </h1>
      <h1 className='text-5xl font-bold pb-10 text-4xl hidden max-mob:block'>By Category</h1>

      <p className='pb-24 max-mob:pb-0'>Discover a wide range of courses covering a variety of <span className='max-mob:hidden'>subjects, taught by expert instructors</span></p>
      <p className='pb-24 hidden max-mob:block'>taught by expert instructors</p>

      </div>
      

      {/* first row */}
      <div className='flex justify-around w-full pb-16 max-mob:flex-col max-mob:items-center max-mob:gap-16'>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg max-mob:w-96'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Design & Development</p>
          <p>50+ courses available</p>
          </div>
        </div>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg max-mob:w-96'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Marketing</p>
          <p>50+ courses available</p>
          </div>
        </div>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg max-mob:w-96'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Development</p>
          <p>50+ courses available</p>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className='flex justify-around w-full justify-around pb-16 max-mob:hidden'>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Communication</p>
          <p>50+ courses available</p>
          </div>
        </div>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Digital Marketing</p>
          <p>50+ courses available</p>
          </div>
        </div>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Self Development</p>
          <p>50+ courses available</p>
          </div>
        </div>
      </div>

      {/* Third row */}
      <div className='flex justify-around w-full justify-around pb-16 max-mob:hidden'>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Business</p>
          <p>50+ courses available</p>
          </div>
        </div>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Finance</p>
          <p>50+ courses available</p>
          </div>
        </div>
        <div className='bg-gray-100 w-3/12 h-32 rounded flex justify-center items-center gap-7 duration-100 ease-in hover:shadow-lg'>
          <div className='bg-white w-24 h-24 flex items-center justify-center rounded   '>
          <Image src={"/pen-2.png"} alt='#' width={32} height={32}/>
          </div>
          <div>
          <p className='font-bold'>Consulting</p>
          <p>50+ courses available</p>
          </div>
        </div>
      </div>
      <button className='cursor-pointer border-2 border-black rounded h-12 w-40 duration-100 ease-in hover:bg-black hover:text-white'>View All Courses</button>
    </div>
  )
}

function Achievement_section(){
  return(
    <div className=' pt-16 h-96 flex flex-col w-xl items-center max-mob:w-sm max-mob:h-ch'>
      <h1 className='py-1 text-5xl font-bold pb-10 max-mob:text-4xl '>Our Achievements</h1>
      <p className='max-mob:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis a vero quae debitis, facere consectetur fuga aut? Consequuntur, ut.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className='flex w-full justify-around pt-12 max-mob:flex-col max-mob:gap-10 '>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl font-bold max-mob:text-4xl'>+200</h1>
          <p>Courses</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl font-bold max-mob:text-4xl'>50k</h1>
          <p>Mentors</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl font-bold max-mob:text-4xl'>370k</h1>
          <p>Students</p>
        </div>
        <div className='flex flex-col items-center'> 
          <h1 className='text-5xl font-bold max-mob:text-4xl'>100+</h1>
          <p>Recognition</p>
        </div>

      </div>
    </div>
  )
}

function Courses(){
  return(
    <div className='flex flex-col w-xl h-xxl items-center pt-44 max-mob:w-sm max-mob:h-vl'>
      <h1 className='text-5xl font-bold pb-6 '>Courses</h1>
      <p>Your Ultimate Guide To Learning</p>
      <ul className='flex gap-4 pt-14'>
        <li className='cursor-pointer duration-200 ease-in hover:border-b hover:border-black'>Popular</li>
        <li className='cursor-pointer duration-200 ease-in hover:border-b hover:border-black'>Recommended</li>
        <li className='cursor-pointer duration-200 ease-in hover:border-b hover:border-black'>Best Price</li>
      </ul>

      {/* first row */}
      <div className='w-full flex justify-around pt-20 max-mob:flex-col max-mob:items-center max-mob:gap-10 max-mob:pb-16'>
        <div className='h-ch w-96 border-2 bg-gray-100 duration-100 ease-in hover:shadow-2xl'>
          <div>
            <Image src={'/c_im1.png'} alt='pic' height={300} width={416}/>
          </div>
          <div className='flex justify-between px-3 py-4'>
            <p className='font-bold'>Design</p>
            <div className='flex justify-center'><CiStar color='gray' size={20}/><span className='font-bold'>5.0</span></div>
          </div>
          <h1 className='text-2xl font-bold pb-6 pl-2 '>UX/UI Design 201</h1>
          <p className='text-sm pr-1 pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet eum ut aliquid.</p>
          <div className='pt-5 flex items-center gap-8 pl-2'>
          <button className='cursor-pointer border-2 border-black rounded h-10 w-28 duration-100 ease-in hover:bg-black hover:text-white'>Enroll Now</button>
          <span>400$</span>
          </div>
        </div>
        <div className='h-ch w-96 border-2 bg-gray-100 duration-100 ease-in hover:shadow-2xl'>
          <div>
            <Image src={'/c_im2.png'} alt='pic' height={300} width={416}/>
          </div>
          <div className='flex justify-between px-3 py-4'>
            <p className='font-bold'>Prgramming</p>
            <div className='flex justify-center'><CiStar color='gray' size={20}/><span className='font-bold'>5.0</span></div>
          </div>
          <h1 className='text-2xl font-bold pb-6 pl-2 '>Introduction To Python</h1>
          <p className='text-sm pr-1 pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet eum ut aliquid.</p>
          <div className='pt-5 flex items-center gap-8 pl-2'>
          <button className='cursor-pointer border-2 border-black rounded h-10 w-28 duration-100 ease-in hover:bg-black hover:text-white'>Enroll Now</button>
          <span>400$</span>
          </div>
        </div>
        <div className='h-ch w-96 border-2 bg-gray-100 duration-100 ease-in hover:shadow-2xl'>
          <div>
            <Image src={'/c_im3.png'} alt='pic' height={300} width={416}/>
          </div>
          <div className='flex justify-between px-3 py-4'>
            <p className='font-bold'>Business</p>
            <div className='flex justify-center'><CiStar color='gray' size={20}/><span className='font-bold'>5.0</span></div>
          </div>
          <h1 className='text-2xl font-bold pb-6 pl-2'>Data Analysis For Beginners</h1>
          <p className='text-sm pr-1 pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet eum ut aliquid.</p>
          <div className='pt-5 flex items-center gap-8 pl-2'>
          <button className='cursor-pointer border-2 border-black rounded h-10 w-28 duration-100 ease-in hover:bg-black hover:text-white'>Enroll Now</button>
          <span>400$</span>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className='pb-16 w-full flex justify-around pt-20 max-mob:hidden'>
        <div className='h-ch w-96 border-2 bg-gray-100 duration-100 ease-in hover:shadow-2xl'>
          <div>
            <Image src={'/c_im4.png'} alt='pic' height={300} width={416}/>
          </div>
          <div className='flex justify-between px-3 py-4'>
            <p className='font-bold'>Art</p>
            <div className='flex justify-center'><CiStar color='gray' size={20}/><span className='font-bold'>5.0</span></div>
          </div>
          <h1 className='text-2xl font-bold pb-6 pl-2'>Art Specialization</h1>
          <p className='text-sm pr-1 pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet eum ut aliquid.</p>
          <div className='pt-5 flex items-center gap-8 pl-2'>
          <button className='cursor-pointer border-2 border-black rounded h-10 w-28 duration-100 ease-in hover:bg-black hover:text-white'>Enroll Now</button>
          <span>400$</span>
          </div>
        </div>
        <div className='h-ch w-96 border-2 bg-gray-100 duration-100 ease-in hover:shadow-2xl'>
          <div>
            <Image src={'/c_im5.png'} alt='pic' height={300} width={416}/>
          </div>
          <div className='flex justify-between px-3 py-4'>
            <p className='font-bold'>Law</p>
            <div className='flex justify-center'><CiStar color='gray' size={20}/><span className='font-bold'>5.0</span></div>
          </div>
          <h1 className='text-2xl font-bold pb-6 pl-2'>Rule Of Law</h1>
          <p className='text-sm pr-1 pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet eum ut aliquid.</p>
          <div className='pt-5 flex items-center gap-8 pl-2'>
          <button className='cursor-pointer border-2 border-black rounded h-10 w-28 duration-100 ease-in hover:bg-black hover:text-white'>Enroll Now</button>
          <span>400$</span>
          </div>
        </div>
        <div className='h-ch w-96 border-2 bg-gray-100 duration-100 ease-in hover:shadow-2xl'>
          <div>
            <Image src={'/c_im6.png'} alt='pic' height={300} width={416}/>
          </div>
          <div className='flex justify-between px-3 py-4'>
            <p className='font-bold'>Tech</p>
            <div className='flex justify-center'><CiStar color='gray' size={20}/><span className='font-bold'>5.0</span></div>
          </div>
          <h1 className='text-2xl font-bold pb-6 pl-2  '>Introduction To Webflow</h1>
          <p className='text-sm pr-1 pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet eum ut aliquid.</p>
          <div className='pt-5 flex items-center gap-8 pl-2'>
          <button className='cursor-pointer border-2 border-black rounded h-10 w-28 duration-100 ease-in hover:bg-black hover:text-white'>Enroll Now</button>
          <span>400$</span>
          </div>
        </div>
      </div>
      <button className='cursor-pointer border-2 border-black rounded h-12 w-40 duration-100 ease-in hover:bg-black hover:text-white'>View All Courses</button>

    </div>
  )
}

function Team(){
  return(
    <div className='h-lg w-xl pt-28 mt-16 flex flex-col items-center bg-gray-100 max-mob:w-sm max-mob:h-xl'>
      <h1 className='pb-8 text-5xl font-bold '>Our Team</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      {/* first row */}
      <div className='flex justify-around pt-20 max-mob:flex-col max-mob:gap-6 max-mob:pb-10'>
        <div className='h-52 w-96 flex flex-col items-center'>
          <div className='flex pb-6'><Image src={"/team1.png"} alt='#' width={80} height={80}/></div>
          <p className='font-bold'>James Nduku</p>
          <p className='pb-6'>Marketing Manager</p>
          <div className='flex gap-3'>
            <FaFacebookF size={16} />
            <FaTwitter size={16}/>
            <FaLinkedin size={16}/>
          </div>
        </div>
        <div className='h-52 w-96 flex flex-col items-center'>
          <div className='flex pb-6'><Image src={"/team2.png"} alt='#' width={80} height={80}/></div>
          <p className='font-bold'>Joseph Munyambu</p>
          <p className='pb-6'>Nursing Assisitant</p>
          <div className='flex gap-3'>
            <FaFacebookF size={16} />
            <FaTwitter size={16}/>
            <FaLinkedin size={16}/>
          </div>
        </div>
        <div className='h-52 w-96 flex flex-col items-center'>
          <div className='flex pb-6'><Image src={"/team3.png"} alt='#' width={80} height={80}/></div>
          <p className='font-bold'>Joseph Ngumbau</p>
          <p className='pb-6'>Medical Assistant</p>
          <div className='flex gap-3'>
            <FaFacebookF size={16} />
            <FaTwitter size={16}/>
            <FaLinkedin size={16}/>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className='flex justify-around pt-20 max-mob:hidden '>
        <div className='h-52 w-96 flex flex-col items-center'>
          <div className='flex pb-6'><Image src={"/team4.png"} alt='#' width={80} height={80}/></div>
          <p className='font-bold'>Erick Kipkemboi</p>
          <p className='pb-6'>Web Designer</p>
          <div className='flex gap-3'>
            <FaFacebookF size={16} />
            <FaTwitter size={16}/>
            <FaLinkedin size={16}/>
          </div>
        </div>
        <div className='h-52 w-96 flex flex-col items-center'>
          <div className='flex pb-6'><Image src={"/team5.png"} alt='#' width={80} height={80}/></div>
          <p className='font-bold'>Stephen Kerubo</p>
          <p className='pb-6'>President of sales</p>
          <div className='flex gap-3'>
            <FaFacebookF size={16} />
            <FaTwitter size={16}/>
            <FaLinkedin size={16}/>
          </div>
        </div>
        <div className='h-52 w-96 flex flex-col items-center'>
          <div className='flex pb-6'><Image src={"/team6.png"} alt='#' width={80} height={80}/></div>
          <p className='font-bold'>John Leboo</p>
          <p className='pb-6'>Dog Trainer</p>
          <div className='flex gap-3'>
            <FaFacebookF size={16} />
            <FaTwitter size={16}/>
            <FaLinkedin size={16}/>
          </div>
        </div>
      </div>
      <button className='cursor-pointer border-2 border-black rounded px-5 py-2 duration-100 ease-in hover:bg-black hover:text-white hidden max-mob:block'>View All</button>

    </div>
  )
}

function Customer(){
  return(
  <div className='bg-gray-100 pt-36 h-lg w-xl max-mob:w-sm max-mob:bg-white max-mob:items-center '>
    <div className='flex flex-col max-mob:items-center max-mob:relative max-mob:right-3'>
     <h1 className='pb-4 text-5xl font-bold pl-6 max-mob:text-4xl'>Customer Testimonials</h1>
     <p className='pb-20 pl-6'>Lorem ipsum dolor sit, amet consectetur . <span className='max-mob:hidden'>adipisicing elit  Architecto, alias!</span></p>

    </div>
     
    <div className='flex justify-around'>
    <div className='w-96 h-80 border-2 border-black p-7'>
      <div className='flex pb-5'>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
      </div>
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe ex doloribus amet nihil mollitia consequuntur aperiam quisquam. Incidunt, animi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi ut temporibus, repudiandae aliquid nemo."</p>
      <div className='flex items-center gap-3 pt-3'>
        <div className='rounded-full overflow-hidden'><Image src={"/team3.png"} alt='#' width={56} height={56}/></div>
        <div>
          <p className='font-bold'>James Nduku</p>
          <p>Software Developer</p>
        </div>
      </div>
     </div>
     <div className='w-96 h-80 border-2 border-black p-7 max-mob:hidden'>
      <div className='flex pb-5'>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
      </div>
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe ex doloribus amet nihil mollitia consequuntur aperiam quisquam. Incidunt, animi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi ut temporibus, repudiandae aliquid nemo."</p>
      <div className='flex items-center gap-3 pt-3'>
        <div className='rounded-full overflow-hidden'><Image src={"/team2.png"} alt='#' width={56} height={56}/></div>
        <div>
          <p className='font-bold'>Stephen Kerubo</p>
          <p>UI/UX designer</p>
        </div>
      </div>
     </div>
     <div className='w-96 h-80 border-2 border-black p-7 max-mob:hidden'>
      <div className='flex pb-5'>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
        <IoStarSharp size={24}/>
      </div>
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe ex doloribus amet nihil mollitia consequuntur aperiam quisquam. Incidunt, animi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi ut temporibus, repudiandae aliquid nemo."</p>
      <div className='flex items-center gap-3 pt-3'>
        <div className='rounded-full overflow-hidden'><Image src={"/team5.png"} alt='#' width={56} height={56}/></div>
        <div>
          <p className='font-bold'>Chris Bentana</p>
          <p>Front-End Developer</p>
        </div>
      </div>
     </div>
    </div>

    <div className='flex justify-between items-center pt-12'>
      <div className='flex relative left-12'>
        <HiDotsHorizontal size={40} color='gray'/>
        <HiDotsHorizontal size={40} color='gray'/>
        </div>
        <div className='flex justify-end relative right-12'>
        <FaRegArrowAltCircleLeft size={40} color='gray'/>
        <FaRegArrowAltCircleRight size={40} color='gray' />
      </div>
    </div>
  </div>
  )
}

function Footer(){
  return(
    <div className='h-lg w-xl max-mob:w-sm'>
      <div className='pt-28 pr-20 pl-20 flex flex-col gap-24 max-mob:pr-5 max-mob:pl-5 max-mob:gap-10 max-mob:items-center'>

        <div className='flex max-mob:flex-col max-mob:w-full max-mob:items-center'>
          <div className='flex flex-col w-3/4 max-mob:items-center max-mob:gap-2'>
            <p className='font-bold'>Subscribe To Our Newsletter</p>
            <p className='max-mob:pb-6'>Lorem ipsum dolor sit, amet consectetur. <span className='max-mob:hidden'>adipisicing elit Unde, odio!</span> </p>
          </div>
          <div className='flex flex-col gap-2 pr-6 max-mob:pr-0 max-mob:pb-2'>
            <input className='border-2 border-black rounded h-12 pl-4 max-mob:w-96 max-mob:' type="text" name='text' placeholder='Email' />
            <p className='text-xs max-mob:hidden'>By subscribing you agree to our privacy policy</p>
          </div>
          <div className='flex flex-col items-center gap-3'>
          <button className='cursor-pointer border-2 border-black rounded h-12 w-36 duration-100 ease-in hover:bg-black hover:text-white max-mob:w-96'>Subscribe</button>
          <p className='text-xs hidden  max-mob:block '>By subscribing you agree to our privacy policy</p>

          </div>
        </div>

        <div className='h-80 flex h-56 justify-around gap-36 border-b-2 border-black max-mob:flex-col max-mob:items-center max-mob:h-llg max-mob:gap-2 max-mob:w-96'>
          <div><Image src={"/logo.png"} alt='logo' width={250} height={40} className='max-mob:w-52 max-mob:relative max-mob:right-5'/></div>
          <div className='flex flex-col gap-4 max-mob:items-center '>
            <p className='font-extrabold pb-2'>Courses</p>
            <p>Business</p>
            <p>Development</p>
            <p>Technology</p>
            <p>Design</p>
            <p>Programming</p>
          </div>
          <div className='flex flex-col gap-4 max-mob:items-center'>
            <p className='font-extrabold pb-2'>Resources</p>
            <p>Career</p>
            <p>Resume</p>
            <p>Learning</p>
            <p>Interview Preparation</p>
            <p>Jobs</p>
          </div>
          <div className='flex flex-col gap-4 max-mob:items-center'>
            <p className='font-extrabold pb-2'>About Us</p>
            <p>Contact</p>
            <p>Help/Support</p>
            <p>FAQ</p>
            <p>Terms and Conditions</p>
            <p>Partners</p>
          </div>
        </div>

        <div className='flex items-center max-mob:flex-col'>
        <p className='hidden max-mob:block'>2023 Ddsgnr. All rights reserved.</p>
        </div>
        
        <div className='flex justify-between max-mob:flex-col max-mob:items-center max-mob:gap-8'>
          <div className='flex gap-12 max-mob:gap-6'>
            <p className='max-mob:hidden'>2023 Ddsgnr. All rights reserved.</p>
            <p className='border-b border-black'>Privacy Policy</p>
            <p className='border-b border-black'>Terms of Service</p>
            <p className='border-b border-black'>Cookies Setting</p>
           </div>
          <div className='flex gap-4 max-mob:gap-4'>
            <FaFacebookF size={24} />
            <FaInstagram  size={24}/>
            <FaTwitter size={24}/>
            <FaLinkedin size={24}/>
          </div>
        </div>
      </div>
    </div>
  )
}


