import {HandIcon} from "@/app/commponent/Icons";

export default function Loyiharivojlantirish() {
    return (
        <div className="flex items-center gap-4 rounded-xl bg-card px-5 py-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary-light">
                <HandIcon size={24}/>
            </span>
            <div>
                <p className="flex items-center gap-2 font-medium text-white">
                    Loyiha rivojiga hissa
                    <span className="whitespace-nowrap rounded bg-primary px-1.5 text-[10px]">tez orada</span>
                </p>
                <p className="text-[13px] text-muted">Shaxmat rivojiga hissa qo‘shing</p>
            </div>
        </div>
    );
}
