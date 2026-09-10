export default function Page() {
    return <>
        <div className={"w-5xl h-114.25 bg-[#1A1D1F] p-6 rounded-xl ml-8.5 mt-7.5"}>
            <h1 className={"text-white text-[28px] font-bold"}>Bog‘lanish</h1>

            <div className={"flex gap-42.75 text-[#9DA1A3] font-medium ml-5 mt-10.25"}>
                <p>Siz bilan bog‘lanish</p>
                <p>Telefon raqamingiz</p>
            </div>
            <div className={"flex gap-5 mt-2"}>
                <input type={"text"} placeholder={"Ism familiyangizni kiriting"} className={"bg-[#13181C] text-white w-74 h-11 border border-[#36393B] rounded-lg p-4"}/>

                <input type={"number"} placeholder={"+998  __ ___ __ __"} className={"bg-[#13181C] text-white p-4 w-74 h-11 border border-[#36393B] rounded-lg"}/>
            </div>

            <p className={"text-white"}>Shikoyat</p>

        </div>
    </>
}