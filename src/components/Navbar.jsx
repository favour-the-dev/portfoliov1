import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState, useEffect} from 'react';
function Navbar() {
    const [open, setOpen]= useState(false);
    const[fixed, setfixed] = useState('relative');
    useEffect(()=>{
        window.addEventListener('scroll', scrollcheck);

        return() =>{
            window.removeEventListener('scroll', scrollcheck);
        }
    }, [])
    function scrollcheck(){
        const scroll = window.scrollY;
        if(scroll > 0){
            return setfixed('h-fit bg-black fixed z-20 top-0 left-0')
        }else{
            setfixed('relative')
        }
    }
    return (  
        <>
            <header className={`w-screen p-5 lg:px-20 lg:py-5 text-text duration-150 md:duration-0 ease-linear ${fixed}`} id='header'>
                <div className='flex items-center justify-between w-full '>
                    <div className='flex items-center justify-between w-full md:w-fit'>
                        <div className='font-bold text-3xl z-50'>FO.</div>
                        <div className='text-3xl md:hidden z-50' onClick={()=>{
                            setOpen(!open);
                        }}>
                            {!open? <AiOutlineMenu /> : <AiOutlineClose />}
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row items-center z-40 gap-6 text-xl absolute md:static top-0 w-full md:w-fit bg-black md:bg-transparent justify-center md:justify-between h-screen md:h-fit duration-200 md:duration-0 ease-in-out ${!open? 'right-[-100%]' : 'right-0'}`}>
                        <a href="#" className='hover:text-gray-300 duration-200 ease-linear' onClick={()=>{
                            setOpen(!open)
                        }}>Home</a>
                        <a href="#About" className='hover:text-gray-300 duration-200 ease-linear' onClick={()=>{
                            setOpen(!open)
                        }}>About</a>
                        <a href="#Portfolio" className='hover:text-gray-300 duration-200 ease-linear' onClick={()=>{
                            setOpen(!open)
                        }}>portfolio</a>
                        <a href="#Contact" className='hover:text-gray-300 duration-200 ease-linear' onClick={()=>{
                            setOpen(!open)
                        }}>Contact</a>
                    </div>
                    <div>
                        <a href='#Contact' className='hidden md:block rounded-full border-2 border-text px-4 py-2 hover:bg-text hover:text-main duration-150 ease-linear'>
                            Contact me
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;