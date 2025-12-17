import React from 'react'
import * as Lucide  from 'lucide-react'
import { navlist } from '../data/navlist';

const Navbar = () => {
  return (
    <div className="">
      {/* Upper */}
      <div className="bg-[#1f272b] flex justify-between py-3 px-16">
        {/* Text */}
        <p className="text-white text-[13px]">
          This is a <em className="text-[#f5a425]">task management</em>{" "}
          application.
        </p>

        {/* Social */}

        <ul className="flex items-center gap-3">
          {/* Facebook */}
          <li>
            <a href="">
              <Lucide.Facebook size={16} fill="white" stroke="none" />
            </a>
          </li>

          {/* Twitter */}
          <li>
            <a href="">
              <Lucide.Twitter size={16} fill="white" stroke="none" />
            </a>
          </li>

          {/* Linkedin */}
          <li>
            <a href="">
              <Lucide.Linkedin size={16} fill="white" stroke="none" />
            </a>
          </li>
        </ul>
      </div>

      {/* Lower */}
      <nav className="bg-[#fafafa26] flex py-6 px-12 justify-between items-center text-white">
        <a href="" className='text-[28px] font-black '>TASK TRAKKER</a>

        <ul className="uppercase flex gap-4 text-sm ">
          {navlist.map((el) => (
            <li key={el.slug}>
              <a href="" className='font-bold hover:text-[#f5a425] transition-colors duration-700 '>{el.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar