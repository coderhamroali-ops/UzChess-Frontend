"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useAuth} from "@/context/AuthContext";
import {fileUrl} from "@/lib/api";
import {BellIcon, CartIcon, ChevronDown, ChevronRight, LoginIcon, SearchIcon} from "@/app/commponent/Icons";

const NAV = [
    {href: "/", label: "Asosiy"},
    {href: "/asosiy", label: "Yangiliklar"},
    {href: "/kurslar", label: "Kurslar"},
    {href: "/Kutubxona", label: "Kutubxona"},
    {href: "/Boglanish", label: "Bog‘lanish"},
];

function isActive(path, href) {
    return href === "/" ? path === "/" : path.startsWith(href);
}

export default function Header() {
    const path = usePathname();
    const {user} = useAuth();
    const current = NAV.find((item) => item.href !== "/" && isActive(path, item.href));

    return (
        <header className="mx-auto w-full max-w-[1376px] px-4 pt-3">
            <div className="flex h-19 items-center justify-between rounded-2xl bg-card px-6">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <img src="/img1.svg" alt="UzChess"/>
                    </Link>
                    <span className="h-6 w-px bg-line"/>
                    <button className="flex items-center gap-1 text-[14px] text-muted hover:text-white">
                        O‘zbekcha <ChevronDown size={16}/>
                    </button>
                </div>

                <nav className="hidden items-center gap-10 text-[14px] lg:flex">
                    {NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                isActive(path, item.href)
                                    ? "border-b-2 border-primary pb-1 font-medium text-white"
                                    : "pb-1 text-muted transition hover:text-white"
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-6 text-muted">
                    <button className="hover:text-white" aria-label="Qidirish"><SearchIcon/></button>
                    <button className="hover:text-white" aria-label="Savatcha"><CartIcon/></button>
                    <button className="hover:text-white" aria-label="Bildirishnomalar"><BellIcon/></button>

                    {user ? (
                        <Link href="/prome" className="flex items-center gap-3 font-medium text-white">
                            {user.fullName}
                            <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={fileUrl(user.profileImage) ?? "/iiimg.png"}
                                alt={user.fullName}
                            />
                        </Link>
                    ) : (
                        <Link
                            href="/royxat"
                            className="flex h-10 items-center gap-2 rounded-lg bg-primary-light px-6 text-[14px] font-medium text-white transition hover:bg-primary"
                        >
                            Kirish <LoginIcon size={18}/>
                        </Link>
                    )}
                </div>
            </div>

            {current && (
                <div className="mt-4 flex items-center gap-2 text-[14px] text-muted">
                    <Link href="/" className="hover:text-white">Asosiy</Link>
                    <ChevronRight size={14}/>
                    <span className="text-white">{current.label}</span>
                </div>
            )}
        </header>
    );
}
