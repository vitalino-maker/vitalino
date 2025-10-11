'use client';

import { CheckCircle2, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from '@/lib/fpixel';

const bonuses = [
  {
    title: "Guia completo do sono do bebê",
  },
  {
    title: "Desmame sem traumas",
  },
  {
    title: "Plano alimentar semanal",
  },
  {
    title: "Checklist da introdução alimentar",
  },
  {
    title: "Lista de substituições saudáveis",
  }
];

export function FinalOfferSection() {
  const handleCTAClick = () => {
    event('InitiateCheckout');
  };

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
                <Gift className="w-12 h-12 text-primary" strokeWidth={2} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary !leading-tight">
                Leve Tudo Isso Hoje por um Preço Simbólico!
            </h2>
            <p className="text-md md:text-lg text-foreground mt-4 mb-10">
                Além do eBook completo com mais de 100 receitas, você receberá <strong>5 bônus incríveis</strong> que vão te ajudar em outras áreas essenciais da maternidade. É a nossa forma de garantir que você tenha a jornada mais tranquila e feliz possível.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10 text-left">
                {bonuses.map((bonus) => (
                    <div key={bonus.title} className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-primary/10">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                        <span className="font-semibold text-foreground">{bonus.title}</span>
                    </div>
                ))}
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
                De <span className="line-through">R$197,00</span> por apenas <strong className="text-primary font-bold">R$19,90 no PIX</strong>.
            </p>
             <Button asChild size="lg" className="h-auto font-bold py-4 px-8 text-base md:text-xl w-full max-w-lg animate-pulse-cta" onClick={handleCTAClick}>
                <a href="https://www.ggcheckout.com/checkout/v2/UDWWCM3VGgYITO6XPCh5">Sim! Quero Acessar as Receitas e Bônus Agora!</a>
            </Button>
             <p className="text-sm text-muted-foreground mt-4">(Oferta por tempo limitado!)</p>
        </div>
      </div>
    </section>
  );
}
