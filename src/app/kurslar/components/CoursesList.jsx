"use client";

import {useState} from "react";
import Link from "next/link";
import {byId, fileUrl} from "@/lib/api";
import {formatPrice, languageBadge} from "@/lib/format";
import Karta from "@/app/commponent/Karta";
import Loyiharivojlantirish from "@/app/commponent/Loyiharivojlantirish";
import {CapIcon, CategoryIcon, LevelIcon, SectionsIcon} from "@/app/commponent/Icons";
import {
    applyFilters, EmptyResult, FilterPanel, LanguageBadge, LikeButton, Meta, PageTitle, RatingBadge, SearchInput,
} from "@/app/commponent/Katalog";

const PAGE_SIZE = 4;

export default function CoursesList({courses, authors, difficulties, categories, languages}) {
    const [search, setSearch] = useState("");
    const [values, setValues] = useState({});
    const [rating, setRating] = useState(0);
    const [visible, setVisible] = useState(PAGE_SIZE);

    const difficultyById = byId(difficulties);
    const categoryById = byId(categories);
    const languageById = byId(languages);

    const filtered = applyFilters(courses, {search, values, rating});

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[326px_1fr] xl:grid-cols-[326px_1fr_326px]">
            <aside className="flex flex-col gap-6">
                <PageTitle icon={<CapIcon size={40}/>} title="Kurslar"/>
                <FilterPanel
                    fields={[
                        {key: "difficultyId", label: "Darajani tanlang:", options: difficulties},
                        {key: "categoryId", label: "Kategoriya:", options: categories},
                        {key: "languageId", label: "Darslik tili:", options: languages},
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

                {filtered.slice(0, visible).map((course) => (
                    <Link
                        key={course.id}
                        href={`/kurslar/${course.id}`}
                        className="group flex gap-5 rounded-xl border border-transparent bg-card p-4 transition hover:border-primary"
                    >
                        <div className="relative h-35 w-46 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-card-2">
                            <img className="h-full w-full object-cover" src={fileUrl(course.image)} alt={course.title}/>
                            <span className="absolute left-2 top-2"><RatingBadge value={course.rating}/></span>
                            <span className="absolute bottom-2 left-2">
                                <LanguageBadge>{languageBadge(languageById[course.languageId]?.code)}</LanguageBadge>
                            </span>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col">
                            <h3 className="text-[18px] font-semibold text-white group-hover:text-primary-light">
                                {course.title}
                            </h3>
                            <p className="text-[13px] text-muted">{authors[course.authorId]?.fullName}</p>

                            <Price price={course.price} newPrice={course.newPrice}/>

                            <div className="mt-auto flex items-center justify-between gap-4">
                                <div className="flex flex-wrap items-center gap-4 text-[13px] text-muted">
                                    <Meta icon={<LevelIcon size={16}/>}>{difficultyById[course.difficultyId]?.title}</Meta>
                                    <Meta icon={<SectionsIcon size={16}/>}>{course.sectionsCount} ta bo‘lim</Meta>
                                    <Meta icon={<CategoryIcon size={16}/>}>{categoryById[course.categoryId]?.title}</Meta>
                                </div>
                                <LikeButton/>
                            </div>
                        </div>
                    </Link>
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
                <Loyiharivojlantirish/>
            </aside>
        </div>
    );
}

function Price({price, newPrice}) {
    const hasDiscount = newPrice != null && Number(newPrice) > 0 && Number(newPrice) < Number(price);

    if (Number(price) === 0) {
        return <p className="mt-3 text-[16px] font-bold text-success">Bepul kurs</p>;
    }

    return (
        <div className="mt-3">
            {hasDiscount && (
                <p className="text-[12px] text-muted line-through decoration-red-500">{formatPrice(price)}</p>
            )}
            <p className="text-[16px] font-bold text-success">{formatPrice(hasDiscount ? newPrice : price)}</p>
        </div>
    );
}
