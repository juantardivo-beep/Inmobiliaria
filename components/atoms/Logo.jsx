import Link from "next/link"
import Image from "next/image"
import logo from "../../assets/logo.svg"

export default function Logo({className}) {
  return (
    <Link href="/" className="logo">
      <Image src={logo} alt="Logo" className={className} />
    </Link>
  )
}
