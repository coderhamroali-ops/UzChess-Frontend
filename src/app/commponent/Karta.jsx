import {ArrowRight} from "@/app/commponent/Icons";

export default function Karta() {
    return (
        <div className="relative overflow-hidden rounded-xl bg-[#0B4789] p-5">
            <img src="/img19.svg" alt=""/>
            <h3 className="mt-3 max-w-60 text-[20px] font-bold leading-snug text-white">
                Aynan <span className="text-gold">siz</span> uchun qanday imtiyozlar borligini bilib oling
            </h3>
            <button
                className="mt-4 flex h-10 items-center gap-3 rounded-lg bg-primary px-5 text-[14px] font-medium text-white transition hover:bg-primary-light">
                Batafsil <ArrowRight size={16}/>
            </button>
            <img className="absolute right-0 top-0" src="/img000105.svg" alt=""/>
        </div>
    );
}
