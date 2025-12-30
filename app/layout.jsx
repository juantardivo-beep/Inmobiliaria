import Header from "@/components/organisms/header/Header"
import Footer from "@/components/organisms/footer/Footer"
import "./styles/main.css"
import WppBtn from "../components/atoms/Wpp/WppBtn"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-vh-100">{children}</main>
        <Footer />
        <WppBtn/>
      </body>
    </html>
  )
}
