import './globals.css';
import Heder from "@/app/Heder";
import Footer from "@/app/Footer";

export default function Layout({children}) {
    return <>
        <html>
        <head>
            <title>intixon</title>
        </head>
        <body>
        <Heder/>
        {children }
        <Footer/>
        </body>
        </html>
    </>
}