import Link from "next/link";

export default function Page() {
    return <>
        <Link href={"/public"} className={"relative left-309 top-7"}>
            <img src="/X.svg" alt=""/>
        </Link>
        <img className={" left-184 bottom-8"} src="/img1.svg" alt=""/>
        <div className={"flex fixed bg-[#0C0E0FF0] w-full h-full top-0 left-0"}>
            <div className={"w-227.5 h-149.25 bg-[#1A1D1F] relative left-78 rounded-l-lg"}>
                <img className={"display fixed right-76  w-110.75 h-149.25  rounded-r-lg "} src="/Frame%20427318495.png"
                     alt=""/>

                <div className={'p-6'}>
                    <hr className={"w-116.75 relative top-30 right-5 text-[#F7F9FA14]"}/>
                    <h1 className={'text-white text-[20px] font-bold'}>Parolni tiklash</h1>
                    <div className={'flex mt-5'}>
                        <div className={"text-white w-50.25 h-8.75 bg-[#323639] p-2 rounded-md"}>
                            <h3>Telefon raqam orqali</h3>
                        </div>

                        <div className={"text-gray-700 w-50.25 h-8.75 bg-[#13181C] p-2 relative bottom-8. rounded-md"}>
                        </div>
                    </div>
                    <div className={"text-[#9DA1A3] text-[15px] relative top-13"}>

                        <p className={"mt-4"}>Telefon raqam</p>
                        <input type="number" placeholder="+998  __ ___ __ __" className={"w-104.75 h-11 text-[18px] text-white mt-3 bg-[#13181C]"}/>


                        <p className={"w-104.75 h-9 mt-8"}></p>

                        <button className={"text-white text-[16px] font-bold w-104.75 h-11 bg-[#1C92E0] mt-50 rounded-lg hover:scale-108 hover:cursor-pointer"}>Ro‘yxatdan o‘tish</button>


                    </div>
                </div>
            </div>
        </div>
    </>
}