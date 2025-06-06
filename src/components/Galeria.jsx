import { useState } from "react";
import { imagenes } from "../config/galeria"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


export const Galeria = () =>{
    const [current, setCurrent] = useState(0)

    const anterior = () => setCurrent(cur => cur === 0 ? imagenes.length - 1 : cur - 1)
    const siguiente = () => setCurrent(cur => cur === imagenes.length - 1 ? 0 : cur + 1)
    return (
        <section className="my-5 flex flex-col gap-x-10 justify-center items-center lg:flex-row">
            <div className="overflow-hidden relative w-70 h-auto bg-black my-2 rounded-2xl shadow-[0px_10px_20px_black]/80 hover:scale-95
            transition-transform duration-300 lg:w-[400px]">
                <div className="flex transition-transform ease-out duration-500"
                style={{transform: `translateX(-${current*100}%)`}}>
                    {imagenes.map(item=>
                    <img key={item.name} src={item.url} alt={item.name} 
                    className="w-full h-full object-cover"/>
                )}
                </div>
                <div className="absolute flex items-center justify-between inset-0 w-full px-2 -z-0">
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
                    {imagenes.map((_, i) =>(<button className={`
                        transition-all w-3 h-3 ${current === i ? 'p-3 bg-green-500': 'p-1 bg-white/80'} rounded-full 
                        translate-x-[${current * i}%]`}></button>))}
                </div>
                <h1 className="absolute top-0 text-lg bg-white px-5 py-1 rounded-xl m-2 font-title font-semibold">Compe 3ra Edicion</h1>
            </div>
        </section>
    )
}