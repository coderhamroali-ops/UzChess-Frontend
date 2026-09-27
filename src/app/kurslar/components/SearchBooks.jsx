"use client";

import {useState} from "react";
import Loyiharivojlantirish from "@/app/commponent/Loyiharivojlantirish";
import Karta from "@/app/commponent/Karta";
import Link from "next/link";

export default function SearchBooks({books = []}) {
    const [search, setSearch] = useState("");

    const filteredBooks = books.filter((item) =>
        item.title
            ?.toLowerCase()
            .includes(search.trim().toLowerCase())
    );

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
                            rounded-sm
                            bg-amber-400
                            border
                            border-amber-300
                            px-1
                        "
                    >
                        {part}
                    </span>
                );
            }

            return <span key={index}>{part}</span>;
        });
    };

    return (
        <div>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Izlash"
                className="
                    relative
                    bottom-11
                    w-169
                    h-13
                    text-white
                    text-[16px]
                    rounded-lg
                    bg-[#1A1D1F]
                    px-4
                    outline-none
                    border
                    border-[#232627]
                    focus:border-blue-500
                "
            />

            <div className="absolute left-277 top-44">
                <Karta/>

                <div className="mt-5">
                    <Loyiharivojlantirish/>
                </div>
            </div>

            <div className="relative">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((item, index) => {
                        console.log("BOOK:", item);
                        console.log("BOOK ID:", item.id);

                        return (
                            <Link
                                key={item.id ?? `${item.title}-${index}`}
                                href={`/kurslar/${item.id}`}
                                className="block"
                            >
                                <div
                                    className="
                                        m-4
                                        flex
                                        gap-5
                                        w-169
                                        h-47.25
                                        bg-[#1A1D1F]
                                        p-5
                                        rounded-lg
                                        border
                                        border-transparent
                                        hover:border-[#1C92E0]
                                        transition
                                    "
                                >
                                    <img
                                        className="
                                            border
                                            border-[#F7F9FA14]
                                            rounded-md
                                            w-46.25
                                            h-35.25
                                            object-cover
                                        "
                                        src={item.image}
                                        alt={item.title}
                                    />

                                    <div>
                                        <p className="text-white font-bold text-[20px]">
                                            {highlightText(
                                                item.title,
                                                search
                                            )}
                                        </p>

                                        <p className="text-[#F7F9FA99] font-medium text-[14px]">
                                            {item.description}
                                        </p>

                                        <br/>

                                        <p
                                            className="
                                                text-[12px]
                                                font-medium
                                                text-[#F7F9FAA3]
                                                line-through
                                                decoration-red-500
                                            "
                                        >
                                            {item.price?.toLocaleString("uz-UZ")}{" "}
                                            UZS
                                        </p>

                                        <p
                                            className="
                                                text-[16px]
                                                font-bold
                                                text-[#82CC27]
                                            "
                                        >
                                            {item.newPrice?.toLocaleString("uz-UZ")}{" "}
                                            UZS
                                        </p>

                                        <div
                                            className="
                                                relative
                                                right-47
                                                bottom-27
                                                gap-1
                                                flex
                                                items-center
                                                justify-center
                                                w-13.25
                                                h-7.25
                                                rounded-md
                                                border
                                                border-[#F7F9FA29]
                                                bg-[#0B141899]
                                            "
                                        >
                                            <img
                                                src="/star1.svg"
                                                alt=""
                                            />

                                            <p className="text-white font-medium text-[14px]">
                                                {item.rating}
                                            </p>
                                        </div>

                                        <div
                                            className="
                                                w-8
                                                h-5.5
                                                rounded-lg
                                                text-[#C9C4A6]
                                                font-medium
                                                text-[12px]
                                                flex
                                                items-center
                                                justify-center
                                                border
                                                border-[#F7F9FA29]
                                                bg-[#0B141899]
                                                relative
                                                right-47
                                                bottom-7
                                            "
                                        >
                                            <p>O`z</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <div
                        className="
                            text-red-500
                            text-[15px]
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <img
                            src="/bulut.png"
                            alt="Natija topilmadi"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}