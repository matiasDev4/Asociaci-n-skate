import { Beneficios } from "./components/Beneficios"
import { Clases } from "./components/Clases"
import { ComoLlegar } from "./components/ComoLlegar"
import { Competencias } from "./components/Competencias"
import { Footer } from "./components/footer"
import { Galeria } from "./components/Galeria"
import { Header } from "./components/Header"
import { Inicio } from "./components/Inicio"
import { Nosotros } from "./components/Nosotros"
import { Sponsors } from "./components/Sponsors"
import { BsInstagram } from "react-icons/bs";
import { VideoPark } from "./components/VideoPark"
import { Collage } from "./components/Collage"
import { ViewImages } from "./components/viewImages"
import { useEffect, useState } from "react"
import { imagenes } from "./config/galeria"

export const App = () =>{
    const [openView, setOpenView] = useState(false)
    const [indexImage, setIndexImage] = useState(0)
    useEffect(() => {
        if (openView) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Limpieza en caso de error o desmontaje
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openView]);
    return (
        <section className="w-full h-full">
            <Header />
            <Inicio />
            <Sponsors />
            <Nosotros />
            <Clases />
            <Competencias />
            <div className="max-w-[300px] md:max-w-[900px] mx-auto my-10 ">
                <Collage setOpenView={setOpenView} setIndexImage={setIndexImage}/>
            </div>
            {openView ? <ViewImages images={imagenes} indexImage={indexImage} setOpen={setOpenView}/> : ''}
            <VideoPark />
            <ComoLlegar />
            <Beneficios />
            <Footer />
        </section>
    )
}