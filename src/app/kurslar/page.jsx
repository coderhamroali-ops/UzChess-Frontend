import SearchBooks from "@/app/kurslar/components/SearchBooks";
import Barcasi from "@/app/kurslar/components/Barcasi";
import Yolduz from "@/app/kurslar/components/yolduz";

export default async function Page() {
    const response = await fetch(
        "http://localhost:8000/public/Books/list?page=1&size=50"
    );

    if (!response.ok) {
        throw new Error("Books API ishlamadi");
    }

    const data = await response.json();

    console.log("BOOKS API:", data);

    return (
        <>
            <div className="w-min h-min pl-8 flex items-start gap-8">
                <div
                    className="
                        flex
                        justify-center
                        items-center
                        w-81.5
                        h-25
                        rounded-lg
                        bg-[#232627]
                        text-[32px]
                        text-amber-50
                        font-bold
                        mt-10
                    "
                >
                    <img src="/img0009.svg" alt="" />

                    <h1 className="relative right-10">
                        Kurslar
                    </h1>
                </div>

                <div
                    className="w-min h-min"
                    style={{
                        marginTop: "90px",
                    }}
                >
                    <SearchBooks books={data?.data ?? []} />
                </div>
            </div>

            <div className="pl-7 mt-5">
                <div
                    className="
                        absolute
                        bottom-15
                        w-83.5
                        h-122.25
                        bg-[#1A1D1F]
                        rounded-lg
                        p-5
                    "
                >
                    <div className="flex items-center gap-50">
                        <h1 className="text-amber-50 text-[18px]">
                            Filter
                        </h1>

                        <h2 className="text-blue-600">
                            Tozalash
                        </h2>
                    </div>

                    <Barcasi
                        props="Darajani tanlang:"
                        img="Barchasi"
                    />

                    <div className="relative bottom-5">
                        <Barcasi
                            props="Kategoriya:"
                            img="Barchasi"
                        />
                    </div>

                    <div className="relative bottom-9">
                        <Barcasi
                            props="Kategoriya:"
                            img="Barchasi"
                        />
                    </div>

                    <div className="relative bottom-16">
                        <Yolduz />
                    </div>
                </div>
            </div>
        </>
    );
}