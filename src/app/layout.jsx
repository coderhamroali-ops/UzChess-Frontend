import './globals.css';
import {Poppins} from "next/font/google";
import Footer from "@/app/Footer.jsx";
import Header from "@/app/Heder.jsx";
import {AuthProvider} from "@/context/AuthContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "UzChess",
    description: "Shaxmat o‘rgatuvchi ta’lim platformasi",
};

export default function Layout({children}) {
    return (
        <html lang="uz" className={poppins.variable}>
        <body className="min-h-screen font-sans antialiased">
        <AuthProvider>
            <Header/>
            <main className="mx-auto w-full max-w-[1376px] px-4 pb-16">
                {children}
            </main>
            <Footer/>
        </AuthProvider>
        </body>
        </html>
    );
}
