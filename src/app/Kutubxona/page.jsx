import Kurslar2 from "./components/kurslar2.jsx";
import Barcasi from "@/app/kurslar/components/Barcasi";
import Yolduz from "@/app/kurslar/components/yolduz";
import Karta from "@/app/commponent/Karta";

export default  function Page() {

    return <div className={"w-min h-320"}>
        <div
            className={"flex justify-center items-center w-81.5 h-25 rounded-lg bg-[#232627] text-[32px] text-amber-50 font-bold mt-10"}>
            <img src={"img0009.svg"} alt={""}/>
            <h1 className={"relative right-10"}>Kurslar</h1>
        </div>
        <div className={"relative left-90 bottom-23"}>
            <input className={"w-169 h-13 rounded-lg text-amber-50 text-[32px] bg-[#1A1D1F]"}/>
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


            <br/>
            <Kurslar2 img={"imgk4.svg"} reting={"5.0"} py={"O`z"} title={"Zurixdagi shaxmat musobaqasi"}/>
            <br/>
            <Kurslar2 img={"imgk6.svg"} reting={"5.0"} py={"py"} title={"Mening esdaqolarlik o‘yinlarim"}/>
        </div>

        <div className={"relative bottom-455 left-266"}>
            <Karta/>
        </div>

        <div className={"relative bottom-455 left-258"}>
            <img className={"w-105 h-150"} src={"img00030.png"} alt={""}/>
        </div>
    </div>
}
