import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"NFC Tapeador",description:"Llaveros NFC inteligentes para personas, mascotas, recuerdos y empresas."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}