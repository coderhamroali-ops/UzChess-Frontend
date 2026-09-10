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
                    <hr className={"w-116.75 relative top-20 right-5 text-[#F7F9FA14]"}/>
                    <h1 className={'text-white text-[20px] ml-5'}>Parol qo‘yish</h1>

                    <div className={'relative bottom-10 right-4 hover:cursor-pointer'}>
                        <img src="/imgt.svg" alt=""/>
                    </div>
                    <div className={"text-[#9DA1A3] mt-5"}>
                        <p >Parol</p>

                        <input type={"password"} placeholder={"Parolni kiriting"} className={"w-104.75 h-11 mt-5 bg-[#13181C] rounded-lg"}/>
                        <p className={"mt-5"}>Parol</p>

                        <input type={"password"} placeholder={"Parolni kiriting"} className={"w-104.75 h-11 mt-5 bg-[#13181C] rounded-lg"}/>

                    </div>

                    <button
                        className={"text-white text-[16px] font-bold w-104.75 h-11 bg-[#1C92E0] mt-50 rounded-lg hover:scale-104 hover:cursor-pointer"}>Ro‘yxatdan
                        o‘tish
                    </button>
                </div>
            </div>
        </div>
    </>
}