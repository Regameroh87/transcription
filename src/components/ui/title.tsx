import style from "./animations.module.css"
export default function Title () {
    return (
        <div className=" flex w-fit text-4xl text-wrap font-thin justify-center">
            <span style={{width:"auto", marginRight:"16px"}} className={` hidden md:block ${style.animationSliceRight} text-nowrap `}>Desarrollo de</span>
            <span className={`${style.animationSliceLeft} font-extrabold`}> Aplicación de Transcripción de Llamadas</span>
        </div>
    )
}