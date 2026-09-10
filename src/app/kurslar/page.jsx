import Barcasi from "@/app/kurslar/components/Barcasi";
import Yolduz from "@/app/kurslar/components/yolduz";
import Kurslar from "@/app/kurslar/components/kurslar";
import Karta from "@/app/commponent/Karta";
import Loyiharivojlantirish from "@/app/commponent/Loyiharivojlantirish";

export default function Page() {
    return <div className={"w-min h-300 pl-8"}>
        <div
            className={"flex justify-center items-center w-81.5 h-25 rounded-lg bg-[#232627] text-[32px] text-amber-50 font-bold mt-10"}>
            <img src={"img0009.svg"} alt={""}/>
            <h1 className={"relative right-10"}>Kurslar</h1>
        </div>
        <div className={"relative left-90 bottom-23"}>
            <input className={"w-169 h-13 text-white text-[32px] rounded-lg bg-[#1A1D1F]"}/>
            <div className={"relative bottom-10"}>
                <img src={"input2.svg"} alt={""}/>
            </div>
        </div>
        <div className={"relative bottom-15 w-83.5 h-122.25 bg-[#1A1D1F] rounded-lg p-5"}>
            <div className={"flex items-center gap-50"}>
                <h1 className={"text-amber-50 text-[18px]"}>Filter</h1>
                <h2 className={"text-blue-600"}>Tozalash</h2>
            </div>
            <Barcasi props={"Darajani tanlang:"} img={"Barchasi"}/>
            <div className={"relative bottom-5"}>
                <Barcasi props={"Kategoriya:"} img={"Barchasi"}/>
            </div>
            <div className={"relative bottom-9"}>
                <Barcasi props={"Kategoriya:"} img={"Barchasi"}/>
            </div>
            <div className={"relative bottom-16"}>
                <Yolduz/>
            </div>
        </div>
        <div className={"relative bottom-130 left-90"}>
            <Kurslar img={"img00011.png"} reting={"3.5"} title={"Shaxmat donalari bilan tanishuv"}/>
            <br/>
            <Kurslar img={"img00012.png"} reting={"5.0"} title={"Shoxga hujum qilish"}/>
            <br/>
            <Kurslar img={"img00013.png"} reting={"4.5"} title2={"Mot qilish"}/>
            <br/>
            <Kurslar img={"img00014.png"} reting={"5.0"} title={"Asosiy taktikalar"}/>
        </div>

        <div className={"relative left-267 bottom-370 "}>
            <Karta/>

            <div className={"mt-7"}>
                <Loyiharivojlantirish/>
            </div>
        </div>

    </div>
}
