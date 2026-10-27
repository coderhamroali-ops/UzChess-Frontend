import Link from "next/link";

const LINKS = [
    {href: "/asosiy/Foydalanish-qoidalari", label: "Biz haqimizda"},
    {href: "/asosiy/Foydalanish-qoidalari", label: "Cookie fayllari siyosati"},
    {href: "/asosiy/Foydalanish-qoidalari", label: "Foydalanish qoidalari"},
    {href: "/Boglanish", label: "Bog‘lanish"},
];

const SOCIALS = ["img9.svg", "img10.svg", "img11.svg", "img12.svg", "img13.svg"];

export default function Footer() {
    return (
        <footer className="mt-16 bg-card">
            <div className="mx-auto flex max-w-[1376px] flex-col items-center gap-6 px-4 py-10">
                <img src="/img1.svg" alt="UzChess"/>

                <nav className="flex flex-wrap justify-center gap-6 text-[14px] text-muted">
                    {LINKS.map((link) => (
                        <Link key={link.label} href={link.href} className="hover:text-white">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-3">
                    {SOCIALS.map((src) => (
                        <img key={src} src={`/${src}`} alt=""/>
                    ))}
                </div>
            </div>

            <div className="border-t border-line">
                <div className="mx-auto flex max-w-[1376px] justify-between px-4 py-4 text-[13px] text-muted">
                    <p>© UzChess. Barcha huquqlar himoyalangan</p>
                    <Link href="/asosiy/Foydalanish-qoidalari" className="hover:text-white">
                        Foydalanish qoidalari
                    </Link>
                </div>
            </div>
        </footer>
    );
}
