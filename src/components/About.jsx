import {AiFillHtml5} from 'react-icons/ai';
import {SiCss3, SiJavascript, SiTailwindcss, SiAstro, SiPython, SiNetlify} from 'react-icons/si'; 
import {FaReact} from 'react-icons/fa';
import {BsGit} from 'react-icons/bs';
function About() {
    return (
        <>
            <section className="w-screen lg:px-20 lg:py-10 py-5 px-2 sm:px-5 text-text" id="About">
                <h1 className="w-[50%] mx-auto text-center uppercase font-semibold text-2xl mb-8">About me</h1>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                    <div className="text-text lg:px-4 flex flex-col space-y-4 md:w-4/5 mx-auto lg:w-1/2">
                        <p className="leading-relaxed break-words">
                            Hi! My name is Favour Odili, a front end developer and computer science undergrad based in Nigeria. I have niche in turning Conceptual tech solutions into reality on the web. My journey in the tech space started early 2022, and since then my love and flair for technology has grown exponentially, I have had the opportunity to operate as a freelance developer for start-ups and clients alike. I am looking forward to the opportunity to bringing your ideas to life on the web.
                        </p>
                        <div className="flex flex-col space-y-4">
                            <div className="relative w-16">
                                <h2 className="font-semibol uppercase">Skills</h2>
                                <h3 className="absolute w-full bg-text h-2 top-[60%] z-[-1] opacity-25"></h3>
                            </div>
                            <div className="flex justify-between items-center text-sm lg:text-base"> 
                                <div className="flex flex-col space-y-4">
                                    <p className='flex items-center'><AiFillHtml5 />Html</p>
                                    <p className='flex items-center'><SiCss3 />Css</p>
                                    <p className='flex items-center'><SiJavascript/>Javascript</p>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <p className='flex items-center'><SiNetlify/>Netlify</p>
                                    <p className='flex items-center'><SiTailwindcss/>TailwindCss</p>
                                    <p className='flex items-center'><FaReact/>React</p>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <p className='flex items-center'><SiAstro/>Astrojs</p>
                                    <p className='flex items-center'><BsGit/>Git</p>
                                    <p className='flex items-center'><SiPython/>Python</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded mx-auto h-72 md:w-4/5 lg:w-1/2 p-4">
                        <div className="bg-gray-400 w-full rounded h-full border-2 border-dotted  border-gray-500 p-1"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;