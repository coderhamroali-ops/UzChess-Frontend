"use client";

import {ChevronDown, HeartIcon, SearchIcon, StarIcon} from "@/app/commponent/Icons";

// Kurslar va Kutubxona sahifalari uchun umumiy qismlar.

export function PageTitle({icon, title}) {
    return (
        <div className="flex h-25 items-center justify-center gap-3 rounded-xl bg-card-2 text-[32px] font-bold text-white">
            <span className="text-primary-light">{icon}</span>
            {title}
        </div>
    );
}

export function SearchInput({value, onChange}) {
    return (
        <label className="flex h-13 items-center gap-3 rounded-lg border border-line bg-card px-4 text-muted focus-within:border-primary">
            <SearchIcon size={18}/>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Izlash"
                className="h-full w-full bg-transparent text-[16px] text-white outline-none placeholder:text-muted"
            />
        </label>
    );
}

export function FilterPanel({fields, values, rating, onChange, onRatingChange, onClear}) {
    return (
        <div className="rounded-xl bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[18px] font-medium text-white">Filter</h2>
                <button onClick={onClear} className="text-[14px] text-primary hover:text-primary-light">
                    Tozalash
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {fields.map((field) => (
                    <div key={field.key}>
                        <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-muted">
                            {field.label}
                        </p>
                        <div className="relative">
                            <select
                                value={values[field.key] ?? ""}
                                onChange={(e) => onChange(field.key, e.target.value)}
                                className="h-13 w-full cursor-pointer rounded-lg bg-field px-4 text-[15px] text-white outline-none"
                            >
                                <option value="">Barchasi</option>
                                {field.options.map((option) => (
                                    <option key={option.id} value={option.id}>{option.title}</option>
                                ))}
                            </select>
                            <ChevronDown size={18} className="pointer-events-none absolute right-4 top-4 text-muted"/>
                        </div>
                    </div>
                ))}

                <div>
                    <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-muted">Reyting</p>
                    <div className="flex h-13 items-center gap-3 rounded-lg bg-field px-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => onRatingChange(star === rating ? 0 : star)}
                                className={star <= rating ? "text-gold" : "text-[#3A3F44] hover:text-gold/60"}
                                aria-label={`${star} yulduz va undan yuqori`}
                            >
                                <StarIcon size={24}/>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function RatingBadge({value}) {
    return (
        <span className="flex items-center gap-1 rounded-md border border-white/15 bg-[#0B1418]/60 px-1.5 py-0.5 text-[12px] font-medium text-white backdrop-blur">
            <StarIcon size={12} className="text-gold"/>
            {Number(value ?? 0).toFixed(1)}
        </span>
    );
}

export function LanguageBadge({children}) {
    if (!children) return null;
    return (
        <span className="rounded-md border border-white/15 bg-[#0B1418]/60 px-1.5 py-0.5 text-[11px] font-medium text-[#C9C4A6] backdrop-blur">
            {children}
        </span>
    );
}

export function Meta({icon, children}) {
    if (!children) return null;
    return (
        <span className="flex items-center gap-1.5 whitespace-nowrap">
            {icon}
            {children}
        </span>
    );
}

export function LikeButton() {
    return (
        <button
            onClick={(e) => e.preventDefault()}
            className="text-muted transition hover:text-red-500"
            aria-label="Saqlash"
        >
            <HeartIcon size={20}/>
        </button>
    );
}

export function EmptyResult() {
    return (
        <div className="flex flex-col items-center gap-3 rounded-xl bg-card py-12 text-muted">
            <img src="/bulut.png" alt=""/>
            <p>Hech narsa topilmadi</p>
        </div>
    );
}

// Qidiruv va filtrlarni qo'llaydi.
export function applyFilters(items, {search, values, rating}) {
    const text = search.trim().toLowerCase();
    return items.filter((item) =>
        (!text || item.title?.toLowerCase().includes(text)) &&
        Object.entries(values).every(([key, value]) => !value || String(item[key]) === value) &&
        Number(item.rating ?? 0) >= rating
    );
}
