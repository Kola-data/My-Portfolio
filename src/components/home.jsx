import React from "react";
import homeImg from "../images/dev.png";
import inIcon from "../images/in.webp"
import gitIcon from "../images/git.webp"
import Resume from "../images/Rutayisire_Emmanuel_Cv.pdf"
import X from "../images/x.png"

function home() {
  return (
    <div id="home" className="min-h-fit bg-center bg-[url('./images/image.jpeg')] bg-no-repeat w-full justify-items-center flex-1 md:flex md:justify-between py-10 px-0 md:px-16 lg:px-24">
      <div className="pt-20 flex md:hidden">
        <img
          className="w-64"
          src={homeImg}
          alt="Home ig"
          srcset=""
        />
      </div>
      <div className="justify-items-center px-0 md:pt-16 text-center lg:pt-36 cursor-default">
        <p className="lg:text-5xl text-white md:text-3xl text-2xl">
          I'm Emmanuel Rutayisire,
        </p>
        <h1 className="lg:text-4xl text-white md:text-2xl text-xl">
          Full stack developer
        </h1>
        <p className="px-5 py-5 text-white lg:text-lg">Hello I'm passionate full stack developer with 1+ year experience in web application development</p>
        <div className="flex gap-5 py-6 md:pb-10">
          <a href="https://www.linkedin.com/in/rutayisire-emmanuel-689675242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img
              className="lg:w-12 rounded-md w-10"
              src={inIcon}
              alt="Home ig"
              srcset=""
            />
          </a>
          
          <a href="https://github.com/kola-data" target="_blank">
            <img
              className="lg:w-12 w-10 rounded-md"
              src={gitIcon}
              alt="Home ig"
              srcset=""
            />
          </a>
          <a href="https://x.com/dreamwave610?t=WcWONMH3I1nR7qTKw8nbYg&s=03" target="_blank">
            <img
              className="lg:w-12 w-10 rounded-md"
              src={X}
              alt="Home ig"
              srcset=""
            />
          </a>
        </div>
        <div className="py-5 sm:py-2">
        <a href={Resume} download={Resume} className="bg-blue-500 focus:outline-none text-white rounded-md  md:py-3 py-2 md:text-lg text-md md:px-5 px-4 hover:bg-transparent hover:border-2 outline-none hover:outline-none">Downlod Resume</a>
      
        </div>
      </div>
      <div className="lg:pt-20 py-5 pt-6 md:pt-10 hidden md:flex">
        <img
          className="w-72 lg:w-80 xl:w-96"
          src={homeImg}
          alt="Home ig"
          srcset=""
        />

      </div>
      
    </div>
  );
}

export default home;
