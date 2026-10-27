"use client";

import {useState} from "react";
import Link from "next/link";
import {fileUrl} from "@/lib/api";
import {formatFullDate} from "@/lib/format";
import Karta from "@/app/commponent/Karta";
import Loyiharivojlantirish from "@/app/commponent/Loyiharivojlantirish";
import {EmptyResult, SearchInput} from "@/app/commponent/Katalog";

const PAGE_SIZE = 9;

export default function NewsList({news}) {
    const [search, setSearch] = useState("");
    const [visible, setVisible] = useState(PAGE_SIZE);

    const text = search.trim().toLowerCase();
    const filtered = news.filter((item) =>
        !text || item.title.toLowerCase().includes(text) || item.content.toLowerCase().includes(text)
    );

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_326px]">
            <section className="flex min-w-0 flex-col gap-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-[32px] font-bold text-white">Yangiliklar</h1>
                    <div className="w-full sm:w-100">
                        <SearchInput value={search} onChange={setSearch}/>
                    </div>
                </div>

                {filtered.length === 0 && <EmptyResult/>}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.slice(0, visible).map((item) => (
                        <Link
                            key={item.id}
                            href={`/asosiy/${item.id}`}
                            className="group flex flex-col overflow-hidden rounded-xl border border-transparent bg-card transition hover:border-primary"
                        >
                            <img className="h-40 w-full object-cover" src={fileUrl(item.image)} alt=""/>
                            <div className="flex flex-1 flex-col gap-2 p-4">
                                <p className="text-[12px] text-muted">{formatFullDate(item.date)}</p>
                                <h2 className="font-semibold text-white group-hover:text-primary-light">{item.title}</h2>
                                <p className="line-clamp-3 text-[14px] text-muted">{item.content}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {visible < filtered.length && (
                    <button
                        onClick={() => setVisible(visible + PAGE_SIZE)}
                        className="mx-auto rounded-lg bg-card-2 px-5 py-2 text-[14px] text-white hover:bg-line"
                    >
                        Ko‘proq
                    </button>
                )}
            </section>

            <aside className="hidden flex-col gap-6 xl:flex">
                <Karta/>
                <Loyiharivojlantirish/>
            </aside>
        </div>
    );
}
