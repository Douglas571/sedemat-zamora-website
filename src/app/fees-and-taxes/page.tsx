import React from 'react';
import Header from '@/components/Header';
import { Footer } from "@/components/Footer";
import TaxesListingClient from '@/components/TaxesListingClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tasas e Impuestos Municipales - SEDEMAT Zamora",
  description: "Listado de tasas y tarifas municipales vigentes en el Municipio Zamora",
};

export default function TaxesListingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="grow flex-1 bg-slate-50 py-10 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-slate-800">
            Tasas e Impuestos Municipales
          </h1>
          
          <TaxesListingClient />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
