import Link from "next/link";
import QaytaYuborish from "@/app/commponent/Qayta-yuborish";

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
                    <h1 className={'text-white text-[20px] ml-5'}>Telefon raqamni tasdiqlash</h1>

                    <div className={'relative bottom-10 right-4 hover:cursor-pointer'}>
                        <img src="/imgt.svg" alt=""/>
                    </div>
                    <div>
                        <h1 className={"text-white mt-5 font-bold text-[20px] w-104.75 h-14"}>Tasdiqlash uchun maxsus
                            kod quyidagi raqamga yuborildi </h1>

                        <input type="number" placeholder="+998 88 033 18 05"
                               className={"w-49.25 h-10 text-[18px] text-[#F7F9FA]  mt-8 bg-[#13181C] rounded-lg"}/>
                        <img className={"relative bottom-8.5 left-40"} src="/imn.svg" alt=""/>

                        <p className={"text-[#9DA1A3] text-[15px]"}>Maxsus kodni kiriting</p>


                        <div className="w-96 p-4 rounded-md">

                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10  bg-[#13181C] border border-[#243447] rounded-md text-white text-center outline-none focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 bg-[#13181C] border border-[#243447] rounded-md text-white text-center outline-none focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 bg-[#13181C] border border-[#243447] rounded-md text-white text-center outline-none focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 bg-[#13181C] border border-[#243447] rounded-md text-white text-center outline-none focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 bg-[#13181C] border border-[#243447] rounded-md text-white text-center outline-none focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 bg-[#13181C] border border-[#243447] rounded-md text-white text-center outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <QaytaYuborish/>
                    </div>
                    <button
                        className={"text-white text-[16px] font-bold w-104.75 h-11 bg-[#1C92E0] mt-30 rounded-lg hover:scale-104 hover:cursor-pointer"}>Tasdiqlash

                    </button>
                </div>
            </div>
        </div>
    </>
}