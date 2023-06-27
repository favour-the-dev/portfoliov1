import {AiFillMail, AiFillPhone, AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiFillGithub} from 'react-icons/ai';
function Contact() {
    return (
        <>
            <footer className="w-screen lg:px-20 py-5 px-2 sm:px-5 lg:py-5 text-text flex flex-col items-center justify-center" id="Contact">
                <div className="flex flex-col items-center justify-center w-full space-y-6 my-12">
                    <h2 className="text-center uppercase font-semibold text-2xl">Contact me</h2>
                    <h3 className="text-center uppercase text-2xl md:text-3xl font-bold opacity-80">Want to get in touch?</h3>
                    <p className="text-center text-xs sm:text-sm md:text-base md:w-[70%] lg:w-[50%]">I am driven towards the success and near perfection of any project I start and I am looking forward to collaborating on any project, just get in touch through the following platforms below.</p>
                    <div className="flex items-center w-3/4 md:w-full justify-center text-xs sm:text-xm md:text-base space-x-2 md:space-x-4">
                        <a href='malito:favourto91@gmail.com' target='blank_' className="bg-gray-500 bg-opacity-50 p-2 hover:bg-opacity-30 flex items-center md:gap-2"><AiFillMail/>favourto91@gmail.com</a>
                        <a href='tel:+2347010752695' target='blank_' className="bg-gray-500 bg-opacity-50 p-2 hover:bg-opacity-30 flex items-center md:gap-2"><AiFillPhone/>+2347010752695</a>
                        <a href='https://www.linkedin.com/in/favour-odili-8b5439233/' target='blank_' className="bg-gray-500 bg-opacity-50 p-2 hover:bg-opacity-30 flex items-center md:gap-2"><AiFillLinkedin/>Linkedin</a>
                    </div>
                    <div className="flex items-center justify-center w-3/4 md:w-full text-xs sm:text-xm md:text-base space-x-2 md:space-x-4">
                        <a href='https://twitter.com/Favytech10' target='blank_' className="bg-gray-500 bg-opacity-50 p-2 hover:bg-opacity-30 flex items-center md:gap-2"><AiOutlineTwitter/>Twitter</a>
                        <a href='https://www.instagram.com/f.odili/' target='blank_' className="bg-gray-500 bg-opacity-50 p-2 hover:bg-opacity-30 flex items-center md:gap-2"><AiOutlineInstagram/>Instagram</a>
                        <a href='https://github.com/favour-the-dev' target='blank_' className="bg-gray-500 bg-opacity-50 p-2 hover:bg-opacity-30 flex items-center md:gap-2"><AiFillGithub/>Github</a>
                    </div>
                </div>
                <div className='text-center'>Devoloped and designed with ❤️ by Favour Odili.</div>
            </footer>
        </>
    );
}

export default Contact;