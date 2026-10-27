"use client";

import {useState} from "react";
import {byId, fileUrl} from "@/lib/api";
import {formatPrice, languageBadge} from "@/lib/format";
import Karta from "@/app/commponent/Karta";
import {BooksIcon, CartIcon, CategoryIcon, LevelIcon, UserIcon} from "@/app/commponent/Icons";
import {
    applyFilters, EmptyResult, FilterPanel, LanguageBadge, LikeButton, Meta, PageTitle, RatingBadge, SearchInput,
} from "@/app/commponent/Katalog";

const PAGE_SIZE = 5;

export default function BooksList({books, authors, difficulties, categories, languages}) {
    const [search, setSearch] = useState("");
    const [values, setValues] = useState({});
    const [rating, setRating] = useState(0);
    const [visible, setVisible] = useState(PAGE_SIZE);

    const difficultyById = byId(difficulties);
    const categoryById = byId(categories);
    const languageById = byId(languages);

    const filtered = applyFilters(books, {search, values, rating});

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[326px_1fr] xl:grid-cols-[326px_1fr_326px]">
            <aside className="flex flex-col gap-6">
                <PageTitle icon={<BooksIcon size={40}/>} title="Kutubxona"/>
                <FilterPanel
                    fields={[
                        {key: "languageId", label: "Tilni tanlang:", options: languages},
                        {key: "difficultyId", label: "Darajani tanlang:", options: difficulties},
                        {key: "categoryId", label: "Kategoriya:", options: categories},
                    ]}
                    values={values}
                    rating={rating}
                    onChange={(key, value) => setValues({...values, [key]: value})}
                    onRatingChange={setRating}
                    onClear={() => {
                        setValues({});
                        setRating(0);
                        setSearch("");
                    }}
                />
            </aside>

            <section className="flex flex-col gap-4">
                <SearchInput value={search} onChange={setSearch}/>

                {filtered.length === 0 && <EmptyResult/>}

                {filtered.slice(0, visible).map((book) => (
                    <article
                        key={book.id}
                        className="group flex gap-5 rounded-xl border border-transparent bg-card p-4 transition hover:border-primary"
                    >
                        <div className="relative h-44 w-33 shrink-0 overflow-hidden rounded-lg bg-card-2">
                            <img className="h-full w-full object-cover" src={fileUrl(book.image)} alt={book.title}/>
                            <span className="absolute left-2 top-2"><RatingBadge value={book.rating}/></span>
                            <span className="absolute bottom-2 left-2">
                                <LanguageBadge>{languageBadge(languageById[book.languageId]?.code)}</LanguageBadge>
                            </span>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col">
                            <h3 className="text-[18px] font-semibold text-white group-hover:text-primary-light">
                                {book.title}
                            </h3>

                            <Price price={book.price} newPrice={book.newPrice}/>

                            <div className="mt-4 flex flex-wrap items-center gap-4 text-[13px] text-muted">
                                <Meta icon={<LevelIcon size={16}/>}>{difficultyById[book.difficultyId]?.title}</Meta>
                                <Meta icon={<CategoryIcon size={16}/>}>{categoryById[book.categoryId]?.title}</Meta>
                                <Meta icon={<UserIcon size={16}/>}>{authors[book.authorId]?.fullName}</Meta>
                            </div>

                            <div className="mt-auto flex items-center justify-between pt-4">
                                <button
                                    className="flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-[14px] font-medium text-white transition hover:bg-primary-light">
                                    <CartIcon size={18}/> Savatchaga
                                </button>
                                <LikeButton/>
                            </div>
                        </div>
                    </article>
                ))}

                {visible < filtered.length && (
                    <button
                        onClick={() => setVisible(visible + PAGE_SIZE)}
                        className="mx-auto mt-2 rounded-lg bg-card-2 px-5 py-2 text-[14px] text-white hover:bg-line"
                    >
                        Ko‘proq
                    </button>
                )}
            </section>

            <aside className="hidden flex-col gap-6 xl:flex">
                <Karta/>
                <a href="https://yoshlar.gov.uz" target="_blank" rel="noreferrer">
                    <img src="/yoshlar-banner.png" alt="Yoshlar ishlari agentligi" className="w-full"/>
                </a>
            </aside>
        </div>
    );
}

function Price({price, newPrice}) {
    const hasDiscount = Number(newPrice) > 0 && Number(newPrice) < Number(price);

    if (Number(price) === 0) {
        return <p className="mt-2 text-[16px] font-bold text-success">Bepul</p>;
    }

    return (
        <div className="mt-2">
            {hasDiscount && (
                <p className="text-[12px] text-muted line-through decoration-red-500">{formatPrice(price)}</p>
            )}
            <p className="text-[16px] font-bold text-success">{formatPrice(hasDiscount ? newPrice : price)}</p>
        </div>
    );
}
