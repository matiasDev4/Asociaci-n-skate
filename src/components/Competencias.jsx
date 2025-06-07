export const Competencias = () =>{
    return (
        <section className="my-5 py-5">
            <h1 className="text-5xl text-center font-bubes uppercase font-bold text-amber-400 lg:text-7xl scroll-mt-30" id="Competencias">Competencias en sanvi park
            </h1>
            <div className="flex justify-center my-5 flex-col items-center gap-y-5 lg:gap-x-5 lg:flex-row">
                <div className="bg-[#242424] hover:bg-[#1b1b1b] transition-colors duration-200 text-white p-5 text-center rounded-3xl shadow-[0px_0px_10px_black]/80
                flex flex-col gap-y-2 w-50 justify-center">
                    <h1 className="text-3xl font-bubes">Terminada</h1>
                    <span className="font-title text-xl font-bold">2d Edicion</span>
                    <span className="font-title text-xl">17/08/2024</span>
                    
                </div>
                <div className="bg-[#242424] hover:bg-[#1b1b1b] transition-colors duration-200 text-white p-5 text-center rounded-3xl shadow-[0px_0px_10px_black]/80
                flex flex-col gap-y-2 w-50 justify-center">
                    <h1 className="text-3xl font-bubes">Terminada</h1>
                    <span className="font-title text-xl font-bold">3ra Edicion</span>
                    <span className="font-title text-xl">26/04/2025</span>
                </div>
            </div>
        </section>
    )
}