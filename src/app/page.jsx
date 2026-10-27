import Link from "next/link";
import {byId, fileUrl, getList} from "@/lib/api";
import {formatDayMonth, formatFullDate} from "@/lib/format";
import Karta from "@/app/commponent/Karta";
import Loyiharivojlantirish from "@/app/commponent/Loyiharivojlantirish";
import {ArrowRight, BooksIcon, CapIcon, ChevronRight, StarIcon} from "@/app/commponent/Icons";

const MATCH_TYPES = [
    {label: "Classic", className: "text-primary-light"},
    {label: "Rapid", className: "text-gold"},
    {label: "Blitz", className: "text-success"},
];

// winner: 0 - birinchi o'yinchi, 1 - ikkinchi, 2 - durang
const SCORES = {0: ["1", "0"], 1: ["0", "1"], 2: ["½", "½"]};

export default async function Page() {
    const [players, matches, news, courses] = await Promise.all([
        getList("/public/players/list?page=1&size=50"),
        getList("/public/matches/list?page=1&size=10"),
        getList("/news/public/list?page=1&size=4"),
        getList("/public/courses/lise?page=1&size=50"),
    ]);

    const playerById = byId(players);
    const ranking = [...players].sort((a, b) => (b.classic ?? 0) - (a.classic ?? 0)).slice(0, 5);
    const topCourses = courses
        .filter((course) => course.isPublished)
        .sort((a, b) => Number(b.rating) - Number(a.rating))
        .slice(0, 4);
    const dayMatch = matches[0];

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
                    {dayMatch && (
                        <div className="mt-3 flex items-center justify-between rounded-lg bg-card-2 px-4 py-3 text-[13px]">
                            <span className="text-white">{playerById[dayMatch.firstPlayer]?.fulName}</span>
                            <span className="font-bold text-primary-light">VS</span>
                            <span className="text-right text-white">{playerById[dayMatch.secondPlayer]?.fulName}</span>
                        </div>
                    )}
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
                            <thead className="bg-line text-[12px] text-muted">
                            <tr>
                                <th className="rounded-l-md px-3 py-2 font-medium">O‘yinchilar</th>
                                <th className="px-3 py-2 font-medium">Natija</th>
                                <th className="px-3 py-2 font-medium">O‘yin turi</th>
                                <th className="px-3 py-2 font-medium">Yurishlar</th>
                                <th className="rounded-r-md px-3 py-2 font-medium">Sana</th>
                            </tr>
                            </thead>
                            <tbody>
                            {matches.map((match) => {
                                const [first, second] = [playerById[match.firstPlayer], playerById[match.secondPlayer]];
                                const [firstScore, secondScore] = SCORES[match.winner] ?? ["-", "-"];
                                const type = MATCH_TYPES[match.type] ?? MATCH_TYPES[0];
                                return (
                                    <tr key={match.id} className="border-b border-line last:border-0">
                                        <td className="px-3 py-3">
                                            <p className="text-white">
                                                {first?.fulName} <span className="text-muted">({first?.classic})</span>
                                            </p>
                                            <p className="text-white">
                                                {second?.fulName} <span className="text-muted">({second?.classic})</span>
                                            </p>
                                        </td>
                                        <td className="px-3 py-3 text-white">
                                            <p>{firstScore}</p>
                                            <p>{secondScore}</p>
                                        </td>
                                        <td className={`px-3 py-3 font-medium ${type.className}`}>{type.label}</td>
                                        <td className="px-3 py-3 text-white">{match.moves}</td>
                                        <td className="px-3 py-3 text-white">{formatDayMonth(match.date)}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <div className="flex items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-[#06131D] via-[#0B2740] to-[#163B5B] px-6 py-5">
                    <div>
                        <p className="text-[12px] uppercase tracking-widest text-primary-light">Haftalik turnir</p>
                        <p className="text-[24px] font-bold text-white">UzChess Global Championship</p>
                    </div>
                    <Link href="/asosiy"
                          className="rounded-lg bg-[#0B1418]/70 px-6 py-2.5 text-[14px] font-medium text-white hover:bg-primary">
                        Ko‘rish
                    </Link>
                </div>

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
                    <div className="flex flex-col gap-2">
                        {topCourses.map((course) => (
                            <Link key={course.id} href={`/kurslar/${course.id}`}
                                  className="flex gap-3 rounded-lg p-2 transition hover:bg-card-2">
                                <img className="h-16 w-16 shrink-0 rounded-lg object-cover" src={fileUrl(course.image)} alt=""/>
                                <div>
                                    <p className="text-[14px] font-medium text-white">{course.title}</p>
                                    <p className="mt-1 flex items-center gap-1 text-[12px] text-muted">
                                        <StarIcon size={12} className="text-gold"/> {Number(course.rating).toFixed(1)}
                                        <span className="ml-2">{course.reviewsCount} ta sharh</span>
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Card>
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
