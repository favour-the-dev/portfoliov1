import Marquee from "react-fast-marquee";
function Banner() {
    return (
        <>
            <div className="w-screen  mt-8 h-[75px] bg-[#000000] flex items-center">
                <Marquee
                    pauseOnHover={true}
                    speed={100}
                >
                    <div className="uppercase md:text-xl text-text flex space-x-16">
                        <p>Web Design</p>
                        <p>Development</p>
                        <p>Brand Developement</p>
                        <p>innovation</p>
                        <p>Ui/Ux</p>
                    </div>
                </Marquee>
            </div>
        </>
        );
}

export default Banner;