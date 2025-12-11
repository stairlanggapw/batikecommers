import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Batik Tulis Mega Mendung Premium - Cirebon",
    price: 2500000,
    originalPrice: 3000000,
    image: "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?w=400&h=400&fit=crop",
    rating: 4.9,
    sold: 234,
    region: "Cirebon",
    type: "tulis" as const,
    seller: "Batik Trusmi Asli",
    verified: true,
  },
  {
    id: "2", 
    name: "Batik Cap Parang Kusumo - Solo",
    price: 450000,
    originalPrice: 550000,
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&h=400&fit=crop",
    rating: 4.7,
    sold: 567,
    region: "Solo",
    type: "cap" as const,
    seller: "Batik Keris",
    verified: true,
  },
  {
    id: "3",
    name: "Batik Tulis Sogan Klasik - Yogyakarta",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.8,
    sold: 189,
    region: "Yogyakarta",
    type: "tulis" as const,
    seller: "Batik Danar Hadi",
    verified: true,
  },
  {
    id: "4",
    name: "Batik Printing Modern Jlamprang",
    price: 185000,
    originalPrice: 225000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    rating: 4.5,
    sold: 1203,
    region: "Pekalongan",
    type: "printing" as const,
    seller: "Pekalongan Batik Store",
    verified: false,
  },
  {
    id: "5",
    name: "Batik Cap Kawung Exclusive",
    price: 675000,
    image: "https://images.unsplash.com/photo-1565155447121-a05b1cafd1f3?w=400&h=400&fit=crop",
    rating: 4.6,
    sold: 342,
    region: "Solo",
    type: "cap" as const,
    seller: "Batik Semar",
    verified: true,
  },
  {
    id: "6",
    name: "Batik Tulis Lasem Merah Delima",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=400&h=400&fit=crop",
    rating: 5.0,
    sold: 87,
    region: "Lasem",
    type: "tulis" as const,
    seller: "Rumah Batik Lasem",
    verified: true,
  },
  {
    id: "7",
    name: "Batik Printing Motif Bunga Kontemporer",
    price: 145000,
    originalPrice: 180000,
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
    rating: 4.3,
    sold: 2456,
    region: "Bandung",
    type: "printing" as const,
    seller: "Modern Batik ID",
    verified: false,
  },
  {
    id: "8",
    name: "Batik Tulis Tujuh Rupa Madura",
    price: 2100000,
    originalPrice: 2500000,
    image: "https://images.unsplash.com/photo-1509205477838-a534e43a849f?w=400&h=400&fit=crop",
    rating: 4.9,
    sold: 156,
    region: "Madura",
    type: "tulis" as const,
    seller: "Batik Tanjung Bumi",
    verified: true,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Produk Pilihan
            </h2>
            <p className="text-muted-foreground">
              Koleksi batik terbaik dari UMKM terverifikasi di seluruh Indonesia
            </p>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            Lihat Semua
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
