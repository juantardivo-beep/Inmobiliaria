"use client"
import GoogleMaps from '../../components/molecules/googleMaps/googleMaps'
import ContactForm from "../../components/organisms/contact/ContactForm"

export default function ContactoPage() {
  return (
    <main className="min-vh-100">
      <GoogleMaps />
      <ContactForm />
    </main>
  )
}
