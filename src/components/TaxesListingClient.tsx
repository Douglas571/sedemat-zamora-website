'use client';

import React, { useEffect, useState } from 'react';
import TaxSectionCard from '@/components/TaxSectionCard';
import { taxCategories } from '@/app/fees-and-taxes/util';
import { fetchTaxesAndFeesData, TaxAndFeesData } from '@/lib/exchangeRates';

export default function TaxesListingClient() {
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

  return (
    <div className="flex flex-col gap-6">
      {taxCategories.map((category) => {
        // Special handling for waste collection to show amounts if data is available
        if (category.id === 'waste-collection' && data) {
          const firstMonth = data.fees[0];
          const wholeYear = data.fees[data.fees.length - 1];
          
          return (
            <TaxSectionCard
              key={category.id}
              title={category.title}
              description={category.description}
              href={category.href}
              cover={category.cover}
            >
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 shadow-sm">
                  <span className="block text-sm font-medium text-slate-500 mb-1">Pago por {firstMonth.months} mes:</span>
                  <span className="text-2xl font-bold text-emerald-700">
                    {firstMonth.totalBs !== null 
                      ? `Bs. ${firstMonth.totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      : `${firstMonth.totalTcmmv.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TCMMV-BCV`}
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 shadow-sm">
                  <span className="block text-sm font-medium text-slate-500 mb-1">Pago por {wholeYear.months} meses:</span>
                  <span className="text-2xl font-bold text-emerald-700">
                    {wholeYear.totalBs !== null 
                      ? `Bs. ${wholeYear.totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      : `${wholeYear.totalTcmmv.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TCMMV-BCV`}
                  </span>
                </div>
              </div>
            </TaxSectionCard>
          );
        }
        
        return (
          <TaxSectionCard
            key={category.id}
            title={category.title}
            description={category.description}
            href={category.href}
            cover={category.cover}
          >
            {loading && category.id === 'waste-collection' && (
              <div className="h-20 flex items-center justify-center animate-pulse bg-slate-50 rounded-lg mt-4">
                <span className="text-slate-400 text-sm italic">Obteniendo tasas vigentes...</span>
              </div>
            )}
          </TaxSectionCard>
        );
      })}
    </div>
  );
}
