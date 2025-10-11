'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Baby, CalendarDays, Smile, CircleDollarSign, ClipboardCheck, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { event } from '@/lib/fpixel';

const features = [
  {
    icon: UtensilsCrossed,
    title: "Para Todas as Idades",
    description: "Receitas específicas para cada fase, dos 6 aos 24 meses."
  },
  {
    icon: Baby,
    title: "Evolução por Textura",
    description: "Cardápios que acompanham a mastigação, da papinha aos sólidos."
  },
  {
    icon: CalendarDays,
    title: "Refeições Completas",
    description: "Sugestões para café da manhã, almoço, lanche e jantar."
  },
  {
    icon: CircleDollarSign,
    title: "Economize Dinheiro",
    description: "Receitas com ingredientes simples, baratos e fáceis de encontrar e que cabem no seu bolso."
  },
  {
    icon: ClipboardCheck,
    title: "Aprovado por Nutricionistas",
    description: "Todas as receitas são nutritivas, saudáveis e aprovadas por especialistas."
  },
  {
    icon: Clock,
    title: "Otimize seu Tempo",
    description: "Receitas deliciosas prontas entre 8 a 15 minutos. Mais tempo para você e seu bebê."
  }
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center flex flex-col items-center p-6 bg-background/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 border-2 border-primary/10">
      <CardHeader className="p-0 mb-4">
        <div className="bg-primary/10 p-4 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="p-0 flex flex-col items-center">
        <CardTitle className="text-lg md:text-xl font-semibold mb-2 font-headline text-primary">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function DetailedBenefitsSection() {
  const handleCTAClick = () => {
    event('InitiateCheckout');
  };

  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
             <Smile className="w-12 h-12 text-primary" strokeWidth={2} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary !leading-tight">
            A Solução que Vai Transformar a Alimentação do seu Bebê e a sua Vida!
          </h2>
          <p className="text-md md:text-lg text-foreground mt-4">
            Mais de 100 receitas fáceis, nutritivas e deliciosas, aprovadas por nutricionistas, mamães e, principalmente, pelos bebês! Chega de estresse e frustração na hora da refeição. Prepare-se para ver seu filho pedir mais!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <p className="text-center text-md md:text-lg text-muted-foreground mt-12 max-w-3xl mx-auto">
          Tudo organizado de forma simples para você não ter mais insegurança sobre o que oferecer em cada fase.
        </p>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="h-auto font-bold py-4 px-8 text-base md:text-xl w-full max-w-lg animate-pulse-cta" onClick={handleCTAClick}>
                <a href="https://www.ggcheckout.com/checkout/v2/UDWWCM3VGgYITO6XPCh5">Sim! Quero Acessar as Receitas e Bônus Agora!</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
