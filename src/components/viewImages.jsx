import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


export const ViewImages = ({images, indexImage, setOpen}) =>{
    const [image, setImage] = useState(images)
    const [current, setCurrent] = useState(indexImage)

    const anterior = () => setCurrent(cur => cur === 0 ? image.length - 1 : cur - 1)
    const siguiente = () => setCurrent(cur => cur === image.length - 1 ? 0 : cur + 1)
    
    return (
        <div className="bg-black/90 fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-99 w-full h-auto">
                    <div className="w-[320px] h-[800px] lg:w-[500px] lg:h-[800px] overflow-hidden relative shadow-[0px_0px_15px_black/50] rounded-xl "
                    >
                        <div className="flex transition-transform ease-out duration-500 h-full relative"
                        style={{transform: `translateX(-${current*100}%)`}}>
                            {image.map(item => 
                                <>
                                    <img key={item.url} src={item.url} alt="" className="w-full h-full object-contain relative <-5"/>
                                </>
                                 
                            )}
                        </div>
                        <div className="absolute flex items-center justify-between inset-0 w-full px-4 -z-0">
                            <button className="bg-white/50 text-xl p-2 rounded-full hover:cursor-pointer hover:bg-white/80 transition-colors duration-300"
                            onClick={anterior}>
                                <FaArrowLeft />
                            </button>
                            <button className="bg-white/50 text-xl p-2 rounded-full hover:cursor-pointer hover:bg-white/80 transition-colors duration-300"
                            onClick={siguiente}>
                                <FaArrowRight />
                            </button>
                        </div>
                        <div className="absolute bottom-0 flex gap-x-2 items-center px-3 w-full py-5 justify-center">
                            {image.map((_, i) =>(<button className={`
                            transition-all w-3 h-3 ${current === i ? 'p-3 bg-green-500': 'p-1 bg-white/80'} rounded-full 
                            translate-x-[${current * i}%]`}></button>))}
                        </div>

                    </div>

                    <div className="text-white absolute text-2xl bg-red-500 top-4 right-5 p-1 rounded-full
                    hover:cursor-pointer">
                        <span
                        onClick={()=>{setOpen(false)}}><RxCross2 /></span>
                    </div>

        </div>
    )
}
