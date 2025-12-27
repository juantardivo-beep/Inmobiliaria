import Link from "next/link"
import Image from "next/image"
import logo from "../../assets/logo.svg"
import logoWhite from "../../assets/logo-white.svg"

export default function Logo({ className, footer }) {
  return (
    <Link href="/" className="logo">
      <Image src={footer ? logoWhite : logo} alt="Logo" className={className} />
    </Link>
  )
}
