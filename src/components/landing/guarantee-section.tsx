'use client';

import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock } from 'lucide-react';
import Image from 'next/image';
import { event } from '@/lib/fpixel';

export function GuaranteeSection() {
  const handleCTAClick = () => {
    event('InitiateCheckout');
  };

  return (
    <section id="guarantee" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-primary/10 overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-center bg-primary text-primary-foreground">
              <div className="flex flex-col items-center gap-3 mb-4">
                <ShieldCheck className="h-12 w-12 text-white" />
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-white">
                  Garantia Incondicional de 15 dias!
                </h2>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold font-headline mb-4">Satisfação ou seu dinheiro de volta!</h3>
              <p className="text-md md:text-lg text-primary-foreground/90 mb-8">
                Você tem 15 dias completos para testar o e-book. Se, por qualquer motivo, não ficar 100% satisfeita, basta nos enviar um e-mail e devolveremos todo o seu investimento. Sem perguntas, sem burocracia.
              </p>
              <Button asChild size="lg" className="h-auto font-bold text-base md:text-xl w-full max-w-md bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-4 animate-pulse-cta" onClick={handleCTAClick}>
                <a href="https://www.ggcheckout.com/checkout/v2/UDWWCM3VGgYITO6XPCh5">Garantir minhas receitas com Segurança!</a>
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm font-medium text-primary-foreground">
                <Lock className="h-4 w-4" />
                <span>Compra 100% Segura e Protegida.</span>
              </div>
            </div>
            <div className="relative h-64 md:h-full w-full hidden md:block">
               <Image
                src="https://i.imgur.com/q4rYJbl.png"
                alt="Selo de garantia de 7 dias"
                fill
                className="object-cover"
                data-ai-hint="baby eating"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
