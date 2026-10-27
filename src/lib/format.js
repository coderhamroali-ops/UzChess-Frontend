const MONTHS = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr",
];

// 96000 -> "96 000.00 uzs"
export function formatPrice(value) {
    const [whole, fraction] = Number(value ?? 0).toFixed(2).split(".");
    return `${whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}.${fraction} uzs`;
}

// "2026-10-19" -> "19 Oktabr"
export function formatDayMonth(date) {
    const d = new Date(date);
    return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

// "2026-09-07" -> "Sentabr 7, 2026"
export function formatFullDate(date) {
    const d = new Date(date);
    return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

const LANGUAGE_BADGES = { uz: "O‘z", ru: "Ру", en: "En" };

export const languageBadge = (code) => LANGUAGE_BADGES[code] ?? code?.toUpperCase() ?? "";
