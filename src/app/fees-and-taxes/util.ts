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
    // cover: '/images/waste-collection-banner.jpg' // Optional: add images if available
  }
  // Add other categories here as they are created
];
