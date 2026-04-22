import Header from '@/components/Header';
import { Footer } from "@/components/Footer";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="grow flex-1 bg-slate-50 py-10 px-5 md:px-10 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-slate-500 font-medium animate-pulse">Cargando tasas de cambio...</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
