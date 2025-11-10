"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@/components/common/Card";

export default function PropertyDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <Card
      description={property.description}
      title={property.title}
      image={property.image}
    />
  );
}
