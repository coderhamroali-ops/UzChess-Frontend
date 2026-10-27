import {byId, getList} from "@/lib/api";
import BooksList from "@/app/Kutubxona/components/BooksList";

// Faqat kitoblarda ishlatilgan lug'at yozuvlarini filtrga chiqaramiz.
const usedIn = (items, key, dictionary) =>
    dictionary.filter((entry) => items.some((item) => item[key] === entry.id));

export default async function Page() {
    const [books, authors, difficulties, categories, languages] = await Promise.all([
        getList("/public/Books/list?page=1&size=50"),
        getList("/public/authors/list?page=1&size=50"),
        getList("/public/Difficulties/list?page=1&size=50"),
        getList("/public/book-categories/list?page=1&size=50"),
        getList("/public/Languages/list?page=1&size=50"),
    ]);

    return (
        <BooksList
            books={books}
            authors={byId(authors)}
            difficulties={usedIn(books, "difficultyId", difficulties)}
            categories={usedIn(books, "categoryId", categories)}
            languages={usedIn(books, "languageId", languages)}
        />
    );
}
