'use client';
import AdForm from "@/components/AdForm";

const locationDefault = {
  lat: 13.081564,
  lng: 80.274787,
}

export default function NewAdPage() {
  return (
    <AdForm defaultLocation={locationDefault} />
  );
}