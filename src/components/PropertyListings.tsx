import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: 1250000,
    address: "1423 Maple Avenue",
    city: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "House",
    isNew: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: 875000,
    address: "892 Ocean View Drive",
    city: "Malibu, CA",
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: "House",
    isNew: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    price: 2100000,
    address: "456 Sunset Boulevard",
    city: "Los Angeles, CA",
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "House",
    isNew: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: 650000,
    address: "789 Downtown Lofts",
    city: "San Diego, CA",
    beds: 2,
    baths: 2,
    sqft: 1400,
    type: "Condo",
    isNew: false,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    price: 1850000,
    address: "234 Hillside Estate",
    city: "Santa Monica, CA",
    beds: 4,
    baths: 3,
    sqft: 3800,
    type: "House",
    isNew: true,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    price: 425000,
    address: "567 Park Avenue",
    city: "Pasadena, CA",
    beds: 2,
    baths: 1,
    sqft: 950,
    type: "Apartment",
    isNew: false,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: 3200000,
    address: "100 Luxury Lane",
    city: "Newport Beach, CA",
    beds: 6,
    baths: 5,
    sqft: 5800,
    type: "House",
    isNew: false,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    price: 720000,
    address: "321 Marina Bay",
    city: "Long Beach, CA",
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "Townhouse",
    isNew: true,
  },
];

const PropertyListings = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
              Featured Properties
            </h2>
            <p className="text-muted-foreground">
              Discover our handpicked selection of exceptional homes
            </p>
          </div>
          <a
            href="#"
            className="text-primary font-medium hover:underline mt-4 md:mt-0"
          >
            View all listings →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
