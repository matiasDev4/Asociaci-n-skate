import { BsInstagram } from "react-icons/bs";

export const VideoPark = () =>{
    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-5 my-10">
            <iframe  src="https://www.youtube.com/embed/wj5tZEi1770" 
            title="SKATE PARK SAN VICENTE - ASAB" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-[320px] h-[280] md:w-[400px] md:h-[350px] lg:w-[600px] lg:h-[350px]"></iframe>
            <div className="flex flex-col gap-y-4 items-center">
                <h1 className="text-xl text-white font-bold font-title">Video creado por</h1>
                <span
                className="text-white flex items-center gap-x-4 bg-red-500/80 px-4 py-1 rounded-sm">
                <span><BsInstagram /></span><a href="https://www.instagram.com/asociacion_skate_alte_brown"
                className="font-semibold font-title">asociacion_skate_alte_brown</a></span>
            </div>
        </div>
    )
}