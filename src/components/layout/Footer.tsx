import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import React, { forwardRef } from "react";

const Footer = forwardRef(({}, ref: React.ForwardedRef<HTMLElement>) => {
  return (
    <footer className='w-full mt-28 py-10 lg:py-16 bg-[#343a46]' ref={ref}>
      <div className='max-w-5xl lg:m-auto flex flex-col lg:flex-row lg:items-center gap-y-3 lg:gap-x-32 justify-between'>
        <h1 className='text-center text-5xl lg:text-7xl mb-5 font-bold text-[#fa6743]'>
          Contact
        </h1>
        <div className='ms-3 flex flex-col items-start justify-start  lg:items-center lg:flex-row gap-y-3 lg:gap-x-3 '>
          <div className='flex flex-col gap-y-3'>
            <div className='flex items-center gap-x-3'>
              <MdOutlineMail size={35} />
              <h5>zulfanurhuda01@gmail.com</h5>
            </div>
            <a
              href='https://www.linkedin.com/in/zulfa-nurhuda-b8a7a825a/'
              target='_blank'
              className='flex items-center gap-x-3'
            >
              <FaLinkedin size={33} />
              linkedin.com/in/zulfa-nurhuda-b8a7a825a
            </a>
          </div>
          <div className='flex flex-col gap-y-3 px-2'>
            <div className='flex items-center gap-x-3'>
              <FaPhoneAlt size={30} />
              <h5>+6281318627769</h5>
            </div>
            <a
              href='https://github.com/znDev0101'
              target='_blank'
              className='flex items-center gap-x-3'
            >
              <IoLogoGithub size={30} />
              <h5>github.com/znDev0101</h5>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
