import localFont from "next/font/local";

import { Archivo } from "next/font/google";


// export const mediumaeonikFont = localFont({
//     src: "./fonts/Aeonik-Medium.otf",
// });
// export const boldaeonikFont = localFont({
//     src: "./fonts/Aeonik-Bold.otf",
// });
// export const regularaeonikFont = localFont({
//     src: "./fonts/Aeonik-Regular.otf",
// });
export const archivo = Archivo({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});

