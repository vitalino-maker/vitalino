
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Baby, CalendarDays, Apple, ClipboardList } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const benefits = [
  {
    icon: UtensilsCrossed,
    title: "Receitas para Todas as Idades",
    description: "Do primeiro purê aos pedacinhos, temos receitas para cada fase do seu bebê."
  },
  {
    icon: Baby,
    title: "Cardápios por Textura",
    description: "Facilite a transição com cardápios que evoluem com a capacidade de mastigação do seu filho."
  },
  {
    icon: CalendarDays,
    title: "Plano Alimentar Semanal",
    description: "Organize sua semana com planos práticos e nutritivos que economizam seu tempo."
  },
  {
    icon: Apple,
    title: "Substituições Inteligentes",
    description: "Aprenda a trocar ingredientes sem perder o valor nutricional e o sabor."
  },
  {
    icon: ClipboardList,
    title: "Checklist de Introdução Alimentar",
    description: "Siga um guia seguro e completo para apresentar novos alimentos sem medo."
  }
];

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <Card className="text-center flex flex-col items-center p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-secondary">
      <CardHeader className="p-0 mb-4">
        <div className="bg-accent/10 p-3 md:p-4 rounded-full">
          <Icon className="h-8 w-8 text-accent" />
        </div>
      </CardHeader>
      <CardContent className="p-0 flex flex-col items-center">
        <CardTitle className="text-lg md:text-xl font-semibold mb-2 font-headline">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

export function DetailedBenefitsSection() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold font-headline">Benefícios Comprovados para Você e Seu Bebê</h2>
          <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Tudo o que você precisa para uma jornada alimentar tranquila e feliz.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.slice(0, 3).map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
          <div className="lg:col-span-3 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:w-2/3">
              {benefits.slice(3).map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
