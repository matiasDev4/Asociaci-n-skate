import { IoLogoWhatsapp } from "react-icons/io";

export const Clases = () =>{
    return (
        <section className="text-white my-5 ">
            <h1 className="text-5xl text-center font-bubes uppercase font-bold text-amber-400 lg:text-7xl scroll-mt-30" id="Clases">Clases en Sanvi Park</h1>
            <div className="text-center font-title my-4">
                <span className="text-xl lg:text-4xl">M. Ugarte y Av. Sarmiento</span><br />
                <span className="text-lg lg:text-3xl">[Frente a la vieja estacion]</span>
            </div>
            <div className="grid grid-cols-1 place-items-center w-full gap-y-10 my-10 md:flex md:flex-row md:justify-center md:gap-x-20">
                <div className="bg-[#1d1d1d] w-70 h-auto rounded-t-lg shadow-[0px_0px_15px_black] rounded-lg
                md:w-100">
                    <div className="w-70 h-70 md:w-100 md:h-100 overflow-hidden">
                        <img src="image/marta.jpg" alt="marta" 
                        className="w-full h-full object-cover rounded-t-lg hover:scale-125 hover:rounded-lg transition-transform duration-300"/>
                    </div>
                    <div className="flex items-center justify-around py-4 text-white px-2">
                        <h1 className="text-xl font-bold lg:text-2xl">Profesor:</h1>
                        <h3 className="bg-white px-4 text-black font-semibold rounded-lg text-lg lg:text-xl">Juan Rios</h3>
                    </div>
                    <div className="px-5 py-5">
                        <button className="bg-green-600 w-full py-2 text-lg font-bold text-white rounded-md flex items-center justify-center gap-x-2
                        hover:bg-green-500 hover:cursor-pointer shadow-[0px_5px_12px_black]/80 lg:text-2xl transition-all duration-200">
                            <span className="text-[1.5rem]"><IoLogoWhatsapp /></span>Contacto</button>
                    </div>
                </div>
                <div className="bg-[#1d1d1d] w-70 h-auto rounded-t-lg shadow-[0px_0px_15px_black] rounded-lg md:w-100">
                    <div className="w-70 h-70 md:w-100 md:h-100 overflow-hidden">
                        <img src="image/lauti.png" alt="lauti" 
                        className="w-full h-full object-cover rounded-t-lg hover:scale-125 transition-transform duration-300"/>
                    </div>
                    <div className="flex items-center justify-around py-4 text-white px-2">
                        <h1 className="text-xl font-bold lg:text-2xl">Profesor:</h1>
                        <h3 className="bg-white px-3 text-black font-semibold rounded-lg text-lg lg:text-xl">Lautaro Sotelo</h3>
                    </div>
                    <div className="px-5 py-5">
                        <button className="bg-green-600 w-full py-2 text-lg font-bold text-white rounded-md flex items-center justify-center gap-x-2
                        hover:bg-green-500 hover:cursor-pointer shadow-[0px_5px_12px_black]/80 lg:text-2xl transition-all duration-200">
                            <span className="text-[1.5rem]"><IoLogoWhatsapp /></span>Contacto</button>
                    </div>
                </div>
            </div>

        </section>
    )
}