'use client'
import {useState} from "react";
import Reyting from "./commponent/Reyting.jsx";
import OYinchilar from "./commponent/O‘yinchilar.jsx";
import Link from "next/link";
import Kitob from "@/app/commponent/Kitob";
import Loyiharivojlantirish from "@/app/commponent/Loyiharivojlantirish";
import Karta from "@/app/commponent/Karta";

const Page = () => {
    const [video, useVideo] = useState(true);
    const [yangilik, useYangilik] = useState(true)

    return <div className={"w-min h-333"}>
        <div
            className="flex items-center w-81.5 h-14.5 justify-center rounded-lg mt-22 ml-3 bg-[#272B30] gap-30  ">
            <h1 className="text-amber-50 text-[20px] font-medium">
                Kun o‘yini
            </h1>

            <select
                onClick={() => {
                    useVideo(!video);
                }}
                className="text-gray-500 text-[16px]">
                <option>Ko‘rish</option>
            </select>
        </div>
        {video && (
            <>
                <iframe
                    className="w-81.5 h-45.75 mt-3 ml-3 rounded-lg"
                    src="https://www.youtube.com/embed/Fs4jUSLfg6c"
                    title="YouTube video"
                    allowFullScreen
                ></iframe>

                <div
                    className={"text-amber-50 text-[16px] font-medium flex items-center w-81.5 h-17 bg-[#1A1D1F] rounded-lg ml-3"}>
                    <img src={"img00035.svg"} alt={""}/>
                    <div>
                        <h1>Abdusatto</h1>
                        <h1>rovNodirbek</h1>
                    </div>
                    <img className={"w-25 h-25 drop-shadow-[0_0_12px_#3ba7ff]"} src={"img00036.svg"} alt=""/>
                    <div>
                        <h1>magnus</h1>
                        <h>carlsen</h>
                    </div>
                    <img className={"w-5 h-9"} src={"img00037.svg"} alt=""/>
                </div>
            </>
        )}

        <div
            className={"text-amber-50 text-[20px] font-medium mt-5 ml-3 w-81.5 h-92.25 rounded-lg p-4 flex gap-40 border-b-2 border-b-black bg-[#1A1D1F]"}>
            <h1>Reyting</h1>
            <h1 className={"text-[16px] text-[#9DA1A3]"}>Barchasi</h1>
        </div>
        <Link href={''}>
            <Reyting reting={"12"} img={<img src={"img00038.svg"} alt={""}/>} title={"....magnus carlsen"}/>
            <Reyting reting={<img src={"img00040.svg"} alt=""/>} title={"2.  nikaru hakamura"}/>
            <Reyting reting={"5"} title={"3.  nikaru hakamura"}/>
            <div className={"relative bottom-70"}>
                <Reyting title={"4.  Sindarov Javokhir"}/>
                <Reyting reting={"27"} title={"5. Yakubboev Nodirbek"}/>
            </div>
        </Link>


        <div className={"flex gap-6 relative bottom-330 left-105 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"}>
            <div
                className="w-81.5 h-27 rounded-xl bg-linear-to-r from-[#06131D] via-[#0B2740] to-[#163B5B] border border-[#1E4A6B] shadow-lg">
                <img src="/img000101.svg" alt=""/>
                <h1 className={"text-white font-bold z-30 relative bottom-17 left-40 text-[20px]"}>Kurslar</h1>
                <img className={"relative bottom-34  left-50"} src="/img000102.png" alt=""/>
            </div>

            <div
                className="w-85 h-27.75 rounded-xl bg-linear-to-r from-[#06131D] via-[#0B2740] to-[#163B5B] border border-[#1E4A6B] shadow-lg">
                <img className={"relative"} src="/img000104.svg" alt=""/>
                <img className={"relative left-56 bottom-26"} src="/img000103.svg" alt=""/>
                <h1 className={"text-white text-[20px] font-bold relative bottom-45 left-35"}>Kutubxona</h1>
            </div>

        </div>
        <div className={"relative bottom-328 left-108 rounded-lg p-5 w-169 h-116.5 bg-[#1A1D1F] flex gap-90"}>
            <h1 className={"text-amber-50 text-[20px] font-medium"}>Yakunlangan o‘yinlar</h1>
            <h3 className={"text-gray-500 text-[16px]"}>Barchasi</h3>
        </div>
        <div
            className={"text-[#9D9FA1] text-[12px] font-medium flex justify-center items-center gap-20 relative bottom-430 left-108 bg-[#272B30] w-169 h-9"}>
            <h2>O‘yinchilar</h2>
            <div className={"flex gap-10 ml-35"}>
                <h2>natija</h2>
                <h2>o‘yin Turi</h2>
                <h2>Yurishlari</h2>
                <h2>sana</h2>
            </div>
        </div>
        <OYinchilar name={"Shohrukh Bakhtiyarov"} reting={"(2861)"} num={"2"} img={"img00055.svg"} number={"56"}
                    dekabr={"12 Dekabr"}/>
        <OYinchilar name={"Abdusattorov Nodirbek"} reting={"(2604)"} num={"1"} img={"img00056.svg"} number={"20"}
                    dekabr={"21 Noyabr"}/>
        <OYinchilar name={"Aronian Levon"} reting={"(2402)"} num={"0"} img={"img00057.svg"} number={"19"}
                    dekabr={"19 Oktabr"}/>
        <OYinchilar name={"Caruana Fabiano"} reting={"(2402)"} num={"1"} img={"img00057.svg"} number={"56"}
                    dekabr={"2 Sentabr"}/>
        <OYinchilar name={"Yakubboev Nodirbek"} reting={"(2402)"} num={"4"} img={"img00056.svg"} number={"56"}
                    dekabr={"2 Sentabr"}/>


        <div className={"relative bottom-420 left-108"}>
            <img src={"img00060.svg"} alt=""/>
            <div className={"flex  hover: cursor-pointer hover:scale-103"}>
                <h1 onClick={() => {
                    useYangilik(!yangilik)
                }} className={"text-white text-[20px] font-bold mt-10 "}>Yangiliklar</h1>
                <p className={"text-[1px] text-white font-medium "}>Barchasi</p>
            </div>

            {yangilik && (
                <>
                    <div className={"flex gap-5 border border-b-gray-700 w-169"}>
                        <img className={"w-45 h-30 rounded-2xl object-cover mt-5"} src={"img1.png"} alt=""/>
                        <div className={"hover:text-blue-600 hover:cursor-pointer"}>
                            <p className={"text-gray-500 mt-5 hover:text-blue-600"}>Sentabr 7, 2022</p>
                            <h1 className={"text-white text-[16px] hover:text-blue-600 font-semibold "}>Nodirbek
                                Abdusattorov FIDE jonli
                                reytingida 2700 balldan o‘tdi</h1>
                            <p className={"text-gray-500 hover:text-blue-600 text-[14px] font-medium mt-3"}>O‘zbekistonlik
                                yosh grossmeyster
                                Turkiyada o‘tkazilgan shaxmat</p>
                            <p className={"text-gray-500 text-[14px] hover:text-blue-600 hover:cursor-pointer font-medium"}>olimpiadasida
                                ikkita g‘alaba qozonib,
                                shaxmat bo‘yicha jahon reyting...</p>
                        </div>
                    </div>

                    <div className={"flex gap-5 border border-b-gray-700  w-169"}>
                        <img className={"w-45 h-30 rounded-2xl object-cover mt-5"} src={"img002.png"} alt=""/>
                        <div className={"hover:text-blue-600 hover:cursor-pointer"}>
                            <p className={"text-gray-300 mt-5 hover:text-blue-600"}>Sentabr 7, 2022</p>
                            <h1 className={"text-white text-[16px] hover:text-blue-600 font-semibold "}>“Qo‘shnilarning
                                buyuk jasorati”: Rossiyalik grossmeyster</h1>
                            <h1 className={"text-white text-[16px] hover:text-blue-600 font-semibold "}> o‘zbek
                                shaxmatining g‘alabas...</h1>
                            <p className={"text-gray-300 hover:text-blue-600 text-[14px] font-medium mt-3"}>Rossiyalik
                                grossmeyster va shaxmat bo‘yicha murabbiy Sergey </p>
                            <p className={"text-gray-300 text-[14px] hover:text-blue-600 hover:cursor-pointer font-medium"}>Shipov
                                O‘zbekiston terma jamoasining Hindistondagi shaxmat</p>
                        </div>
                    </div>

                    <div className={"flex gap-5 border border-b-gray-700 w-169"}>
                        <img className={"w-45 h-30 rounded-2xl object-cover mt-5"} src={"img0001.png"} alt=""/>
                        <div className={"hover:text-blue-600 hover:cursor-pointer"}>
                            <p className={"text-gray-500 mt-5 hover:text-blue-600"}>Sentabr 7, 2022</p>
                            <h1 className={"text-white text-[16px] hover:text-blue-600 font-semibold "}>Xalqaro shaxmat
                                musobaqalari g‘oliblariga0</h1>
                            <h1 className={"text-white text-[16px] hover:text-blue-600 font-semiboldto "}> nima
                                beriladi?</h1>
                            <p className={"text-gray-500 hover:text-blue-600 text-[14px] font-medium "}>O‘zbekiston
                                Prezidenti Shavkat Mirziyoyevning “Shaxmatni yanada ommalashtirish va rivojlantirishga
                                doir qo‘shimcha chora-tadbirlar to‘g‘...</p>

                        </div>
                    </div>

                    <div className={"flex gap-5 border border-b-gray-700 w-169"}>
                        <img className={"w-45 h-30 rounded-2xl object-cover mt-5"} src={"img003.png"} alt=""/>
                        <div className={"hover:text-blue-600 hover:cursor-pointer"}>
                            <p className={"text-gray-500 mt-5 hover:text-blue-600"}>Sentabr 7, 2022</p>
                            <h1 className={"text-white text-[16px] hover:text-blue-600 font-semibold "}>O‘zbekiston
                                shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi</h1>
                            <p className={"text-gray-500 hover:text-blue-600 text-[14px] font-medium mt-3"}>Ikki davlat
                                jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa,
                                hech qachon mag‘lubiyatga uchramagan respub...</p>

                        </div>
                    </div>

                </>
            )}
        </div>


        <div className={"relative left-287 bottom-544"}>
            <Kitob/>
        </div>

        <div className={"w-81.5 h-117.5 bg-[#1A1D1F] rounded-lg relative bottom-790 left-285 p-4 text-white"}>
            <h2 className={"mb-7  text-[18px] text-white font-medium"}>Tavfsiya</h2>
            <div className={"hover:bg-[#13181C] rounded-lg w-75.5 h-25.5 border-b border-b-gray-700"}>
                <img src={"img00099.svg"} alt={""}/>
                <div className={"relative bottom-20 left-25"}>
                    <h1 className={"text-[13px] text-amber-50 font-bold"}>Shaxmatdagi qobiliyatliringizga </h1>
                    <h1>qayta baxo bering</h1>
                    <p className={"text-[#888888] "}>J.Silman</p>
                </div>
                <div>
                    <img className={"rounded-lg relative bottom-10"} src={"img000100.svg"} alt={""}/>
                    <div className={"relative bottom-30 left-25"}>
                        <h1 className={"text-[13px] text-amber-50 font-bold"}>Mening tizimim</h1>
                        <p className={"text-[#888888] relative top-8 "}>A.Nimzowitsch</p>
                    </div>
                </div>

                <img className={"relative bottom-15 rounded-lg"} src={"img00076.svg"} alt={""}/>
                <div className={"relative bottom-35 left-25"}>
                    <h1 className={"text-[13px] text-amber-50 font-bold"}>Zurixdagi shaxmat musobaqasi</h1>
                    <p className={"text-[#888888] relative top-8"}>D.Bronstein</p>
                </div>

                <img className={"relative bottom-20 rounded-lg"} src={"img00075.svg"} alt={""}/>
                <div className={"relative bottom-38 left-25"}>
                    <h1 className={"text-[13px] text-amber-50 font-bold"}>Mening esdaqolarlik o‘yinlarim</h1>
                    <p className={"text-[#888888] relative top-8"}>B.Fischer</p>
                </div>
            </div>
        </div>


        <div className={"relative left-284 bottom-988"}>
                <Loyiharivojlantirish/>
            <div className={"mt-7"}>
            <Karta/>
            </div>
        </div>

    </div>
}
export default Page
