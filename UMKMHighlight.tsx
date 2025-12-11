import { BadgeCheck, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const umkmData = [
  {
    id: "1",
    name: "Batik Trusmi Asli",
    region: "Cirebon, Jawa Barat",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop",
    products: 234,
    rating: 4.9,
    followers: 12500,
    description: "Pengrajin batik tulis Mega Mendung sejak 1975. Tiga generasi menjaga warisan budaya Cirebon.",
    verified: true,
  },
  {
    id: "2",
    name: "Batik Keris Solo",
    region: "Surakarta, Jawa Tengah",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop",
    products: 567,
    rating: 4.8,
    followers: 28900,
    description: "Spesialis batik Keraton Solo dengan motif klasik Parang dan Kawung. Kualitas museum.",
    verified: true,
  },
  {
    id: "3",
    name: "Rumah Batik Lasem",
    region: "Lasem, Jawa Tengah",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    products: 156,
    rating: 5.0,
    followers: 8700,
    description: "Batik Lasem dengan pewarna alami. Merah delima khas yang tak bisa ditiru mesin.",
    verified: true,
  },
];

export function UMKMHighlight() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            UMKM Minggu Ini
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kenali Pengrajin Batik Indonesia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beli langsung dari pengrajin asli. Setiap pembelian mendukung keberlangsungan 
            warisan budaya dan ekonomi lokal.
          </p>
        </div>

        {/* UMKM Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {umkmData.map((umkm) => (
            <div
              key={umkm.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="relative h-32 bg-gradient-to-br from-primary to-secondary">
                <div className="absolute inset-0 batik-pattern opacity-30" />
              </div>

              {/* Profile Image */}
              <div className="relative px-6">
                <div className="absolute -top-12 left-6">
                  <div className="relative">
                    <img
                      src={umkm.image}
                      alt={umkm.name}
                      className="w-24 h-24 rounded-xl object-cover border-4 border-card shadow-lg"
                    />
                    {umkm.verified && (
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                        <BadgeCheck className="h-4 w-4 text-accent-foreground" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-14 px-6 pb-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {umkm.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-3.5 w-3.5" />
                  {umkm.region}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {umkm.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent fill-accent" />
                    <span className="font-medium text-foreground">{umkm.rating}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{umkm.products}</span>
                    <span className="text-muted-foreground ml-1">Produk</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{(umkm.followers / 1000).toFixed(1)}k</span>
                    <span className="text-muted-foreground ml-1">Pengikut</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Kunjungi Toko
                  </Button>
                  <Button variant="outline" size="sm">
                    Ikuti
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
