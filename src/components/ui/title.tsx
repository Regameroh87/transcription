import style from "./animations.module.css"
export default function Title () {
    return (
        <div className=" flex w-fit ml-10 min-w-80 text-sm sm:ml-0 sm:text-base md:text-4xl font-thin justify-center">
            <span style={{width:"auto", marginRight:"8px"}} className={` hidden md:block ${style.animationSliceRight} text-nowrap `}>Desarrollo de</span>
            <span className={`${style.animationSliceLeft} font-extrabold`}> Aplicación de Transcripción de Llamadas</span>
        </div>
    )
}