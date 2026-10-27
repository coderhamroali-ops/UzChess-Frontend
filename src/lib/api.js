export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

async function request(path, { method = "GET", body, headers = {} } = {}) {
    const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const res = await fetch(`${API_URL}${path}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Xatolik: ${res.status}`);
    }
    return res.status === 204 ? null : res.json();
}

export const api = {
    get: (p) => request(p),
    post: (p, body) => request(p, { method: "POST", body }),
    put: (p, body) => request(p, { method: "PUT", body }),
    del: (p) => request(p, { method: "DELETE" }),
};

// Server komponentlar uchun: ro'yxatni oladi, backend ishlamasa bo'sh massiv qaytaradi.
export async function getList(path) {
    try {
        const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
        if (!res.ok) return [];
        const json = await res.json();
        return Array.isArray(json) ? json : json.data ?? [];
    } catch {
        return [];
    }
}

// Backend rasm yo'lini ("uploads\\image\\a.png" yoki to'liq URL) brauzer uchun URL'ga aylantiradi.
export function fileUrl(path) {
    if (!path) return null;
    if (/^https?:\/\//.test(path)) return path;
    return `${API_URL}/${path.replace(/\\/g, "/").replace(/^\/+/, "")}`;
}

export const byId = (list) => Object.fromEntries(list.map((item) => [item.id, item]));
