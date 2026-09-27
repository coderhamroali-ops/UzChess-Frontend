"use client";

import {useEffect, useState} from "react";
import axios from "axios";
import Kitob from "@/app/commponent/Kitob";
import Link from "next/link";
import Karta from "@/app/commponent/Karta";

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadData() {
            const query = search ? "?search=" + search : "";

            const response = await axios.get(
                `http://localhost:8888/public/news/` + query
            );

            setNews(response.data.data);
        }

        loadData();
    }, [search]);

    const highlightText = (title, search) => {
        const text = search.trim();

        if (!text) {
            return title;
        }

        const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        const regex = new RegExp(`(${escapedText})`, "gi");

        const parts = title.split(regex);

        return parts.map((part, index) => {
            if (part.toLowerCase() === text.toLowerCase()) {
                return (
                    <span
                        key={index}
                        className="
                        rounded-sm bg-amber-400 border border-amber-300 px-1
                        "
                    >
                        {part}
                    </span>
                );
            }

            return (
                <span key={index}>
                    {part}
                </span>
            );
        });
    };

    return (
        <div className="w-88 h-333">

            <div className="flex items-center gap-142">

                <h2
                    className="
                        text-[#F7F9FA]
                        text-[32px]
                        font-bold
                        ml-8.5
                        mt-15
                    "
                >
                    Yangiliklar
                </h2>

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Izlash"
                    className="
                        p-3
                        w-100.5
                        h-13
                        mt-10
                        bg-[#15181A]
                        text-white
                        placeholder:text-[#666B6D]
                        border
                        border-[#232627]
                        focus:border-blue-500
                        outline-none
                        rounded-md
                    "
                />

            </div>

            <div className="relative left-277 bottom-15">
                <Karta/>
            </div>

            <div className="relative left-278 bottom-10">
                <Kitob/>
            </div>

            <div>

                {search && news.length === 0 ? (
                    <>
                        <div
                            className="
                                text-red-500
                                text-[15px]
                                relative
                                bottom-150
                                left-100
                                float
                            "
                        >
                            <img src="bulut.png" alt=""/>
                        </div>

                        <div>
                            <h1
                                className="
                                    text-[#F7F9FA]
                                    font-bold
                                    text-[28px]
                                    relative
                                    float
                                    bottom-140
                                    left-90
                                "
                            >
                                Hech qanday ma’lumot topilmadi
                            </h1>
                        </div>
                    </>
                ) : (
                    <div
                        className="
                            grid
                            grid-cols-[repeat(3,302px)]
                            gap-x-15
                            gap-y-6
                            ml-8.5
                            relative
                            bottom-160
                        "
                    >
                        {news.map((item) => (

                            <Link
                                key={item.id}
                                href={`/asosiy/${item.id}`}
                            >

                                <div
                                    className="
                                        w-81.5
                                        h-62.75
                                        bg-[#1A1D1F]
                                        rounded-lg
                                        p-3
                                    "
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width={302}
                                        height={113}
                                        className="
                                            w-75.5
                                            h-28.25
                                            object-cover
                                        "
                                    />

                                    <h1
                                        className="
                                            text-white
                                            font-medium
                                            text-[14px]
                                            hover:text-[#1C92E0]
                                            hover:cursor-pointer
                                            mt-4
                                        "
                                    >
                                        {highlightText(item.title, search)}
                                    </h1>

                                    <p>{item.data}</p>

                                    <h1
                                        className="
                                            text-[#9DA1A3]
                                            mt-2
                                            font-medium
                                            text-[14px]
                                        "
                                    >
                                        {item.content}
                                    </h1>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
}
