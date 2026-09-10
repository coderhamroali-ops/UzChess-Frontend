"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const path = usePathname();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const token = localStorage.getItem("accessToken");

                if (!token) {
                    return;
                }

                const response = await fetch(
                    "http://localhost:8888/auth/me",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    console.log("User ma'lumotini olishda xatolik");
                    return;
                }

                const data = await response.json();

                console.log("USER:", data);

                setUser(data);
            } catch (error) {
                console.log("Xatolik:", error);
            }
        };

        getUser();
    }, []);

    return (
        <>
            <div
                className={
                    "flex items-center justify-center w-344 h-19 bg-[#1A1D1F] rounded-2xl text-[#888888] m-3 p-3"
                }
            >
                <div className={"flex w-26 h-10 gap-4 items-center"}>
                    <img src={"/img1.svg"} alt="" />

                    <img
                        className={"w-px h-6"}
                        src={"/img2.svg"}
                        alt=""
                    />
                </div>

                <nav>
                    <div
                        className={
                            "flex justify-center gap-10 ml-70 p-3"
                        }
                    >
                        <Link
                            href={"/"}
                            className={
                                path === "/"
                                    ? "text-amber-50 border-b-2 border-blue-500"
                                    : "text-gray-500 hover:text-blue-500"
                            }
                        >
                            Asosiy
                        </Link>

                        <Link
                            href={"/asosiy"}
                            className={
                                path === "/asosiy"
                                    ? "text-amber-50 border-b-2 border-blue-500"
                                    : "text-gray-500 hover:text-blue-500"
                            }
                        >
                            Yangiliklar
                        </Link>

                        <Link
                            href={"/kurslar"}
                            className={
                                path === "/kurslar"
                                    ? "text-amber-50 border-b-2 border-blue-500"
                                    : "text-gray-500 hover:text-blue-500"
                            }
                        >
                            Kurslar
                        </Link>

                        <Link
                            href={"/Kutubxona"}
                            className={
                                path === "/Kutubxona"
                                    ? "text-amber-50 border-b-2 border-blue-500"
                                    : "text-gray-500 hover:text-blue-500"
                            }
                        >
                            Kutubxona
                        </Link>

                        <p className={"text-gray-500"}>
                            Bog‘lanish
                        </p>
                    </div>
                </nav>

                <div
                    className={
                        "flex gap-7 items-center ml-30"
                    }
                >
                    <img
                        className={"w-6 h-6"}
                        src={"/img3.svg"}
                        alt=""
                    />

                    <img
                        className={"w-6 h-6"}
                        src={"/img4.svg"}
                        alt=""
                    />

                    <img
                        className={"w-6 h-6"}
                        src={"/img5.svg"}
                        alt=""
                    />

                    {user && (
                        <Link
                            href={"/prome"}
                            className={
                                "font-bold flex items-center gap-1 relative right-4"
                            }
                        >
                            {user.fullName}

                            <img
                                className={
                                    "w-14 h-14 rounded-full object-cover"
                                }
                                src={
                                    user.profileImage
                                        ? `http://localhost:8888/uploads/${user.profileImage}`
                                        : "/iiimg.png"
                                }
                                alt={user.fullName}
                            />
                        </Link>
                    )}

                    {!user && (
                        <Link
                            href={"/prome"}
                            className={" flex items-center  w-8 h-8 rounded-sm"}>
                            <img width={32} height={32} className={" w-17 h-10 rounded-full  object-cover"} src={"/Surat.png"} alt=""/>
                        </Link>
                    )}

                    <img
                        className={"w-px h-6"}
                        src={"/img2.svg"}
                        alt=""
                    />

                    <Link href={"/royxat"}>
                        <button
                            className={"flex items-center justify-center text-amber-50 gap-2 hover:scale-108 hover:cursor-pointer w-33 h-10 bg-[#4DB8FF] rounded-lg"}>
                            Kirish

                            <img src="/log-in.svg" alt=""/>
                        </button>
                    </Link>
                </div>
            </div>

            <div className={"flex gap-2 ml-10 text-[#888888] text-[14px]"}>



                {path !== "/" && (
                    <>
                        <img src={"/img14.svg"} alt="" />
                <p>Asosiy</p>
                        <img src={"/img15.svg"} alt="" />

                        <p className={path === "/asosiy" ? "text-white" : ""}>
                            {path === "/asosiy" ? "Yangiliklar" : ""}
                        </p>

                        <p className={path === "/kurslar" ? "text-white" : ""}>
                            {path === "/kurslar" ? "Kurslar" : ""}
                        </p>

                        <p className={path === "/Kutubxona" ? "text-white" : ""}>
                            {path === "/Kutubxona" ? "Kutubxona" : ""}
                        </p>

                        <p className={path === "/asosiy/[id]" ? "text-white" : ""}>
                            {path === "/asosiy/[id]" ? "O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi" : ""}
                        </p>
                    </>
                )}
            </div>
        </>
    );
}