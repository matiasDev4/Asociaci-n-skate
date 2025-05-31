import { imagenesCompe2, sponsors } from "../config/galeria"

export const Sponsors = () =>{
    return (
        <section className="overflow-x-hidden mx-auto my-10 mask-r-from-80% mask-l-from-80%">
            <h1 className="text-5xl  text-center font-bubes uppercase font-bold text-amber-400 lg:text-7xl scroll-mt-30">Sponsors</h1>
            <div className="flex w-max h-auto gap-x-2 animate-sponsor my-10 ">
                {sponsors.map(item=>
                    <a href={item.link}>
                        <img src={item.url} alt={item.name} 
                        className="w-25"/>
                    </a>
                )}
                {sponsors.map(item=>
                    <a href={item.link}>
                        <img src={item.url} alt={item.name} 
                        className="w-25"/>
                    </a>
                )}
            </div>
            
        </section>
    )
}