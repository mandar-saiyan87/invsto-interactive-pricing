import React from 'react'
import ServicePlansSlider from '@/components/SeervicePlanSlider'

function Homepage() {
    return (
        <>
            <div className='relative w-full h-screen max-w-[1440px] mx-auto flex flex-col bg-verypaleblue'>
                <div className="w-full h-[55%]" >
                    <img src="/assets/images/bg-pattern.svg" alt="bg-pattern.svg" className='w-full h-full object-fill' />
                </div>
                <div className='absolute top-[5%] left-0 w-full flex items-center justify-center flex-col max-auto text-center bg-[url("/assets/images/pattern-circles.svg")] bg-no-repeat bg-center py-12'>
                    <p className='text-3xl font-extrabold text-darkdesaturatedblue leading-16'>Simple, traffic-based pricing</p>
                    <p className='text-base font-semibold'>Sign-up for our 30-day trial. No credit card required.</p>
                </div>
                <div className='w-full max-w-[60%] bg-white rounded-lg px-4 py-8 flex items-center justify-center absolute top-[45%] left-1/2 -translate-x-1/2 shadow-xl shadow-paleblue'>
                    <ServicePlansSlider />
                </div>
            </div>

        </>
    )
}

export default Homepage