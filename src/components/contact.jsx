import React from 'react'
import Loc from "../images/loc.webp"
import Call from "../images/phone.png"
import Mail from "../images/mail.png"

function contact() {
    const [result, setResult] = React.useState("Send message");
    const [successMsg, setSuccessMsg] = React.useState("")
    const [errorMsg, setErrorMsg] = React.useState("")
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0c5bbd57-acf9-49a3-bd42-6c33686d05b3");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            setSuccessMsg("Form Submitted Successfully");
            setResult("Send message")
            event.target.reset();
        } else {
          console.log("Error", data);
          setResult("Send message")
          setErrorMsg(data.message);
        }
      }; 

  return (
    <div id='contact' className='py-10 px-1 justify-items-center items-center bg-white'>
        <h1 className='text-4xl md:text-5xl'><span className='bg-blue-500 text-white px-2 border-2 border-blue-500'>Contact</span><span className='text-blue-500 border-2 border-blue-500 px-2 bg-white'>Me</span></h1>
        <div className='flex-col justify-items-center'>
            <p className='pt-8 text-2xl text-center text-gray-600'>Connect With Me</p>
            <p className="w-28 h-[2px] bg-gray-500"></p> 
        </div>
        <div className='flex-wrap flex py-10 justify-center w-full'>
            <div className='bg-gray-100 px-7 py-7 xl:px-10 xl:py-10 lg:mr-5 mb-5 lg:mb-0 rounded-lg xl:items-center w-11/12 lg:w-auto'>
                <div className='flex'>
                    <img src={Loc} className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-white' alt="Location" srcset="" />
                    <div className='px-2 py-0 md:px-4 md:py-2'>
                        <p className='text-blue-500 font-bold text-lg xl:text-xl'>Location</p>
                        <p className='text-blue-900 text-sm xl:text-base'>Kigali, Rwanda</p>
                    </div>
                </div>
                <div className='flex pt-5'>
                    <img src={Call} className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-white' alt="Location" srcset="" />
                    <div className='px-2 py-0 md:px-4 md:py-2'>
                        <p className='text-blue-500 font-bold text-lg xl:text-xl'>Phone</p>
                        <p className='text-blue-900 text-sm xl:text-base'>+250 780 405 522</p>
                    </div>
                </div>
                <div className='flex pt-5'>
                    <img src={Mail} className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-white' alt="Location" srcset="" />
                    <div className='px-2 py-0 md:px-4 md:py-2'>
                        <p className='text-blue-500 font-bold text-lg xl:text-xl'>E-mail</p>
                        <p className='text-blue-900 text-sm xl:text-base'>dreamwave610@gmail.com</p>
                    </div>
                </div>
            </div>
            
            <div className='bg-gray-100 py-10 px-10 rounded-lg w-11/12 lg:w-7/12'>
                
                <form onSubmit={onSubmit} className=''>
                <p className='text-center pb-5 text-xl text-gray-700'>Text Me</p>
                    
                    <div className='block sm:flex sm:space-x-2'>
                        <div className='relative w-full'>
                            
                            <input type='text' id='fullName' name='fullName' placeholder='Full Name' 
                            required className='peer px-4 w-full bg-gray-100 py-2 text-gray-700 
                            text-lg outline-none border-2 focus:outline-none
                            border-blue-600 rounded-md hover:border-blue-500 duration-200
                            placeholder-transparent' />
                            
                            <label htmlFor="fullName" className='absolute left-0 -top-3.5 text-lg 
                            text-blue-500 mx-2 px-2.5 peer-placeholder-shown:text-base bg-slate-100 pb-0
                            peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 transition-all
                            peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-lg'>Full Name</label>
                            
                            
                        </div>
                        <br />
                        <div className='relative w-full'>
                            
                            <input type='text' id='Email' name='Email' placeholder='E-mail' 
                            required className='peer px-4 w-full bg-gray-100 py-2 text-gray-700 
                            text-lg outline-none border-2 focus:outline-none
                            border-blue-600 rounded-md hover:border-blue-500 duration-200
                            placeholder-transparent' />
                            
                            <label htmlFor="Email" className='absolute left-0 -top-3.5 text-lg 
                            text-blue-500 mx-2 px-2.5 peer-placeholder-shown:text-base bg-slate-100 pb-0
                            peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 transition-all
                            peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-lg'>E-mail</label>
                            
                            
                        </div>
                    </div>

                    <div className='mt-6 relative'>
                        
                        <input type='text' id='Subject' name='Subject' placeholder='Subject' 
                        required className='peer px-4 w-full bg-gray-100 py-2 text-gray-700 
                         text-lg outline-none border-2 focus:outline-none
                        border-blue-600 rounded-md hover:border-blue-500 duration-200
                        placeholder-transparent' />
                        <br />
                        <label htmlFor="Subject" className='absolute left-0 -top-3.5 text-lg 
                        text-blue-500 mx-2 px-2.5 peer-placeholder-shown:text-base bg-slate-100 pb-0
                        peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 transition-all
                        peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-lg'>Subject</label>
                        
                    
                    </div>

                    <div className='mt-6 relative'>
                        
                        <textarea id='Message' rows={5} name='Message' placeholder='Message' 
                        required className='peer scrollbar-thin scrollbar-webkit resize-none px-4 w-full bg-gray-100 py-2 text-gray-700 
                        text-lg outline-none border-2 focus:outline-none
                        border-blue-600 rounded-md hover:border-blue-500 duration-200
                        placeholder-transparent' />
                        <br />
                        <label htmlFor="Messages" className='absolute left-0 -top-3.5 text-lg 
                        text-blue-500 mx-2 px-2.5 peer-placeholder-shown:text-base bg-slate-100 pb-0
                        peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 transition-all
                        peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-lg'>Message</label>
                        
                    
                    </div>
                    <button className='border-2 text-blue-600 px-5 py-2 border-blue-600 mt-6 rounded-md
                    hover:outline-none hover:bg-blue-500 hover:border-blue-500 hover:text-white
                    duration-500 text-base' type="submit">{result}</button>
                    {setSuccessMsg ?
                        (<div className='pt-5'>
                            <p className='text-green-500 text-lg'>{successMsg}</p>
                        </div>)
                        : setErrorMsg ?  
                        (<div className='pt-5'>
                            <p className='text-red-500 text-lg'>{errorMsg}</p>
                        </div>)
                        :
                        ''
                    }
                </form>
            </div>
        </div>

    </div>
  )
}

export default contact
