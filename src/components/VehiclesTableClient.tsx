'use client';

import React, { useEffect, useState } from 'react';
import { fetchTaxesAndFeesData, TaxAndFeesData } from '@/lib/exchangeRates';
import { vehicleTaxes } from '@/app/fees-and-taxes/vehicles/data';

export default function VehiclesTableClient() {
  const [data, setData] = useState<TaxAndFeesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchTaxesAndFeesData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch tax data on client:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="mt-8 space-y-6">
        <div className="overflow-x-auto rounded-lg border border-slate-200 animate-pulse">
          <div className="h-12 bg-slate-100 border-b border-slate-200"></div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-16 bg-white border-b border-slate-100"></div>
          ))}
        </div>
        <div className="h-12 bg-slate-50 rounded-lg w-full md:w-3/4 animate-pulse"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r mt-8">
        <p className="text-orange-700 font-medium">
          La información de tasas de cambio no se encuentra disponible en este momento. Por favor, reintente en unos minutos.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6 animate-in fade-in duration-500">
      <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="px-6 py-4 font-semibold border-b">Descripción del Vehículo</th>
              <th className="px-6 py-4 font-semibold border-b">Monto en TCMMV-BCV</th>
              <th className="px-6 py-4 font-semibold border-b">Monto en Bs.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {vehicleTaxes.map((vehicle, index) => {
              const totalBs = vehicle.taxTcmmv * data.tcmmvValue;
              return (
                <tr 
                  key={vehicle.id} 
                  className={`hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-800">
                    {vehicle.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-blue-700">
                    {vehicle.taxTcmmv.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-emerald-700">
                    {totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="bg-slate-50 p-4 rounded-lg mt-8 text-slate-600 text-sm border border-slate-200 shadow-sm inline-block">
        Tasa de cambio de la Moneda de Mayor Valor del Banco Central de Venezuela (TCMMV) = <span className="font-bold text-slate-800">{data.tcmmvValue.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 4 })} Bs.</span>, desde el día <span className="font-bold text-slate-800">{data.validFrom}</span> hasta el <span className="font-bold text-slate-800">{data.validTo}</span>
      </div>

      <div className="text-sm text-slate-500 mt-4 space-y-1">
        <p>* Los montos en Bolívares (Bs.) se calculan en base al TCMMV vigente multiplicando por la tasa del vehículo correspondiente.</p>
      </div>
    </div>
  );
}
