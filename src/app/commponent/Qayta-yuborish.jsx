
"use client";

import { useEffect, useState } from "react";

export default function QaytaYuborish() {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (time === 0) return;

        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    return (
        <div className="flex items-center gap-2">
            <button
                disabled={time !== 0}
                className="flex items-center gap-1 text-[#9DA1A3] disabled:opacity-50"
            >
                <p>Qayta yuborish</p>
            </button>


            <span
                className={time < 30 ? "text-[#E0B531]" : "text-[#8BC34A] "}
            >
                00:{time.toString().padStart(2, "0")}
            </span>
        </div>
    );
}
