import { Roboto } from 'next/font/google'
import Navbar from "@/app/component/layers/Navbar";
import Footer from "@/app/component/layers/Footer";
import StoreProvider from "@/app/lib/StoreProvider";
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Details",
};
const roboto = Roboto({
  weight: ['400', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
