'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BonusSection } from '@/components/landing/bonus-section';
import { event } from '@/lib/fpixel';
import { trackServerEvent } from '@/lib/track-event';

export function OfferSection() {
  const handleCTAClick = () => {
    event('InitiateCheckout');
    trackServerEvent('InitiateCheckout');
  };

  return (
    <section id="offer" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-destructive animate-pulse">
            Oferta Relâmpago somente hoje! 🔥
          </h2>
        </div>
        <Card className="max-w-6xl mx-auto border-2 border-primary/50 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="p-8 md:p-12 text-center flex flex-col items-center">
              <p className="text-lg sm:text-xl md:text-3xl font-medium text-muted-foreground mb-2">De <span className="line-through">R$197,00</span> por apenas</p>
              <p className="text-4xl sm:text-5xl md:text-8xl font-bold text-primary mb-4 font-headline">R$19,90!</p>
              <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Ebook Bebê Bem Nutrido</h3>
                  <p className="text-md md:text-lg text-muted-foreground">(+100 receitas organizadas por idade e textura.)</p>
              </div>
            </div>
            <div className="pb-8 md:pb-12">
              <BonusSection />
            </div>
            <div className="px-8 md:px-12 pb-8 md:pb-12 text-center flex flex-col items-center">
               <p className="text-foreground mb-8 max-w-2xl text-center text-sm sm:text-md md:text-xl">Aproveite agora antes que a oferta volte ao preço normal!</p>
               <Button asChild size="lg" className="h-auto font-bold py-4 px-6 text-sm sm:text-base md:h-16 md:text-xl w-full max-w-2xl text-center animate-pulse-cta" onClick={handleCTAClick}>
                <a href="https://www.ggcheckout.com/checkout/v2/UDWWCM3VGgYITO6XPCh5">Sim! Quero Acessar as Receitas e Bônus Agora!</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
