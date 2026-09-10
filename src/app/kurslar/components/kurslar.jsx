const Kurslar = ({img, reting, title, title2}) => {
    return <>
        <div className={"w-169 h-47.25 relative bottom-15 bg-[#1A1D1F] rounded-lg p-6"}>
            <img className={"w-46.25 h-35.25 "} src={img} alt={""}/>
            <div
                className="w-13.25 h-7.25 flex gap-1 items-center justify-center rounded-md border-2 border-gray-700 bg-[#0B141899] relative bottom-33 left-2">
                <img src={"img00020.svg"} alt={""}/>
                <p className={"text-amber-50 font-medium"}>{reting}</p>
            </div>
            <div className={"relative bottom-45 left-50"}>
                <h1 className={"text-amber-50 text-[20px] font-bold"}>{title}</h1>
                <h1 className={"text-blue-600 text-[20px] font-bold"}>{title2}</h1>
                <p className={"text-[#888888]"}>Robert Fisher</p>
                <del className={"text-[#888888] decoration-red-500"}>205 000.00 uzs</del>
                <h1 className={"text-green-500 font-bold"}>96 000.00 uzs</h1>
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
            </div>
        </div>
    </>
}

export default Kurslar
