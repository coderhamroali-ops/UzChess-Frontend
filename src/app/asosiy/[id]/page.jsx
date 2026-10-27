import Link from "next/link";
import {notFound} from "next/navigation";
import {fileUrl, getList, getOne} from "@/lib/api";
import {formatFullDate} from "@/lib/format";

export default async function Page({params}) {
    const {id} = await params;

    const [news, latest] = await Promise.all([
        getOne(`/news/public/${id}`),
        getList("/news/public/list?page=1&size=6"),
    ]);

    if (!news) notFound();

    const others = latest.filter((item) => item.id !== news.id).slice(0, 5);

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_326px]">
            <article className="rounded-xl bg-card p-6">
                <p className="text-[14px] text-muted">{formatFullDate(news.date)}</p>
                <h1 className="mt-2 text-[28px] font-bold leading-tight text-white">{news.title}</h1>
                <img className="mt-6 w-full rounded-xl object-cover" src={fileUrl(news.image)} alt={news.title}/>

                <div className="mt-6 flex flex-col gap-4 text-[17px] leading-relaxed text-[#C2C4C5]">
                    {news.content.split(/\n{2,}/).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </article>

            <aside className="flex flex-col gap-3 self-start rounded-xl bg-card p-4">
                <h2 className="text-[18px] font-medium text-white">Boshqa yangiliklar</h2>
                {others.map((item) => (
                    <Link key={item.id} href={`/asosiy/${item.id}`}
                          className="group flex gap-3 border-b border-line py-3 last:border-0">
                        <img className="h-16 w-20 shrink-0 rounded-lg object-cover" src={fileUrl(item.image)} alt=""/>
                        <div>
                            <p className="text-[12px] text-muted">{formatFullDate(item.date)}</p>
                            <p className="line-clamp-2 text-[14px] text-white group-hover:text-primary-light">{item.title}</p>
                        </div>
                    </Link>
                ))}
            </aside>
        </div>
    );
}
