"use client";

import axios from "axios";
import Image from "next/image";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";

export default function Page() {
    const [news, setNews] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function loadData() {
            const response = await axios.get(
                `http://localhost:8888/public/news/${id}`);
            setNews(response.data);
        }

        loadData();
    }, []);

    if (!news) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={"w-256.5 h-484.75 bg-[#1A1D1F] rounded-xl p-5 ml-8 mt-5 border"}>
                <h1 className={"text-white text-[28px] font-bold"}>O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini  mag‘lub etishdi</h1>
                <img
                    className={"w-246.5 rounded-xl object-cover"}
                    src={news.image}
                    alt={news.title}
                    width={302}
                    height={113}
                />

                <div className={"pl-9.5 mt-6"}>
                    <h2 className={"text-white text-[24px] font-bold"}>Qonun nima haqida</h2>

                    <h3 className={"text-[#C2C4C5] text-[18px] fo"}>Bugun Hindistonda shaxmat bo‘yicha olimpiadada to‘qqizinchi tur o‘yinlari bo‘lib o‘tdi. Tanlov 10 avgustga qadar davom etadi.
                        TOSHKENT, 7 avgust – #sputnik. 44-Jahon shaxmat olimpiadasida O‘zbekiston erkaklar terma jamoasi Armanistonlik raqiblarini mag‘lub etdi. Bu haqda O‘zbekiston Sportni rivojlantirish vazirligi matbuot xizmati xabar berdi.
                        Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respublika terma jamoasi 188 ta jamoadan iborat turnir jadvalida birinchi o‘rinni egalladi. Umumiy hisobda sportchilar 16 ochko jamg‘ardi. Turnirda ikkinchi o‘rinni Hindiston, uchinchi o‘rinni Armaniston terma jamoasi egalladi. Shu bilan birga, O‘zbekiston ayollar terma jamoasi o‘yinda isroillik raqiblariga imkoniyatni boy berdi.
                        Bungacha o‘zbekistonlik badmintonchilar “Osiyo bolalari” xalqaro sport o‘yinlarida turli nomdagi to‘rtta medalni qo‘lga kiritgan edi.</h3>
                </div>

                <div className={"w-226.5 h-33 rounded-xl bg-[#1A2226] p-7 text-white text-[16px] font-light mt-5 ml-8"}>
                    <img src={"news.svg"} alt=""/>
                    <p>Hujjat bilan favqulodda vaziyatlardan muhofaza qilishga oid axborotni yashirish, o‘z vaqtida taqdim etmaslik yoki bila turib yolg‘on axborot taqdim etish taqiqlanishi belgilandi.</p>
                </div>
            </div>
        </>
    );
}