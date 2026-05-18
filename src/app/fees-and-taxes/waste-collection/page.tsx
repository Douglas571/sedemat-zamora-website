import React from 'react';
import Header from '@/components/Header';
import { Footer } from "@/components/Footer";
import WasteCollectionTableClient from '@/components/WasteCollectionTableClient';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { CalendarDays, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Tasas de Aseo Domiciliario - SEDEMAT Zamora",
  description: "Tasas y tarifas vigentes para el servicio de aseo domiciliario en el Municipio Zamora",
};

export default function WasteCollectionTaxesPage() {
  const routesPath = path.join(process.cwd(), 'src', 'app', 'fees-and-taxes', 'waste-collection', 'routes.yaml');
  const fileContents = fs.readFileSync(routesPath, 'utf8');
  const routesData = yaml.parse(fileContents) as Record<string, string[]>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="grow flex-1 bg-slate-50 py-10 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto bg-white p-6 md:p-10 rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Tasas Municipales del Aseo Domiciliario
          </h1>
          
          <WasteCollectionTableClient />

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <MapPin className="text-blue-600 w-6 h-6" />
              Rutas de Recolección de Aseo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(routesData).map(([day, locations]) => (
                <div key={day} className="bg-slate-50 rounded-lg p-5 border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    {day}
                  </h3>
                  <ul className="space-y-2">
                    {locations.map((location, index) => (
                      <li key={index} className="text-slate-600 flex items-start leading-tight">
                        <span className="text-blue-400 mr-2 mt-0.5">•</span>
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
