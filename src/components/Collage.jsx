import { useEffect, useState } from "react";
import { imagenes } from "../config/galeria"
import { BsInstagram } from "react-icons/bs";
export const Collage = ({setOpenView, setIndexImage}) =>{
    const [imagenesRandom, setImagenesRandom] = useState([])

    useEffect(()=>{
        const random = () =>{
            const mezcla = imagenes.sort(()=>Math.random() - 0.5).slice(0,4)
            setImagenesRandom(mezcla)
        }
        random()

        const interval = setInterval(random, 60000)
        return () => clearInterval(interval)
    },[])


    return(
        <div className="columns-1 sm:columns-3 lg:columns-3 py-10 md:py-20 gap-4 transition-all duration-200 mx-2">
            <img src="image/sanvipark.png" alt="park" className="rounded-xl h-75 w-full object-cover mb-5
            shadow-[0px_0px_25px_white]/4"/>
            {imagenesRandom.map((item, index) =>(
                <div key={index} className="mb-4 break-inside-avoid ">
                    <div className="relative  overflow-hidden">
                        <img src={item.url} alt={item.name} 
                        className="w-full object-cover rounded-lg"
                        onClick={()=>{
                            setOpenView(true)
                            setIndexImage(index)
                        }}/> 
                        <span
                        className="absolute text-white bg-red-500/80 top-2 left-2 px-2 py-1 rounded-sm font-semibold font-title"><a href={item.instagram}
                        className="flex items-center gap-x-2 text-sm"
                        ><BsInstagram/>{item.author}</a></span>
                        <span className="absolute bottom-0 left-0 bg-amber-200/90 rounded-tr-2xl lg: font-title font-bold lg:text-lg text-sm px-4 py-1
                        translate-x-[-100%] animate-edicion">
                            {item.edicion}
                        </span>
                    </div>
                </div>
            ))}
            
        </div>
    )
}