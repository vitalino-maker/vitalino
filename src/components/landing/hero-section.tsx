'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { event } from '@/lib/fpixel';
import { trackServerEvent } from '@/lib/track-event';

export function HeroSection() {
  const handleCTAClick = () => {
    event('InitiateCheckout');
    trackServerEvent('InitiateCheckout');
  };

  return (
    <section className="relative w-full flex items-center justify-center text-center bg-background text-foreground overflow-hidden pt-12 pb-16 md:py-32">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline !leading-tight max-w-4xl mb-4">
          Transforme a Alimentação do Seu Bebê em Apenas 15 Minutos, com Mais de 100 Receitas e 5 Bônus Essenciais pra Toda Mãe!
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
          Descubra como milhares de mamães estão conseguindo que seus bebês comam de forma saudável, gostosa e sem estresse. Assista ao vídeo agora e faça parte dessa mudança!
        </p>
        
        <div className="w-full max-w-xs sm:max-w-xs md:max-w-xs mx-auto">
           <div
            className="relative w-full rounded-2xl bg-muted shadow-2xl overflow-hidden border-4 border-secondary ring-4 ring-secondary/50 mb-8 aspect-[9/16] wistia_embed wistia_async_zdsjemwzoi videoFoam=true"
            style={{
              padding: "177.78% 0 0 0",
              position: "relative",
            }}
          >
            <div
              className="wistia_swatch"
              style={{
                height: "100%",
                left: 0,
                opacity: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                transition: "opacity 200ms",
                width: "100%",
              }}
            >
              <img
                src="https://fast.wistia.com/embed/medias/zdsjemwzoi/swatch"
                style={{
                  filter: "blur(5px)",
                  height: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
                alt=""
                aria-hidden="true"
                // @ts-ignore
                onload="this.parentNode.style.opacity=1;"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-8">
            <p className="text-foreground font-semibold mb-2 text-shadow-md">Seu filho merece esse investimento!</p>
            <Button asChild size="lg" className="h-auto font-bold py-4 px-8 text-base md:text-xl w-full animate-pulse-cta rounded-full" onClick={handleCTAClick}>
                <a href="https://www.ggcheckout.com/checkout/v2/UDWWCM3VGgYITO6XPCh5">Sim! Quero Acessar as Receitas e Bônus Agora!</a>
            </Button>
        </div>

      </div>
    </section>
  );
}
