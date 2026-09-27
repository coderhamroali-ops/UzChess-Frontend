import './globals.css';
import Footer from "@/app/Footer.jsx";
import Header from "@/app/Heder.jsx";


export default function Layout({children}) {
    return <>
        <html>
        <head>
            <title>intixon</title>
        </head>
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    </>
}