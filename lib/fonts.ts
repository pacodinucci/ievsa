import {
  Inter,
  Roboto_Mono,
  Roboto,
  Oswald,
  Anton,
  Noto_Sans_JP,
  Playfair_Display,
  Montserrat,
  Righteous,
  Raleway,
  Lato,
  Martel_Sans,
  Source_Sans_3,
  IBM_Plex_Sans,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const martel = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const source = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
