import { Brush, Stamp, Printer, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "tulis",
    name: "Batik Tulis",
    description: "Dibuat dengan canting secara manual. Proses berminggu-minggu, setiap kain unik.",
    icon: Brush,
    badge: "Premium",
    color: "bg-primary/10 text-primary",
  },
  {
    id: "cap",
    name: "Batik Cap",
    description: "Menggunakan cap tembaga. Kualitas tinggi dengan harga lebih terjangkau.",
    icon: Stamp,
    badge: "Populer",
    color: "bg-secondary/10 text-secondary",
  },
  {
    id: "printing",
    name: "Batik Printing",
    description: "Produksi modern dengan motif batik. Pilihan ekonomis untuk sehari-hari.",
    icon: Printer,
    badge: "Terjangkau",
    color: "bg-muted text-muted-foreground",
  },
  {
    id: "custom",
    name: "Kustomisasi",
    description: "Desain batik impianmu. Kami hubungkan dengan pengrajin yang tepat.",
    icon: Palette,
    badge: "Eksklusif",
    color: "bg-accent/20 text-accent",
    featured: true,
  },
];

export function CategorySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kategori Batik
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai jenis batik sesuai kebutuhan dan budgetmu. 
            Dari premium handmade hingga pilihan ekonomis.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <a
                key={category.id}
                href="#"
                className={cn(
                  "group relative p-6 rounded-2xl border transition-all duration-300",
                  "hover:shadow-card hover:-translate-y-1",
                  category.featured 
                    ? "border-accent/50 bg-accent/5" 
                    : "border-border bg-card hover:border-primary/30"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                <div className={cn(
                  "inline-flex px-3 py-1 rounded-full text-xs font-medium mb-4",
                  category.color
                )}>
                  {category.badge}
                </div>

                {/* Icon */}
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                  category.featured ? "bg-accent/20" : "bg-muted"
                )}>
                  <Icon className={cn(
                    "h-7 w-7",
                    category.featured ? "text-accent" : "text-foreground"
                  )} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
