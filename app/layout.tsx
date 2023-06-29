import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppinsFont = Poppins({ subsets: ["latin"], weight: ["500", "700"] })

export const metadata = {
  title: "Devsources",
  description: "Resources for developers"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} bg-slate-50`}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  )
}
