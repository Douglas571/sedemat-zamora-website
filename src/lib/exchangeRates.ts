export interface ExchangeRateResponse {
  dolarBCVToBs: string | number;
  eurosBCVToBs: string | number;
  dolarBlackToBs?: string | number;
  euroBlackToBs?: string | number;
  createdAt: string;
}

export interface ComputedFee {
  months: number;
  totalTcmmv: number;
  totalBs: number;
}

export interface TaxAndFeesData {
  tcmmvValue: number;
  baseFeeTcmmv: number;
  monthFeeTcmmv: number;
  validFrom: string; // Monday
  validTo: string;   // Friday
  fees: ComputedFee[];
}

export async function fetchTaxesAndFeesData(): Promise<TaxAndFeesData | null> {
  const apiUrl = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_URL || process.env.EXCHANGE_RATE_API_URL;
  
  // Base fees can be configured via env vars, defaulting to user specification
  const baseFeeTcmmv = parseFloat(process.env.FORM_EXPENSES_BASE_FEE || "1.5");
  const monthFeeTcmmv = parseFloat(process.env.MONTH_BASE_FEE || "1.0");

  if (!apiUrl) {
    console.error("Missing EXCHANGE_RATE_API_URL environment variable.");
    return null;
  }

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      console.error("Failed to fetch exchange rates:", await res.text());
      return null;
    }
    
    const data: ExchangeRateResponse = await res.json();
    
    const dolar = parseFloat(String(data.dolarBCVToBs));
    const euro = parseFloat(String(data.eurosBCVToBs));
    
    // Calculate TCMMV (Maximum between euro and dollar)
    const tcmmvValue = Math.max(dolar, euro);
    
    // Calculate validity period based on createdAt (Monday to Friday of that week)
    const createdDate = new Date(data.createdAt);
    
    // Adjust to Monday
    const dayOfWeek = createdDate.getDay(); // 0 is Sunday, 1 is Monday
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const mondayDate = new Date(createdDate);
    mondayDate.setDate(createdDate.getDate() + diffToMonday);
    
    // Adjust to Friday
    const fridayDate = new Date(mondayDate);
    fridayDate.setDate(mondayDate.getDate() + 4);

    const formatDate = (date: Date) => {
      const d = String(date.getDate()).padStart(2, '0');
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const y = date.getFullYear();
      return `${d}/${m}/${y}`;
    };

    const validFrom = formatDate(mondayDate);
    const validTo = formatDate(fridayDate);

    // Compute fees for 1 to 12 months
    const fees: ComputedFee[] = [];
    for (let i = 1; i <= 12; i++) {
      const totalTcmmv = (i * monthFeeTcmmv) + baseFeeTcmmv;
      const totalBs = totalTcmmv * tcmmvValue;
      
      fees.push({
        months: i,
        totalTcmmv: totalTcmmv,
        totalBs: totalBs
      });
    }

    return {
      tcmmvValue,
      baseFeeTcmmv,
      monthFeeTcmmv,
      validFrom,
      validTo,
      fees
    };
  } catch (error) {
    console.error("Error fetching taxes and fees data:", error);
    return null;
  }
}
