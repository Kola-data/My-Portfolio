import React from 'react'
import inIcon from "../images/in.webp"
import gitIcon from "../images/git.webp"
import X from "../images/x.png"

function footer() {
  return (
    <div className='lg:px-18 xl:px-24 px-0 pb-0'>
        <div className='bg-gray-200 w-full py-5 px-7 justify-items-center md:flex md:flex-wrap md:justify-between'>
            <p className='text-lg text-gray-800 py-2'>&copy; 2024 Released by <span className='font-semibold'>Rutayisire EMMANUEL</span></p>
            <div className="flex flex-wrap gap-5 py-2">
                <a href="https://www.linkedin.com/in/rutayisire-emmanuel-689675242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                <img
                    className="rounded-md w-9"
                    src={inIcon}
                    alt="Home ig"
                    srcset=""
                />
                </a>
                
                <a href="https://github.com/kola-data" target='_blank'>
                <img
                    className="w-9 rounded-md"
                    src={gitIcon}
                    alt="Home ig"
                    srcset=""
                />
                </a>
                <a href="https://x.com/dreamwave610?t=WcWONMH3I1nR7qTKw8nbYg&s=033" target='_blank'>
                <img
                    className="w-9 rounded-md"
                    src={X}
                    alt="Home ig"
                    srcset=""
                />
                </a>
            </div>
        </div>
    </div>
  )
}

export default footer