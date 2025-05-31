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

export const App = () =>{
    return (
        <section className="w-full h-full">
            <Header />
            <Inicio />
            <Sponsors />
            <Nosotros />
            <Clases />
            <Competencias />
            <Galeria />
            <ComoLlegar />
            <Beneficios />
            <Footer />
        </section>
    )
}