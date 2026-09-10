"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Page() {

    const path = usePathname();

    return <>
        <Link href={"/public"} className={"relative left-309 top-7"}>
            <img src="/X.svg" alt=""/>
        </Link>
        <img className={"relative left-184 bottom-8"} src="/img1.svg" alt=""/>
        <div className={"flex fixed bg-[#0C0E0FF0] w-full h-full top-0 left-0"}>
            <div className={"w-227.5 h-149.25 bg-[#1A1D1F] relative left-78 rounded-l-lg"}>
                <img className={"display fixed right-76  w-110.75 h-149.25  rounded-r-lg "} src="/Frame%20427318495.png"
                     alt=""/>

                <div className={'p-6'}>
                    <hr className={"w-116.75 relative top-30 right-5 text-[#F7F9FA14]"}/>
                    <h1 className={'text-white text-[20px]'}>Ro‘yxatdan o‘tish</h1>
                    <div className={'flex mt-5'}>

                        <Link href={"/royxat"}>
                            <div className={"font-medium w-50.25 h-8.75 bg-[#13181C] p-2 rounded-md"}>
                                <h3>Telefon raqam orqali</h3>
                            </div>
                        </Link>

                        <Link href={"/royxat2"} className={
                            path === "/royxat2"
                                ? "bg-[#323639] text-white"
                                : "bg-[#13181C]"
                        }>

                            <div
                                className={" w-50.25 h-8.75 p-2 relative bottom-8. rounded-md"}>
                                <h3>E-mail orqali</h3>
                            </div>

                        </Link>
                    </div>
                    <div className={"text-[#9DA1A3] text-[15px] relative top-13"}>
                        <p>Ism</p>

                        <input type="text" placeholder="Ismingizni kiriting"
                               className={"bg-[#13181C] w-104.75 h-11 mt-3 text-[18px] p-4 rounded-lg"}/>

                        <p className={"mt-4"}>Elektron pochta</p>
                        <input type="text" placeholder="example@gmail.com"
                               className={"w-104.75 h-11 text-[18px]  mt-3 bg-[#13181C] p-4 rounded-lg"}/>

                        <p className={"w-104.75 h-9 mt-8"}>Ro‘yxatdan o‘tish tugmasini bosgach foydalanish shartlari va
                            qoidalarini qabul qilaman</p>

                        <button
                            className={"text-white text-[16px] font-bold w-104.75 h-11 bg-[#1C92E0] mt-10 rounded-lg hover:scale-108 hover:cursor-pointer"}>Ro‘yxatdan
                            o‘tish
                        </button>

                        <hr className={"w-45 mt-5"}/>
                        <button
                            className={"w-104.75 h-4.5 mt-10 relative right-2 bottom-13 hover:scale-108 hover:cursor-pointer"}>yoki
                        </button>
                        <hr className={"w-45 relative bottom-16 left-55"}/>

                        <button
                            className={"text-white text-[16px] font-bold w-104.75 h-11 bg-[#F7F9FA1A] relative bottom-10 rounded-lg hover:scale-108 hover:cursor-pointer"}>Kirish
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </>
}