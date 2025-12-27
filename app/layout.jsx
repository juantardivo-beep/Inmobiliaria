import Header from "@/components/organisms/header/Header"
import Footer from "@/components/organisms/footer/Footer"
import "./styles/main.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-vh-100">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
