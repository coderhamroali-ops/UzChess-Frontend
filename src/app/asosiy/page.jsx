import {getList} from "@/lib/api";
import NewsList from "@/app/asosiy/components/NewsList";

export default async function NewsPage() {
    const news = await getList("/news/public/list?page=1&size=50");

    return <NewsList news={news}/>;
}
