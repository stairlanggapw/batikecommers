import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare, Send, Phone, Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function OwnerChat() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Data tidak lengkap",
        description: "Mohon isi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Pesan terkirim! ✉️",
      description: "Tim kami akan menghubungi Anda dalam 1x24 jam.",
    });

    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Hubungi Tim Batik Nasional
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg">
              Punya pertanyaan atau butuh bantuan khusus? Tim kami siap membantu Anda 
              menemukan batik yang tepat atau menjawab pertanyaan seputar layanan kami.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">WhatsApp</p>
                  <p className="font-medium">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="font-medium">halo@batiknasional.id</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Jam Operasional</p>
                  <p className="font-medium">Senin - Sabtu, 08:00 - 20:00 WIB</p>
                </div>
              </div>
            </div>

            {/* Quick Chat Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat dengan Owner
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display text-xl">Chat dengan Owner</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Nama Lengkap
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@contoh.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Pesan
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tulis pesan atau pertanyaan Anda..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Decorative */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/20 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-accent/40" />
              <div className="absolute inset-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <MessageSquare className="h-20 w-20 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
