import React from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Hero = () => {
    return (
        <div className='w-11/12 mt-20 lg:pt-0 pt-20 md:mb-40 mb-20 mx-auto md:grid md:grid-cols-2 lg:w-10/12 z-0 flex items-center flex-col-reverse'>
            <div className='flex flex-col justify-center'>
                <LeftPart/>
            </div>
            <div className='lg:h-[600px] md:h-[600px] h-[600px] w-full flex items-center'>
                <RightPart/>
            </div>          
            <section id="section-1">
                <a id="scroll-btn" href="#about"></a>
            </section>
        </div>
    )
}

export default Hero;