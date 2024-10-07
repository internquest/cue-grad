import localFont from "next/font/local";
import { Epilogue } from "next/font/google";
import { Almarai } from "next/font/google";

export const mediumaeonikFont = localFont({
    src: "./fonts/Aeonik-Medium.otf",
});
export const boldaeonikFont = localFont({
    src: "./fonts/Aeonik-Bold.otf",
});
export const regularaeonikFont = localFont({
    src: "./fonts/Aeonik-Regular.otf",
});
export const epilogue = Epilogue({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});
export const almarai = Almarai({
    subsets: ['arabic'],
    weight: ['300', '400', '700', '800'],
});

