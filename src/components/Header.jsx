import { useState } from "react";
import { Options } from "../config/OptionsMenu"
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const Header = () =>{
    const [open, setOpen] = useState(true)
    const [activeClick, setActiveClick] = useState('')

    return (
        <header className="flex items-center justify-between px-5 bg-black/50 text-white h-20 py-2 sticky top-0 font-title backdrop-blur-sm z-50">
            <div>
                <img src="logo.png" alt="logo" 
                className="w-20"/>
            </div>
            <nav className={`w-full ${open ? 'absolute left-0 top-0 h-dvh z-[999]' : 'absolute -left-[100%] top-0 h-dvh z-[999]'} bg-black py-10 transition-all duration-200
            lg:left-0 lg:h-auto lg:top-auto lg:w-auto lg:block lg:relative lg:py-0 lg:bg-transparent`}>
                <ul className="flex flex-col gap-y-4 px-5 py-4 lg:flex-row lg:px-0 lg:gap-x-5">
                    {Options.map(item=>
                        <li key={item.id} 
                        ><a href={item.link} className={`rounded-sm py-1 px-5 ${activeClick === item.id ? 'bg-red-600 w-full' : 'bg-transparent'} hover:bg-red-600
                        hover:cursor-pointer w-50 block transition-all duration-200 lg:w-auto sm:text-lg lg:text-2xl`}
                        onClick={(e)=>{
                            setActiveClick(e.target.text)
                            console.log(activeClick)
                            setOpen(false)
                        }}>{item.name}</a></li>
                    )}
                </ul>
                <span className="absolute top-5 right-5 text-2xl lg:hidden"
                onClick={()=>{setOpen(false)}}><RxCross2/></span>
            </nav>
            <span
            className="text-2xl lg:hidden"
            onClick={()=>{setOpen(true)}}
            ><IoMdMenu/></span>
        </header>
    )
}