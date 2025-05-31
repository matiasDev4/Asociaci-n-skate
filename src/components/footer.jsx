export const Footer = () =>{
    return (
        <footer className="bg-black text-white py-5">
            <h1 className="text-5xl text-center font-bubes uppercase font-bold text-amber-400 lg:text-7xl scroll-mt-30" id="Contacto">
                <span className="text-white">ASOCIACION SANVICENTINA DE</span> SKATEBOARD</h1>
            <h3 className="text-5xl text-center font-bubes uppercase font-bold text-white lg:text-7xl py-4">SANVI PARK</h3>
            <h3 className="text-center font-bold text-lg">M. Ugarte y AV. Sarmiento</h3>
            <h4 className="text-center font-semibold text-md">San Vicente (Frente la vieja estacion)</h4>
            <div className="py-4">
                <h1 className="text-xl font-bold text-center">Contacto y Redes</h1>
                <div className="flex justify-center gap-x-5 py-4">
                    <a href="http://">
                        <img src="icons/gmail.svg" alt="gmail" />
                    </a>
                    <a href="http://wa.me/+5491125411901">
                        <img src="icons/whatsapp.svg" alt="whatsapp" />
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-5 font-bubes text-[1.5rem] my-5">
                    <a href="https://www.instagram.com/asociacionsanvicentinadeskate/" className="flex flex-col items-center gap-x-5">
                        <img src="icons/instagram.svg" alt="instagram" />
                        asociacionsanvicentinadeskate
                    </a>
                    <a href="https://www.instagram.com/sanvi.park/" className="flex flex-col items-center gap-x-5">
                        <img src="icons/instagram.svg" alt="instagram" />
                        sanvi.park
                    </a>
                    <a href="https://www.instagram.com/quirrygoos/" className="flex flex-col items-center gap-x-5">
                        <img src="icons/instagram.svg" alt="instagram" />
                        quirrygoos
                    </a>
                </div>
            </div>
        </footer>
    )
}