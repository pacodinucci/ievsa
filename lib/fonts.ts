import localFont from "next/font/local";

export const montserrat = localFont({
  src: "../app/fonts/montserrat/Montserrat[wght].ttf",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const source = localFont({
  src: "../app/fonts/sourcesans3/SourceSans3[wght].ttf",
  weight: "200 900",
  style: "normal",
  display: "swap",
});

export const ibm = localFont({
  src: [
    {
      path: "../app/fonts/ibmplexsans/IBMPlexSans[wdth,wght].ttf",
      weight: "100 700",
      style: "normal",
    },
    {
      path: "../app/fonts/ibmplexsans/IBMPlexSans-Italic[wdth,wght].ttf",
      weight: "100 700",
      style: "italic",
    },
  ],
  display: "swap",
});
