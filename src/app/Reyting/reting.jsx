export default function Reting({img, title}) {
    return <>

        <div className={"flex p-3.75 w-256.5 h-13.5 bg-[#15181A] border border-b-gray-700"}>
            <p className={"text-white text-[16px]"}>- 2.</p>
            <div className={"flex relative left-10"}>
                <img className={"w-53.75 h-6"} src={img} alt=""/>
            </div>
            <div className={"flex items-center gap-26.25 text-white relative left-73"}>
                <p>2861</p>
                <p className={"text-green-700 text-[12px] relative right-27"}>{title}</p>
                <p>2859</p>
                <p>2830</p>
            </div>
        </div>
    </>
}