'use client';

const Reyting = ({reting, title, img}) => {
    return <>
        <div className={"text-[16px] text-amber-50 flex items-center gap-2 relative bottom-80 left-3 border-gray-900 border w-81.5 h-15.5 p-4 bg-[#1A1D1F] rounded-md"}>
            <h1>{title}</h1>
            <h1 className={"relative left-28 w-min h-min"}>2861</h1>
            <p className={"relative right-44"}>{img}</p>
        </div>
            <div className={"flex text-[#82CC27] p-4 relative bottom-90"}>
                <img className={"w-4 h-4"} src={"img00039.svg"} alt=""/>
                <p className={"text-[12px] w-min h-min"}>{reting}</p>
                <p className={"relative left-57 text-[12px]"}>+102</p>
            </div>
    </>
}
export default Reyting