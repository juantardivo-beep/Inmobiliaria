'use client';

import PropertyDetail from "../../../components/organisms/propertyDetail/PropertyDetail";

export default function PropertyClient({ property }) {
  return (
    <main className="min-vh-100">
      <PropertyDetail property={property} />
    </main>
  );
}