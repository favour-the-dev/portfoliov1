import mypic from '../assets/images/meport.jpg';
import Banner from "./banner";
import { gsap, TweenMax, Power3 } from 'gsap';
import { useRef, useEffect } from 'react';
function HeroSect() {
    let imgref = useRef(null);
    let textbox = useRef(null);
    gsap.registerPlugin(TweenMax, Power3)
    useEffect(()=>{
        TweenMax.to(
            imgref,
            1,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            textbox,
            1,
            {
                opacity: 1,
                x: 10,
                ease: Power3.easeOut
            }
        )
    }, [])
    return ( 
        <>
           <section className='w-full h-screen md:max-h-[768px] lg:h-screen relative text-text py-5 px-2 sm:px-5 lg:px-20 lg:py-5 flex flex-col justify-center'>
                <div className='flex flex-col gap-2 lg:gap-0 md:flex-row lg:items-center'>
                    <div className='flex flex-col gap-4 lg:w-1/2 order-2 lg:order-1 opacity-0'
                    ref={el =>{textbox = el}}
                    >
                        <div className='uppercase text-2xl md:text-4xl xl:text-5xl font-semibold flex flex-col'>
                            <p>hey, i'm favour, a</p>
                            <p>front-end developer</p>
                            <p>and problem solver</p>
                        </div>
                        <div className='flex space-x-3'>
                            <p className='flex items-center gap-1 text-xs lg:text-xl capitalize'><span className='bg-text w-2 h-2 rounded-full'></span>developer</p>
                            <p className='flex items-center gap-1 text-xs lg:text-xl capitalize'><span className='bg-text w-2 h-2 rounded-full'></span>innovator</p>
                            <p className='flex items-center gap-1 text-xs lg:text-xl capitalize'><span className='bg-text w-2 h-2 rounded-full'></span>problem solver</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <a href="https://malito:favourto91@gmail.com" className='bg-text rounded-full text-main px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 hover:bg-gray-300 duration-200 ease-linear'>Send an Email</a>
                            <a href="#Contact" className='border-2 border-text px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full hover:bg-text hover:text-main duration-200 ease-linear'>Contact me</a>
                        </div>
                    </div>
                    <div className='flex mx-auto md:w-1/2 mb-4 lg:mb-0 opacity-0 justify-center lg:order-2'
                    ref={img=>{
                        imgref = img;
                    }}
                    >
                        <img src={mypic} alt="" className='w-3/4 sm:w-3/5 md:w-3/4 rounded-full border-4 border-text border-opacity-80'/>
                    </div>
                </div>
                <div className='absolute left-0 bottom-0'>
                    <Banner />
                </div>
           </section>
        </> 
    );
}

export default HeroSect;