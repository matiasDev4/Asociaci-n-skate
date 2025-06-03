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

export const App = () =>{
    return (
        <section className="w-full h-full">
            <Header />
            <Inicio />
            <Sponsors />
            <Nosotros />
            <Clases />
            <Competencias />
            <div className="text-white max-w-50 lg:max-w-[700px] mx-auto text-center my-10">
                <h1 className="text-2xl font-title font-bold my-5 text-center">Fotografos</h1>
                <ul className="flex flex-col gap-y-4 justify-center lg:flex-row lg:gap-x-4 lg:justify-evenly [&>a]:px-2">
                    <a href="https://www.instagram.com/nahu_ch.fotografia"
                    className="bg-red-500/80 w-50 py-1 flex items-center justify-center gap-x-2 font-title rounded-sm">
                    <span><BsInstagram /></span>nahu_ch.fotografia</a>
                    <a href="https://www.instagram.com/abruugallegos.ph"
                    className="bg-red-500/80 w-50 py-1 flex items-center justify-center gap-x-2 font-title rounded-sm">
                    <span><BsInstagram /></span>abruugallegos.ph</a>
                    <a href="https://www.instagram.com/haunthumans"
                    className="bg-red-500/80 w-50 py-1 flex items-center justify-center gap-x-2 font-title rounded-sm">
                    <span><BsInstagram /></span>haunthumans</a>
                    <a href="https://www.instagram.com/mebsk8"
                    className="bg-red-500/80 w-50 py-1 flex items-center justify-center gap-x-2 font-title rounded-sm">
                    <span><BsInstagram /></span>mebsk8</a>
                </ul>
                
            </div>
            <Galeria />
            <VideoPark />
            <ComoLlegar />
            <Beneficios />
            <Footer />
        </section>
    )
}