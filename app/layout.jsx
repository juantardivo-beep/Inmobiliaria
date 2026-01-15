
import Header from "@/components/organisms/header/Header"
import Footer from "@/components/organisms/footer/Footer"
import "./styles/main.css"
import WppBtn from "../components/atoms/Wpp/WppBtn"
import { Providers } from "../store/providers"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="min-vh-100">{children}</main>
          <Footer />
          <WppBtn />
        </Providers>
      </body>
    </html>
  )
}
