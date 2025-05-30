export const ComoLlegar = () =>{
    return (
        <section className="my-5 w-full flex justify-center flex-col">
            <h1 className="text-5xl text-center font-bubes uppercase font-bold text-amber-400 lg:text-7xl scroll-mt-30" id="Como llegar">Como llegar</h1>
            <div className="w-full h-[400px] flex flex-col items-center scale-100 gap-y-5 my-10 lg:px-100 lg:h-[600px]">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.94563609366!2d-58.417544299999996!3d-35.0330899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd2da82b90d703%3A0x9787303f42538d0d!2sSkatepark%20San%20Vicente!5e0!3m2!1ses-419!2sar!4v1748186337305!5m2!1ses-419!2sar"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-2xl w-full h-full"></iframe>
                <a href="https://www.google.com/maps/place/Skatepark+San+Vicente/@-35.0330899,-58.4175443,17z/data=!4m8!3m7!1s0x95bd2da82b90d703:0x9787303f42538d0d!8m2!3d-35.0330899!4d-58.4175443!9m1!1b1!16s%2Fg%2F11g87c61sy?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                className="bg-red-600 w-50 py-2 text-white text-xl font-title rounded-sm text-center
                hover:bg-red-500 hover:cursor-pointer transition-all duration-300 lg:w-100 lg:py-4 lg:text-2xl" target="_blank">Deja tu opinion</a>
            </div>
        </section>
    )
}