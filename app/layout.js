import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { archivo } from "@/utils/font";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.className} bg-white w-full h-full overflow-x-hidden `}>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
