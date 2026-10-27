import {byId, getList} from "@/lib/api";
import CoursesList from "@/app/kurslar/components/CoursesList";

// Faqat kurslarda ishlatilgan lug'at yozuvlarini filtrga chiqaramiz.
const usedIn = (items, key, dictionary) =>
    dictionary.filter((entry) => items.some((item) => item[key] === entry.id));

export default async function Page() {
    const [courses, authors, difficulties, categories, languages] = await Promise.all([
        getList("/public/courses/lise?page=1&size=50"),
        getList("/public/authors/list?page=1&size=50"),
        getList("/public/Difficulties/list?page=1&size=50"),
        getList("/public/courseCategories/list?page=1&size=50"),
        getList("/public/Languages/list?page=1&size=50"),
    ]);

    const published = courses.filter((course) => course.isPublished);

    return (
        <CoursesList
            courses={published}
            authors={byId(authors)}
            difficulties={usedIn(published, "difficultyId", difficulties)}
            categories={usedIn(published, "categoryId", categories)}
            languages={usedIn(published, "languageId", languages)}
        />
    );
}
