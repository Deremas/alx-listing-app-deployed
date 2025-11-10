import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

interface Property {
  id?: string;
  title: string;
  description: string;
  image: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">ALX Listing App</h1>
        <p className="text-gray-600">A modern Airbnb clone listing page</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, idx) => (
          <Card
            key={property.id ?? idx}
            title={property.title}
            description={property.description}
            image={property.image}
          />
        ))}
      </main>

      <div className="mt-6 text-center">
        <Button label="Load More" onClick={() => alert("Load more clicked")} />
      </div>
    </div>
  );
}
