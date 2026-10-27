import Link from "next/link";
import {notFound} from "next/navigation";
import {byId, fileUrl, getList} from "@/lib/api";
import {formatPrice} from "@/lib/format";
import {CategoryIcon, LevelIcon, SectionsIcon, StarIcon} from "@/app/commponent/Icons";

export default async function Page({params}) {
    const {id} = await params;

    const [courses, authors, difficulties, categories] = await Promise.all([
        getList("/public/courses/lise?page=1&size=50"),
        getList("/public/authors/list?page=1&size=50"),
        getList("/public/Difficulties/list?page=1&size=50"),
        getList("/public/courseCategories/list?page=1&size=50"),
    ]);

    const course = courses.find((item) => String(item.id) === id);
    if (!course) notFound();

    const price = Number(course.newPrice) > 0 ? course.newPrice : course.price;

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 rounded-xl bg-card p-6 md:grid-cols-[360px_1fr]">
            <img className="aspect-[4/3] w-full rounded-xl object-cover" src={fileUrl(course.image)} alt={course.title}/>

            <div className="flex flex-col gap-4">
                <h1 className="text-[28px] font-bold text-white">{course.title}</h1>
                <p className="text-muted">{byId(authors)[course.authorId]?.fullName}</p>

                <div className="flex flex-wrap gap-5 text-[14px] text-muted">
                    <span className="flex items-center gap-1.5">
                        <StarIcon className="text-gold"/> {Number(course.rating).toFixed(1)} ({course.reviewsCount} ta sharh)
                    </span>
                    <span className="flex items-center gap-1.5">
                        <LevelIcon size={16}/> {byId(difficulties)[course.difficultyId]?.title}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <SectionsIcon size={16}/> {course.sectionsCount} ta bo‘lim, {course.lessonsCount} ta dars
                    </span>
                    <span className="flex items-center gap-1.5">
                        <CategoryIcon size={16}/> {byId(categories)[course.categoryId]?.title}
                    </span>
                </div>

                <p className="text-[22px] font-bold text-success">
                    {Number(course.price) === 0 ? "Bepul kurs" : formatPrice(price)}
                </p>

                <div className="mt-auto flex gap-3">
                    <button className="h-11 rounded-lg bg-primary px-6 font-medium text-white hover:bg-primary-light">
                        Kursni sotib olish
                    </button>
                    <Link href="/kurslar" className="flex h-11 items-center rounded-lg bg-card-2 px-6 text-white hover:bg-line">
                        Orqaga
                    </Link>
                </div>
            </div>
        </div>
    );
}
