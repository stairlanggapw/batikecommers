import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Menu, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  "Batik Tulis",
  "Batik Cap", 
  "Batik Printing",
  "Kustomisasi",
];

const regions = [
  "Solo",
  "Pekalongan",
  "Cirebon",
  "Yogyakarta",
  "Madura",
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl text-foreground">Batik Nasional</h1>
              <p className="text-xs text-muted-foreground -mt-1">Warisan Budaya Indonesia</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari batik, motif, atau daerah asal..."
                className="pl-10 pr-4 h-11 bg-muted/50 border-border focus:bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <MapPin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cari batik..."
              className="pl-10 pr-4 h-10 bg-muted/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Bar - Desktop */}
        <nav className="hidden md:flex items-center gap-6 h-12 border-t border-border/50">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className={cn(
                "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                category === "Kustomisasi" && "text-accent hover:text-accent/80 font-semibold"
              )}
            >
              {category}
            </a>
          ))}
          <span className="text-border">|</span>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Daerah:</span>
            {regions.slice(0, 4).map((region) => (
              <a
                key={region}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {region}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Kategori</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href="#"
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm bg-muted hover:bg-muted/80 transition-colors",
                        category === "Kustomisasi" && "bg-accent/20 text-accent"
                      )}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Daerah Asal</h3>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <a
                      key={region}
                      href="#"
                      className="px-3 py-1.5 rounded-full text-sm bg-muted hover:bg-muted/80 transition-colors"
                    >
                      {region}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
