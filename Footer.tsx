import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  marketplace: [
    { label: "Batik Tulis", href: "#" },
    { label: "Batik Cap", href: "#" },
    { label: "Batik Printing", href: "#" },
    { label: "Kustomisasi", href: "#" },
    { label: "Flash Sale", href: "#" },
  ],
  umkm: [
    { label: "Daftar UMKM", href: "#" },
    { label: "Panduan Penjual", href: "#" },
    { label: "Seller Center", href: "#" },
    { label: "Program Mitra", href: "#" },
  ],
  bantuan: [
    { label: "Cara Belanja", href: "#" },
    { label: "Pengiriman", href: "#" },
    { label: "Pengembalian", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Hubungi Kami", href: "#" },
  ],
  tentang: [
    { label: "Tentang Kami", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">B</span>
              </div>
              <div>
                <h2 className="font-display font-bold text-xl">Batik Nasional</h2>
                <p className="text-xs text-primary-foreground/60">Warisan Budaya Indonesia</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-6 max-w-xs">
              Platform marketplace batik terbesar di Indonesia. Menghubungkan pengrajin UMKM 
              dengan pecinta batik di seluruh nusantara.
            </p>
            
            {/* Contact */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Jl. Batik Indonesia No. 1, Jakarta</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>halo@batiknasional.id</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2">
              {footerLinks.marketplace.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">UMKM</h3>
            <ul className="space-y-2">
              {footerLinks.umkm.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2">
              {footerLinks.bantuan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tentang</h3>
            <ul className="space-y-2">
              {footerLinks.tentang.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Batik Nasional. Hak cipta dilindungi. 🇮🇩
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>Pembayaran Aman</span>
              <span>•</span>
              <span>Pengiriman ke Seluruh Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
