import React from 'react'
import AutoProj from "../images/autoProj.png"

function projects() {
  return (
    <div id='portfolio' className='bg-gray-100 py-12 px-0'>
        <div className='cursor-default'>
            <div className='justify-items-center'>
                <h1 className='text-4xl md:text-5xl'><span className='bg-blue-500 text-white px-2 border-2 border-blue-500'>My</span><span className='text-blue-500 border-2 border-blue-500 px-2 bg-white'>Portfolio</span></h1>
                <p className='pt-8 text-2xl text-center text-gray-700 border-b-2 border-gray-600'>Latest Portfolio</p>
                
            </div>
            <div className='py-8 px-4 md:px-16 lg:px-24 justify-items-center'>
                <div className="gap-5 flex-wrap flex">
                    <div className='border-2 border-blue-500 py-2 px-2 w-64 sm:w-80 rounded-md'>
                
                    <img
                        className="ounded-md w-full md:h-72 h-52"
                        src={AutoProj}
                        alt="Home ig"
                        srcset=""
                    />
                    <p className='py-4 text-sm'>
                        This is AutoSport Website that help users to find car and the 
                        owner for manage and control products and working online
                    </p>
                    <div className='flex-wrap flex justify-between'>
                        <a href="" className='border-blue-500 border-2 px-3 py-1 text-md rounded-md
                        hover:bg-blue-500 text-blue-500 hover:text-white duration-300'>
                        Click for Visit
                        </a>
                        <h1 className='bg-green-500 text-white py-1 px-2 rounded-full hover:bg-green-600 duration-200'>
                            Commercial
                        </h1>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects