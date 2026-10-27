import {getList} from "@/lib/api";
import NewsList from "@/app/asosiy/components/NewsList";

export default async function NewsPage() {
    const [news, books, authors] = await Promise.all([
        getList("/news/public/list?page=1&size=50"),
        getList("/public/Books/list?page=1&size=50"),
        getList("/public/authors/list?page=1&size=50"),
    ]);

    // Figma'dagi "Top kitoblar" — kutubxonaning birinchi kitobidan keyingi to'rttasi.
    const topBooks = [...books].sort((a, b) => a.id - b.id).slice(1);

    return <NewsList news={news} topBooks={topBooks} authors={authors}/>;
}
