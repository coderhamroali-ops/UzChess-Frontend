export default function Kurslar2 ({img, reting, title, title2, py}) {
    return <>
        <div className={"w-169 h-54.25 relative bottom-15 bg-[#1A1D1F] rounded-lg p-6"}>
            <img className={"w-33 h-44.25 rounded-md"} src={img} alt={""}/>
            <div
                className="w-13.25 h-7.25 flex gap-1 items-center justify-center rounded-md border-2 border-gray-700 bg-[#0B141899] relative bottom-43 left-2">
                <img src={"img00020.svg"} alt={""}/>
                <p className={"text-amber-50 font-medium"}>{reting}</p>
            </div>
            <div>
                <p className={"text-amber-50 font-medium w-8.75 h-5.5 text-[12px] flex justify-center items-center rounded-md border-2 border-gray-700 bg-[#0B141899] relative bottom-15 left-3"}>{py}</p>
            </div>
            <div className={"relative bottom-57 left-37"}>
                <h1 className={"text-amber-50 text-[20px] font-bold"}>{title}</h1>
                <h1 className={"text-blue-400 text-[20px] font-bold"}>{title2}</h1>
                <del className={"text-[#888888] decoration-red-500"}>205 000.00 uzs</del>
                <h1 className={"text-green-500 font-bold"}>155 000.00 uzs</h1>
                <div className={"text-[#888888] flex items-center mt-5 gap-2"}>
                    <img src={"img00015.svg"} alt={""}/>
                    <p>Boshlang‘ich</p>
                    <img src={"img00016.svg"} alt={""}/>
                    <img src={"img00017.svg"} alt={""}/>
                    <p>5 ta bo‘lim</p>
                    <img src={"img00016.svg"} alt={""}/>
                    <img src={"img00018"} alt={""}/>
                    <p>Strategiya</p>
                    <img className={"ml-10"} src={"img00019.svg"} alt={""}/>
                </div>
                    <div  className={"mt-5 hover:scale-109 w-49.5 h-10 bg-blue-500 rounded-lg flex justify-center items-center  text-amber-50 text-[16px] font-medium hover:cursor-pointer"}>
                        <button className={"flex justify-center gap-2.5 items-center"}>
                            <img src={"img4.svg"} alt={""}/>Savatchaga
                        </button>
                    </div>
            </div>
        </div>
    </>
}
