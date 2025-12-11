import { Heart, ShoppingCart, Star, MapPin, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  sold: number;
  region: string;
  type: "tulis" | "cap" | "printing";
  seller: string;
  verified?: boolean;
}

const typeLabels = {
  tulis: { label: "Tulis", class: "bg-primary/10 text-primary" },
  cap: { label: "Cap", class: "bg-secondary/10 text-secondary" },
  printing: { label: "Printing", class: "bg-muted text-muted-foreground" },
};

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  rating,
  sold,
  region,
  type,
  seller,
  verified,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className={cn("text-xs font-medium", typeLabels[type].class)}>
            {typeLabels[type].label}
          </Badge>
          {discount > 0 && (
            <Badge className="bg-destructive text-destructive-foreground text-xs">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
          <Heart className="h-4 w-4 text-foreground" />
        </button>

        {/* Quick Add */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Tambah
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Seller */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="truncate">{seller}</span>
          {verified && <BadgeCheck className="h-3.5 w-3.5 text-accent flex-shrink-0" />}
        </div>

        {/* Name */}
        <h3 className="font-medium text-foreground line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">
            Rp{price.toLocaleString("id-ID")}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              Rp{originalPrice.toLocaleString("id-ID")}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-accent fill-accent" />
            <span>{rating.toFixed(1)}</span>
            <span className="mx-1">•</span>
            <span>{sold} terjual</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{region}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
