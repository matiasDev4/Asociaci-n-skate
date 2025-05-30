export const Inicio = () =>{
    return (
        <section className="text-white flex my-5 flex-col items-center scroll-mt-30" id="inicio">
            <div className="flex flex-col items-center lg:gap-x-5 lg:flex-row md:flex-row">
                <img src="logo.png" alt="logo" className="w-60 h-60 lg:w-100 lg:h-100 object-cover border-black"/>
                <div className="flex flex-col items-center">
                    <h1
                    className="text-4xl text-center font-bubes w-60 lg:w-100 lg:text-7xl"
                    >asociación sanvicentina de <span className="text-amber-400 text-6xl lg:text-8xl font-bold">skateboard</span>
                    </h1>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScYnVFsR6gpCCltEfZiT8zu7kHTyyw4dBTiStUGcpCGv1gHFw/viewform?usp=sf_link" target="_blank" className="bg-red-600 w-60 lg:w-full text-xl lg:text-2xl py-1 lg:py-2 rounded-md font-title font-bold
                    hover:cursor-pointer hover:bg-red-500 my-2 shadow-[0px_10px_15px_black]/50 transition-all duration-300
                    hover:translate-y-[-5px]">Hacete socio</a>
                </div>
            </div>
            <p className="text-lg border-y-1 py-4 font-bubes my-4 px-2 lg:text-5xl">hagamos crecer el deporte en san vicente</p>
        </section>
    )
}