// Figma'dagi chiziqli ikonkalar (24x24, stroke). Rangi `currentColor` orqali olinadi.
const base = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

const icon = (paths) =>
    function Icon({ className = "", size = 20, ...props }) {
        return (
            <svg {...base} width={size} height={size} className={className} {...props}>
                {paths}
            </svg>
        );
    };

export const SearchIcon = icon(<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>);
export const CartIcon = icon(<><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 2-1.5L22 7H6"/></>);
export const BellIcon = icon(<><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/></>);
export const LoginIcon = icon(<><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/></>);
export const ChevronDown = icon(<path d="m6 9 6 6 6-6"/>);
export const ChevronRight = icon(<path d="m9 6 6 6-6 6"/>);
export const ArrowRight = icon(<><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>);
export const HeartIcon = icon(<path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6a5 5 0 1 1 7.5 6.6Z"/>);
export const LevelIcon = icon(<><path d="M6 20V14"/><path d="M12 20V9"/><path d="M18 20V4"/></>);
export const SectionsIcon = icon(<><path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="m2 13 10 5 10-5"/></>);
export const CategoryIcon = icon(<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>);
export const UserIcon = icon(<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>);
export const CapIcon = icon(<><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></>);
export const BooksIcon = icon(<><path d="M4 19.5V5a2 2 0 0 1 2-2h4v18H6a2 2 0 0 1-2-1.5Z"/><path d="M10 3h4v18h-4z"/><path d="m15 4 3.8-1 3 17-3.8 1z"/></>);
export const HandIcon = icon(<><path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L14.4 13"/><path d="m2 15 6 6"/></>);

export function StarIcon({ className = "", size = 14, filled = true }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
            <path
                d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6L2.5 9.3l6.6-.8z"
                fill={filled ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function PlayIcon({ className = "", size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
            <path d="M7 4.5v15l12-7.5z" fill="currentColor"/>
        </svg>
    );
}
