export interface TaxCategory {
  id: string;
  title: string;
  description: string;
  href: string;
  cover?: string;
}

export const taxCategories: TaxCategory[] = [
  {
    id: 'waste-collection',
    title: 'Aseo Domiciliario',
    description: 'Consulta los montos para el pago del servicio de aseo domiciliario (residencial) de acuerdo al valor actual del TCMMV publicado por el BCV.',
    href: '/fees-and-taxes/waste-collection',
    cover: '/images/waste_collection_banner.png' // Optional: add images if available
  },
  {
    id: 'vehicles',
    title: 'Patente de Vehículos',
    description: 'Consulta los montos para el pago del impuesto de vehículos de acuerdo a su tipo y al valor actual del TCMMV publicado por el BCV.',
    href: '/fees-and-taxes/vehicles',
    cover: '/images/vehicle_patent_tax.png' // Optional
  }
];
