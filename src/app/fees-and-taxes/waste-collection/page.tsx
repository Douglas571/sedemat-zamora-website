import React from 'react';
import Header from '@/components/Header';
import { Footer } from "@/components/Footer";
import WasteCollectionTableClient from '@/components/WasteCollectionTableClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tasas de Aseo Domiciliario - SEDEMAT Zamora",
  description: "Tasas y tarifas vigentes para el servicio de aseo domiciliario en el Municipio Zamora",
};

export default function WasteCollectionTaxesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="grow flex-1 bg-slate-50 py-10 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto bg-white p-6 md:p-10 rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Tasas Municipales del Aseo Domiciliario
          </h1>
          
          <WasteCollectionTableClient />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
