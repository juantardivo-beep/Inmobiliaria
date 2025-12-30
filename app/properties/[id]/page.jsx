import PropertyClient from './PropertyClient';
import placeholderImg from "../../../assets/contemporary-home-with-mountain-views.jpg"
import { COUNTRIES } from '../../../constants/constants';
import property from "../../../assets/contemporary-home-with-mountain-views.jpg"

// Importa tus propiedades (ajusta la ruta según donde esté tu archivo)
const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "Manhattan, NY",
    price: 2850000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    image: property,
    featured: true,
    type: 'Venta',
    country: COUNTRIES.URUGUAY,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: 2,
    title: "Waterfront Villa",
    location: "Miami Beach, FL",
    price: 4500000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    image: property,
    featured: true,
    type: 'Alquiler',
    country: COUNTRIES.URUGUAY,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    location: "Los Angeles, CA",
    price: 3200000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3500,
    image: property,
    featured: true,
    type: 'Venta',
    country: COUNTRIES.URUGUAY,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: 4,
    title: "Historic Townhouse",
    location: "Brooklyn, NY",
    price: 1950000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2800,
    image: property,
    featured: true,
    type: 'Venta',
    country: COUNTRIES.ARGENTINA,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: "uy-1",
    title: "Apartamento frente al mar",
    location: "Punta del Este, Uruguay",
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 120,
    image: placeholderImg,
    featured: true,
    type: 'Alquiler',
    country: COUNTRIES.URUGUAY,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: "uy-2",
    title: "Casa familiar en barrio tranquilo",
    location: "Montevideo, Uruguay",
    price: 320000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 200,
    image: placeholderImg,
    type: 'Alquiler',
    country: COUNTRIES.URUGUAY,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: "br-1",
    title: "Penthouse en la playa",
    location: "Florianópolis, Brasil",
    price: 780000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 300,
    image: placeholderImg,
    featured: true,
    type: 'Venta',
    country: COUNTRIES.BRASIL,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: "br-2",
    title: "Condominio moderno",
    location: "São Paulo, Brasil",
    price: 520000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 180,
    image: placeholderImg,
    type: 'Venta',
    country: COUNTRIES.BRASIL,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: "ar-1",
    title: "Condominio moderno",
    location: "Buenos Aires, Argentina",
    price: 520000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 180,
    image: placeholderImg,
    type: 'Venta',
    country: COUNTRIES.ARGENTINA,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: "ar-2",
    title: "Condominio moderno",
    location: "Santa Fe, Argentina",
    price: 520000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 180,
    image: placeholderImg,
    type: 'Alquiler',
    country: COUNTRIES.ARGENTINA,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
];

export async function generateStaticParams() {
  const params = SAMPLE_PROPERTIES.map((property) => ({
    id: property.id.toString(),
  }));

  return params;
}

export default async function PropertyPage({ params }) {
  const { id } = await params;
  const property = SAMPLE_PROPERTIES.find(p => p.id.toString() === id);

  if (!property) {
    return <div>Propiedad no encontrada</div>;
  }

  return <PropertyClient property={property} />;
}