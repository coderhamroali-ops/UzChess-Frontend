import Link from "next/link";
import {byId, fileUrl} from "@/lib/api";
import {ChevronRight} from "@/app/commponent/Icons";

// Figma: o'ng ustundagi "Top kitoblar" bloki.
export default function TopKitoblar({books, authors}) {
    const authorById = byId(authors);

    return (
        <div className="rounded-xl bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[18px] font-medium text-white">Top kitoblar</h2>
                <Link href="/Kutubxona" className="flex items-center gap-1 text-[14px] text-muted hover:text-white">
                    Barchasi <ChevronRight size={14}/>
                </Link>
            </div>
            <div className="flex flex-col">
                {books.slice(0, 4).map((book) => (
                    <Link key={book.id} href="/Kutubxona"
                          className="group flex gap-3 border-b border-line py-3 last:border-0">
                        <img className="h-17 w-12 shrink-0 rounded object-cover" src={fileUrl(book.image)} alt=""/>
                        <div className="flex flex-col justify-between">
                            <p className="text-[14px] font-medium text-white group-hover:text-primary-light">{book.title}</p>
                            <p className="text-[12px] text-muted">{authorById[book.authorId]?.fullName}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
