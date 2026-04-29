export interface VehicleTaxType {
  id: string;
  type: string;
  description: string;
  taxTcmmv: number;
}

export const vehicleTaxes: VehicleTaxType[] = [
  {
    id: 'automoviles-particulares',
    type: 'Automóviles Particulares',
    description: '',
    taxTcmmv: 10,
  },
  {
    id: 'camionetas-particulares',
    type: 'Camionetas Particulares',
    description: '',
    taxTcmmv: 10,
  },
  {
    id: 'motocicletas',
    type: 'Motocicletas',
    description: '',
    taxTcmmv: 5,
  },
  {
    id: 'carros-puestos-taxis',
    type: 'Carros por Puestos y Taxis',
    description: '',
    taxTcmmv: 5,
  },
  {
    id: 'minibus-transporte-colectivo',
    type: 'Minibús, Camionetas Pasajeros Transporte Colectivo',
    description: '',
    taxTcmmv: 10,
  },
  {
    id: 'autobuses-mas-31-puestos',
    type: 'Autobuses con más de 32 Puestos',
    description: '',
    taxTcmmv: 10,
  },
  {
    id: 'vehiculo-carga-camion-350-750-800',
    type: 'Vehículo de Carga Pesada Tipo Camión 350, 750 y 800',
    description: '',
    taxTcmmv: 10,
  },
  {
    id: 'gandolas',
    type: 'Gandolas',
    description: '',
    taxTcmmv: 20,
  },
  {
    id: 'remolques',
    type: 'Remolques',
    description: '',
    taxTcmmv: 20,
  }
];
