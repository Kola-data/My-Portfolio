import React from 'react'
import ProfileImg from "../images/profile.jpg" 
import Lang from "../images/brackets.png"
import Framework from "../images/fram.png"
import Service from "../images/service.png"

function about() {
  return (
    <div id='about' className='bg-white py-0 px-0'>
        <div className='justify-items-center py-12 cursor-default'>
            <h1 className='text-4xl md:text-5xl'><span className='bg-blue-500 text-white px-2 border-2 border-blue-500'>About</span><span className='text-blue-500 border-2 border-blue-500 px-2 bg-white'>Me</span></h1>
            <p className='pt-8 text-2xl text-center text-gray-600 border-b-2 border-gray-400'>Introduction</p>
            <div className='px-8 md:px-16 lg:px-24 justify-items-center content-center'>
                <div className='py-10'>
                    <img src={ProfileImg} className='rounded-full w-60 h-60 ' alt="About" srcset="" />
                </div>
                <p className='text-3xl md:text-4xl text-gray-600'>Full Stack Developer</p>
                <p className='text-gray-600 text-center py-10 lg:px-24 text-lg md:text-xl'>Hello! I'm <span className='border-b-2 font-bold border-gray-500'>Rutayisire EMMANUEL</span>, 
                a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
                I specialize in building scalable, dynamic web applications that provide seamless user experiences and robust functionality.</p>
                <div className="flex flex-wrap gap-5 pt-2 justify-center">
                    <div className='border-2 border-blue-500 rounded-xl w-60 cursor-pointer duration-200 hover:bg-blue-100'>
                        <div className='py-5 px-5'>
                            <img src={Lang} 
                            alt="Languages"
                            className='w-8 h-8' 
                            srcset="" />
                            <h1 className='text-xl font-semibold py-5 text-gray-800'>Languages</h1>
                            <p className='text-gray-700'>Python, MySQL, PHP, HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div className='border-2 border-blue-500 rounded-xl w-60 cursor-pointer duration-200 hover:bg-blue-100'>
                        <div className='py-5 px-5'>
                            <img src={Framework} 
                            alt="Framework"
                            className='w-8 h-8' 
                            srcset="" />
                            <h1 className='text-xl font-semibold py-5 text-gray-800'>Frameworks</h1>
                            <p className='text-gray-700'>Flask, React Js, Tailwind CSS, Bootstrap</p>
                        </div>
                    </div>
                    <div className='border-2 border-blue-500 rounded-xl w-60 cursor-pointer duration-200 hover:bg-blue-100'>
                        <div className='py-5 px-5'>
                            <img src={Service} 
                            alt="Framework"
                            className='w-8 h-8' 
                            srcset="" />
                            <h1 className='text-xl font-semibold py-5 text-gray-800'>Services</h1>
                            <p className='text-gray-700'>Full Stack Web Application, Mentainance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about