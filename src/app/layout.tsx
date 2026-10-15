import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';



config.autoAddCss = false;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-TW">
            <body>
                <Header />

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    );
}