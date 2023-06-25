import img1 from '../assets/images/portfolio/img1.png';
import img2 from '../assets/images/portfolio/img2.png';
import img3 from '../assets/images/portfolio/img3.png';
import img4 from '../assets/images/portfolio/img4.png';
import img5 from '../assets/images/portfolio/img5.png';
function Portfolio() {
    return (
        <>
            <section className="w-screen p-5 lg:px-20 lg:py-5 text-text" id="Portfolio">
                <div className="flex flex-col space-y-6">
                    <h2 className="uppercase font-semibold text-2xl my-8">Portfolio</h2>
                    <div className="flex flex-col space-y-12">
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-col space-y-3 md:w-4/5 lg:w-1/2">
                                <div className="relative">
                                    <h3 className=" uppercase">Project 1</h3>
                                    <p className="absolute top-[60%] bg-gray-500 opacity-60 z-[-1] w-20 h-2"></p>
                                </div>
                                <h3 className="text-2xl capitalize">Kryptowatch</h3>
                                <p>Kryptowatch is a website that displays the popular trends in the crypto market, also uses an api to display the current market cap in real time.</p>
                                <div className="flex items-center justify-between text-xs md:text-base">
                                    <span>React</span>
                                    <span>Tailwind</span>
                                    <span>Javascript</span>
                                    <span>Coinranking API</span>
                                </div>
                            </div>
                            <a href="https://favkryptowatch.netlify.app/" target='blank_' className='lg:w-1/2 flex justify-center'>
                                <div className="md:w-4/5 lg:w-full bg-black">
                                    <img src={img1} alt="" className='w-full opacity-50 hover:opacity-100 duration-200 ease-linear'/>
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-col lg:order-2 space-y-3 md:w-4/5 lg:w-1/2">
                                <div className="relative">
                                    <h3 className=" uppercase">Project 2</h3>
                                    <p className="absolute top-[60%] bg-gray-500 opacity-60 z-[-1] w-20 h-2"></p>
                                </div>
                                <h3 className="text-2xl capitalize">WooCommerce</h3>
                                <p>WooCommerce is website for a wordpress agency that handles the websites of small buisnesses.</p>
                                <div className="flex items-center justify-between text-xs md:text-base">
                                    <span>React</span>
                                    <span>Tailwind</span>
                                    <span>Javascript</span>
                                    <span>SwiperJs</span>
                                </div>
                            </div>
                            <a href="https://woocom.netlify.app/" target='blank_' className='lg:w-1/2 flex justify-center'>
                                <div className="md:w-4/5 lg:w-full bg-black">
                                    <img src={img2} alt="" className='w-full opacity-50 hover:opacity-100 duration-200 ease-linear'/>
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-col space-y-3 md:w-4/5 lg:w-1/2">
                                <div className="relative">
                                    <h3 className=" uppercase">Project 3</h3>
                                    <p className="absolute top-[60%] bg-gray-500 opacity-60 z-[-1] w-20 h-2"></p>
                                </div>
                                <h3 className="text-2xl capitalize">Saveply</h3>
                                <p>Saveply is a clone website for popular neo-piggybank or savings platform saveply. Made with astro to increase load time and performance</p>
                                <div className="flex items-center justify-between text-xs md:text-base">
                                    <span>React</span>
                                    <span>Tailwind</span>
                                    <span>Javascript</span>
                                    <span>AstroJs</span>
                                </div>
                            </div>
                            <a href="https://saveply.netlify.app/" target='blank_' className='lg:w-1/2 flex justify-center'>
                                <div className="md:w-4/5 lg:w-full bg-black">
                                    <img src={img3} alt="" className='w-full opacity-50 hover:opacity-100 duration-200 ease-linear'/>
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-col lg:order-2 space-y-3 w-full md:w-4/5 lg:w-1/2">
                                <div className="relative">
                                    <h3 className=" uppercase">Project 4</h3>
                                    <p className="absolute top-[60%] bg-gray-500 opacity-60 z-[-1] w-20 h-2"></p>
                                </div>
                                <h3 className="text-2xl capitalize">FindMe</h3>
                                <p>Google maps clone made with MapBox API.</p>
                                <div className="flex items-center justify-between text-xs md:text-base">
                                    <span>Html</span>
                                    <span>Tailwind</span>
                                    <span>Javascript</span>
                                    <span>MapBox API</span>
                                </div>
                            </div>
                            <a href="https://googlemapscloneemapbox.netlify.app/" target='blank_' className='lg:w-1/2 flex justify-center'>
                                <div className="md:w-4/5 lg:w-full bg-black">
                                    <img src={img4} alt="" className='w-full opacity-50 hover:opacity-100 duration-200 ease-linear'/>
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-col space-y-3 md:w-4/5 lg:w-1/2">
                                <div className="relative">
                                    <h3 className=" uppercase">Project 5</h3>
                                    <p className="absolute top-[60%] bg-gray-500 opacity-60 z-[-1] w-20 h-2"></p>
                                </div>
                                <h3 className="text-2xl capitalize">Discord Clone</h3>
                                <p>This is a clone of the orginal website of the popular social media app Discord.</p>
                                <div className="flex items-center justify-between text-xs md:text-base">
                                    <span>Html</span>
                                    <span>Css</span>
                                    <span>Javascript</span>
                                </div>
                            </div>
                            <a href="https://favour-the-dev.github.io/discord-clone/" target='blank_' className='lg:w-1/2 flex justify-center'>
                                <div className="md:w-4/5 lg:w-full bg-black">
                                    <img src={img5} alt="" className='w-full opacity-50 hover:opacity-100 duration-200 ease-linear'/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;