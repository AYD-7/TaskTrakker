import React from 'react';
import { CheckCircle, Users, Target } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section aria-label="Why Choose Us" className="pt-80 pb-28 bg-[url('/assets/images/shapes-bg.jpg')]">
        <div className="mx-auto px-4">
            {/* Group */}
            <div className='flex flex-col gap-6'>
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-white">Why Choose Us</h2>
                {/* Line */}
                <div className='w-2/3  h-[.5px] bg-[#fafafaa1] mx-auto' />
            </div>
            
            {/* Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

                {/* First Item */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <CheckCircle size={48} className="text-[#f5a425] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Efficient Task Management</h3>
                    <p className="text-gray-600">
                      Our task management system helps you prioritize and organize your tasks with ease.
                    </p>
                </div>

                {/* Second Item */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Users size={48} className="text-[#f5a425] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Collaborative Teamwork</h3>
                    <p className="text-gray-600">
                        Work with your team seamlessly and achieve your goals together.
                    </p>
                </div>

                {/* Third Item */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Target size={48} className="text-[#f5a425] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Achieve Your Goals</h3>
                    <p className="text-gray-600">
                        Set and achieve your goals with our easy-to-use goal-setting feature.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;