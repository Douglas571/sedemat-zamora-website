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
      {data.tcmmvValue === null && (
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r mb-4">
          <p className="text-amber-700 font-medium text-sm flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
            No se pudo obtener la tasa de cambio actual. Los montos en Bolívares no están disponibles temporalmente.
          </p>
        </div>
      )}
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
              const totalBs = data.tcmmvValue !== null ? vehicle.taxTcmmv * data.tcmmvValue : null;
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
                    {totalBs !== null ? totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '-'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {data.tcmmvValue !== null && (
        <div className="bg-slate-50 p-4 rounded-lg mt-8 text-slate-600 text-sm border border-slate-200 shadow-sm inline-block">
          Tasa de cambio de la Moneda de Mayor Valor del Banco Central de Venezuela (TCMMV) = <span className="font-bold text-slate-800">{data.tcmmvValue.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 4 })} Bs.</span>, desde el día <span className="font-bold text-slate-800">{data.validFrom}</span> hasta el <span className="font-bold text-slate-800">{data.validTo}</span>
        </div>
      )}

      <div className="text-sm text-slate-500 mt-4 space-y-1">
        <p>* Los montos en Bolívares (Bs.) se calculan en base a la Tasa de Cambio de la Moneda de Mayor Valor del Banco Central de Venezuela (TCMMV-BCV) vigente de la semana.</p>
      </div>
    </div>
  );
}
