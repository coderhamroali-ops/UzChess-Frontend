import Link from "next/link";
import {byId, fileUrl, getList} from "@/lib/api";
import {formatDayMonth, formatFullDate} from "@/lib/format";
import Karta from "@/app/commponent/Karta";
import Loyiharivojlantirish from "@/app/commponent/Loyiharivojlantirish";
import TopKitoblar from "@/app/commponent/TopKitoblar";
import {ArrowRight, BooksIcon, CapIcon, ChevronRight, StarIcon} from "@/app/commponent/Icons";

// MatchType: 0 Classic, 1 Rapid, 2 Blitz, 3 Bullet. Belgilar Figma eksportidan.
const MATCH_TYPES = {
    0: {label: "Classic", rating: "classic"},
    1: {label: "Rapid", rating: "rapid", icon: "/img00055.svg"},
    2: {label: "Blitz", rating: "blitz", icon: "/img00057.svg"},
    3: {label: "Bullet", rating: "blitz", icon: "/img00056.svg"},
};

// winner: 0 - birinchi o'yinchi, 1 - ikkinchi, 2 - durang
const isWinner = (match, side) => match.winner === side;

export default async function Page() {
    const [players, matches, news, courses, books, authors] = await Promise.all([
        getList("/public/players/list?page=1&size=50"),
        getList("/public/matches/list?page=1&size=50"),
        getList("/news/public/list?page=1&size=4"),
        getList("/public/courses/lise?page=1&size=50"),
        getList("/public/Books/list?page=1&size=50"),
        getList("/public/authors/list?page=1&size=50"),
    ]);

    const playerById = byId(players);
    const ranking = [...players].sort((a, b) => (b.classic ?? 0) - (a.classic ?? 0)).slice(0, 5);
    const lastMatches = [...matches].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
    const topCourses = courses.filter((course) => course.isPublished).sort((a, b) => a.id - b.id).slice(0, 4);
    // Figma'dagi "Top kitoblar" — kutubxonaning birinchi kitobidan keyingi to'rttasi.
    const topBooks = [...books].sort((a, b) => a.id - b.id).slice(1);

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[326px_1fr] xl:grid-cols-[326px_1fr_326px]">
            <aside className="flex flex-col gap-6">
                <Card title="Kun o‘yini" action="Ko‘rish" href="/asosiy">
                    <iframe
                        className="aspect-video w-full rounded-lg"
                        src="https://www.youtube.com/embed/Fs4jUSLfg6c"
                        title="Kun o‘yini"
                        allowFullScreen
                    />
                    <div className="mt-3 flex items-center justify-between rounded-lg bg-card-2 px-4 py-3 text-[13px]">
                        <span className="text-white">Abdusattorov Nodirbek</span>
                        <img src="/img00036.svg" alt="" className="h-8 w-8"/>
                        <span className="text-right text-white">Magnus Carlsen</span>
                    </div>
                </Card>

                <Card title="Reyting" action="Barchasi" href="/Reyting">
                    <ol className="flex flex-col">
                        {ranking.map((player, index) => (
                            <li key={player.id}
                                className="flex items-center justify-between border-b border-line py-3 last:border-0">
                                <span className="flex items-center gap-2 text-[14px] text-white">
                                    {index === 0
                                        ? <StarIcon size={14} className="text-gold"/>
                                        : <span className="w-3.5 text-muted">{index + 1}.</span>}
                                    {player.fulName}
                                </span>
                                <span className="text-[14px] font-medium text-white">{player.classic}</span>
                            </li>
                        ))}
                    </ol>
                </Card>
            </aside>

            <section className="flex min-w-0 flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <SectionLink href="/kurslar" icon={<CapIcon size={36}/>} title="Kurslar"/>
                    <SectionLink href="/Kutubxona" icon={<BooksIcon size={36}/>} title="Kutubxona"/>
                </div>

                <Card title="Yakunlangan o‘yinlar" action="Barchasi" href="/Reyting">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[560px] text-left text-[13px]">
                            <thead className="bg-line text-[11px] uppercase text-muted">
                            <tr>
                                <th className="rounded-l-md px-3 py-2 font-medium">O‘yinchilar</th>
                                <th className="px-3 py-2 font-medium">Natija</th>
                                <th className="px-3 py-2 font-medium">O‘yin turi</th>
                                <th className="px-3 py-2 font-medium">Yurishlar</th>
                                <th className="rounded-r-md px-3 py-2 font-medium">Sana</th>
                            </tr>
                            </thead>
                            <tbody>
                            {lastMatches.map((match) => {
                                const type = MATCH_TYPES[match.type] ?? MATCH_TYPES[0];
                                const sides = [
                                    [playerById[match.firstPlayer], match.firstPlayerResult, 0],
                                    [playerById[match.secondPlayer], match.secondPlayerResult, 1],
                                ];
                                return (
                                    <tr key={match.id} className="border-b border-line last:border-0">
                                        <td className="px-3 py-3">
                                            {sides.map(([player, , side]) => (
                                                <p key={side} className="flex items-center gap-2 text-white">
                                                    <img
                                                        src={isWinner(match, side) ? "/img00050.svg" : "/img00051.svg"}
                                                        alt="" className="h-3.5 w-3.5"
                                                    />
                                                    {player?.fulName}
                                                    <span className="text-muted">({player?.[type.rating] ?? player?.classic})</span>
                                                </p>
                                            ))}
                                        </td>
                                        <td className="px-3 py-3 text-white">
                                            {sides.map(([, result, side]) => <p key={side}>{result}</p>)}
                                        </td>
                                        <td className="px-3 py-3">
                                            {type.icon
                                                ? <img src={type.icon} alt={type.label} className="h-4"/>
                                                : <span className="text-primary-light">{type.label}</span>}
                                        </td>
                                        <td className="px-3 py-3 text-white">{match.moves}</td>
                                        <td className="px-3 py-3 text-white">{formatDayMonth(match.date)}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <Link href="/asosiy" className="block overflow-hidden rounded-xl">
                    <img src="/img00060.svg" alt="2022 Chess.com Global Championship" className="w-full"/>
                </Link>

                <div>
                    <div className="mb-3 flex items-center justify-between">
                        <h2 className="text-[20px] font-semibold text-white">Yangiliklar</h2>
                        <Link href="/asosiy" className="flex items-center gap-1 text-[14px] text-muted hover:text-white">
                            Barchasi <ChevronRight size={14}/>
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        {news.map((item) => (
                            <Link key={item.id} href={`/asosiy/${item.id}`}
                                  className="group flex gap-5 border-b border-line py-4 last:border-0">
                                <img className="h-28 w-44 shrink-0 rounded-xl object-cover" src={fileUrl(item.image)} alt=""/>
                                <div className="min-w-0">
                                    <p className="text-[12px] text-muted">{formatFullDate(item.date)}</p>
                                    <h3 className="mt-1 font-semibold text-white group-hover:text-primary-light">{item.title}</h3>
                                    <p className="mt-2 line-clamp-2 text-[14px] text-muted">{item.content}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <aside className="hidden flex-col gap-6 xl:flex">
                <Loyiharivojlantirish/>
                <Karta/>
                <Card title="Top kurslar" action="Barchasi" href="/kurslar">
                    <div className="flex flex-col">
                        {topCourses.map((course) => (
                            <Link key={course.id} href={`/kurslar/${course.id}`}
                                  className="group flex gap-3 border-b border-line py-3 last:border-0">
                                <img className="h-16 w-16 shrink-0 rounded-lg object-cover" src={fileUrl(course.image)} alt=""/>
                                <div>
                                    <p className="text-[14px] font-medium text-white group-hover:text-primary-light">{course.title}</p>
                                    <p className="mt-1 flex items-center gap-1 text-[12px] text-white">
                                        <StarIcon size={12} className="text-gold"/> {Number(course.rating).toFixed(1)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Card>
                <TopKitoblar books={topBooks} authors={authors}/>
            </aside>
        </div>
    );
}

function Card({title, action, href, children}) {
    return (
        <div className="rounded-xl bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[18px] font-medium text-white">{title}</h2>
                {action && (
                    <Link href={href} className="flex items-center gap-1 text-[14px] text-muted hover:text-white">
                        {action} <ChevronRight size={14}/>
                    </Link>
                )}
            </div>
            {children}
        </div>
    );
}

function SectionLink({href, icon, title}) {
    return (
        <Link href={href}
              className="group flex h-27 items-center justify-between rounded-xl border border-[#1E4A6B] bg-gradient-to-r from-[#06131D] via-[#0B2740] to-[#163B5B] px-6 transition hover:border-primary">
            <span className="flex items-center gap-4 text-[20px] font-bold text-white">
                <span className="text-primary-light">{icon}</span>
                {title}
            </span>
            <ArrowRight className="text-muted transition group-hover:translate-x-1 group-hover:text-white"/>
        </Link>
    );
}
