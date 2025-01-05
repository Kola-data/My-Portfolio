import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../images/logo.png"


function navBar() {

  const [isMobile, setIsMobile] = useState(false);

  return (
    
    <section>

        <nav className="bg-blue-500 w-full fixed z-50 text-white px-1 sm:px-10 xl:px-24" >
          <div className="py-4 flex justify-between md:justify-between items-center" >
            <div className="flex-col px-2 justify-items-center">
              <p className="md:text-5xl cursor-pointer text-4xl">Emmanuel</p>
              <p className="md:w-36 w-24 h-[2px] md:h-[3px] bg-white"></p>
            </div>
              <div className="hidden md:space-x-10 md:block">
                <a className="hover:text-white hover:border-b-2 cursor-pointer text-lg focus:outline-none">
                  <Link activeClass="active" to="home" spy={true} smooth={true}
                  offset={-70} duration={500}>Home</Link>
                  
                </a>
                <a className="hover:text-white hover:border-b-2 cursor-pointer text-lg focus:outline-none">
                <Link activeClass="active" to="about" spy={true} smooth={true}
                offset={-70} duration={500}>About Me</Link>
                  
                </a>
                <a className="hover:text-white hover:border-b-2 cursor-pointer text-lg focus:outline-none">
                <Link activeClass="active" to="portfolio" spy={true} smooth={true}
                offset={-70} duration={500}>Portfolio</Link>
                
                </a>
                
              </div>
            
              
            <div className="">
              <a
                
                className="hidden md:flex bg-gradient-to-r from-white to-gray-200 text-blue-600 bold 
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 transform 
                transition-transform duration-300 px-5 py-2 rounded-md hover:bg-transparent 
                hover:text-white hover:border-b-4 focus:outline-none cursor-pointer text-lg"
              >
                <Link activeClass="active" to="contact" spy={true} smooth={true}
                offset={-70} duration={500}>Contact Me</Link>
                
              </a>
              <button className="md:hidden transition duration-700" >
                {isMobile ? 
                  (<p className="text-5xl px-4" onClick={() => setIsMobile(false)}>&times;</p>) 
                  : 
                  (<div className="space-y-2 px-4 py-2" onClick={() => setIsMobile(true)}>
                    <p className="w-10 h-1 bg-white"> </p>
                    <p className="w-8 h-1 bg-white"> </p>
                    <p className="w-6 h-1 bg-white"> </p>
                  </div>)}
              </button>
            </div>
          </div>
      
        </nav>
        <div className={ `z-40 md:hidden ${isMobile ? "bg-white fixed w-full mt-[80px] overflow-hidden transform transition-all duration-700 ease-in-out translate-y-0"
          : "-translate-y-full bg-white fixed w-full mt-[80px] overflow-hidden transform transition-all duration-700 ease-in-out"}`
        } 
    
      >
          <div className="text-center py-20" onClick={() => setIsMobile(false)}>
              <a className="hover:text-blue-400 hover:border-b-2 border-blue-400 cursor-pointer text-blue-500 text-lg focus:outline-none">
                <Link activeClass="active" to="home" spy={true} smooth={true}
                offset={-70} duration={500} onClick={() => setIsMobile(false)}>Home</Link>
                
              </a>
              <br />
            <br />
              <a className="hover:text-blue-400 hover:border-b-2 border-blue-400 cursor-pointer text-blue-500 text-lg focus:outline-none">
              <Link activeClass="active" to="about" spy={true} smooth={true}
              offset={-70} duration={500} onClick={() => setIsMobile(false)}>About Me</Link>
                
              </a>
              <br />
              <br />
              <a className="hover:text-blue-400 hover:border-b-2 border-blue-400 cursor-pointer text-blue-500 text-lg focus:outline-none">
              <Link activeClass="active" to="portfolio" spy={true} smooth={true}
              offset={-70} duration={500} onClick={() => setIsMobile(false)}>Portfolio</Link>
              
              </a>
              <br />
              <br />
              <a className="hover:text-blue-400 hover:border-b-2 border-blue-400 cursor-pointer text-blue-500 text-lg focus:outline-none">
              <Link activeClass="active" to="contact" spy={true} smooth={true}
              offset={-70} duration={500} onClick={() => setIsMobile(false)}>Contact Me</Link>
              
              </a>
          </div>
      </div>

    </section>
  );
}

export default navBar;
