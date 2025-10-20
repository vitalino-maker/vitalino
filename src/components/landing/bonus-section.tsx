
import { CheckCircle2 } from "lucide-react";

const bonuses = [
  {
    id: "bonus-sono",
    title: "Guia completo do sono do bebê",
    price: "R$19,90"
  },
  {
    id: "bonus-desmame",
    title: "Desmame sem traumas",
    price: "R$19,90"
  },
  {
    id: "bonus-plano",
    title: "Plano alimentar semanal",
    price: "R$19,90"
  },
  {
    id: "bonus-checklist",
    title: "Dicas de armazenamento dos alimentos do Bebê",
    price: "R$19,90"
  },
  {
    id: "bonus-substituicoes",
    title: "Lista de substituições saudáveis",
    price: "R$19,90"
  }
];

export function BonusSection() {
  return (
    <section className="bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold font-headline uppercase">E VOCÊ AINDA LEVA <span className="text-primary">5 BÔNUS EXCLUSIVOS</span></h2>
          <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">Comprando hoje, você garante acesso imediato a esses materiais que vão tornar sua jornada ainda mais completa e tranquila. Mas válido somente pra hoje!</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bg-white/50 rounded-lg p-4 flex items-center justify-between shadow-sm border border-primary/20">
              <div className="flex items-center">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3" />
                <span className="font-semibold text-foreground">{bonus.title}</span>
              </div>
              <div className="text-right">
                <p className="text-sm line-through text-muted-foreground">{bonus.price}</p>
                <p className="text-md font-bold text-primary">GRÁTIS</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
