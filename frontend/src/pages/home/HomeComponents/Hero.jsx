import React from 'react'
import Button from '../../../components/ui/Button';
// import 'tailwind-merge'

const Hero = () => {
  return (
    <div className="pb-28">
      {/* Background Video Container */}
      <div className="absolute top-10 -z-50 w-screen h-screen ">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="./public/assets/videos/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute top-10 -z-40 w-screen h-screen  bg-[#1f272bbf] " />

      {/* Content */}
      <div className="text-white flex flex-col gap-5 pt-24 pl-12">
        {/* subheading */}
        <h6 className="text-[18px] font-semibold">HELLO</h6>

        {/* heading */}
        <h1 className="uppercase text-[36px] font-extrabold ">
          Welcome to task trakker
        </h1>

        {/* tagline */}
        <p className="max-w-162.5 leading-6">
          Get ready to take control of your{" "}
          <em className="text-[#33ccff] ">tasks</em>!{" "}
          <em className="text-[#33ccff] ">Task Trakker</em> is your go-to tool
          for staying on <em className="text-[#33ccff]">"trakk"</em> and
          reaching your goals.Transform your daily to-do list into a roadmap for
          success. Experience the clarity of organized productivity. Let's make
          it happen!{" "}
        </p>

        {/* CTA */}
        <Button colors="red" size="normal" type="button" className="">
          Get started
        </Button>
      </div>
    </div>
  );
}

export default Hero