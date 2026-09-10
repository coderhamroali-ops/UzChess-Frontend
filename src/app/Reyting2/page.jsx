import Reting2 from "@/app/Reyting2/reting2";

export default function Page() {
    return <div className={"p-7.75"}>
        <div className={"flex items-center w-81.5 h-25 rounded-lg bg-[#1A1D1F]"}>
            <img className={"shadow-blue-600"} src="/img000109.svg" alt=""/>
            <h1 className={"text-white text-[32px] font-bold relative right-7"}>Reyting</h1>

        </div>
        <div className={"flex  gap-44.75 p-5 w-83.5 h-69 rounded-lg bg-[#1A1D1F] mt-6"}>
            <h2 className={"text-white font-medium text-[18px]"}>Filter</h2>
            <p className={"text-[#1C92E0] text-[16px]"}>Tozalash</p>
        </div>
        <div className={"relative left-4 bottom-50"}>
            <p className={"text-gray-500 relative bottom-4"}>Mamlakatni tanlang:</p>
            <div className={"w-71.5 h-13.5 bg-[#15181A] rounded-lg  p-4"}>
                <h1 className={"text-white text-[16px]"}>Barchasi</h1>
            </div>

            <div className={"mt-7"}>
                <p className={"text-gray-500 relative bottom-4"}>Toifa:</p>
                <div className={"w-71.5 h-13.5 bg-[#15181A] rounded-lg p-4"}>
                    <h1 className={"text-white text-[16px] "}>Barchasi</h1>
                </div>
            </div>

        </div>


        <div className={"text-gray-500 flex items-center gap-11.5 p-4 w-256.5 h-11 bg-[#272B30] rounded-t-2xl relative bottom-147 left-90"}>
            <p>№</p>
            <p>Ism familiya</p>

            <div className={"flex items-center gap-25 relative left-90"}>
                <p>Klassika</p>
                <p>Rapid</p>
                <p>Blitz</p>
            </div>
        </div>

        <div className={"relative bottom-147 left-90"}>
            <Reting2 img={"ii5.svg"} title={"+102"}/>
            <Reting2 img='/imgmag.svg'/>
            <Reting2 img={"/i.svg"} title={"+1"}/>
            <Reting2 img={"/ii3.svg"}/>
            <Reting2  img={"/ii4.svg"} title={"+1"}/>
            <Reting2 img={"/ii3.svg"}/>
            <Reting2 img={"/ii4.svg"} title={"+1"}/>
            <Reting2 img={"/ii3.svg"}/>
            <Reting2 img={"/ii4.svg"} title={"+1"}/>
            <Reting2 img={"/ii3.svg"}/>
            <Reting2 img={"/ii4.svg"}/>
        </div>

        <div className={"w-256.5 h-17.5 bg-[#1A1D1F] rounded-b-2xl flex justify-end p-5 relative bottom-147 left-90"}>
            <img className={"w-90 h-7"} src="/iI.svg" alt=""/>
        </div>

    </div>
}