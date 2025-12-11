import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 batik-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />

      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Marketplace Batik #1 Indonesia</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Warisan Budaya dalam
              <span className="text-accent block mt-2">Setiap Helai Kain</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Hubungkan langsung dengan ribuan UMKM pengrajin batik asli dari Sabang sampai Merauke. 
              Keaslian terjamin, transparansi penuh.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-glow"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Desain Batik Kustom
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Jelajahi Koleksi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <p className="text-3xl font-display font-bold text-accent">5,000+</p>
                <p className="text-sm text-primary-foreground/70">UMKM Mitra</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent">50,000+</p>
                <p className="text-sm text-primary-foreground/70">Produk Batik</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent">34</p>
                <p className="text-sm text-primary-foreground/70">Provinsi</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/10 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-accent/30" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <span className="font-display text-6xl text-accent">B</span>
                  </div>
                  <p className="font-display text-xl text-primary-foreground">Batik Asli Indonesia</p>
                  <p className="text-sm text-primary-foreground/60 mt-1">Langsung dari Pengrajin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
