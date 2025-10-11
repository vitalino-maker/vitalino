import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const features = [
  "Creme de milho com frango e batata",
  "Danone de morango com iogurte",
  "Purê de abóbora com carne e espinafre",
  "Sopinha de legumes colorida",
  "Muffin de banana, maçã e aveia",
  "E mais de 100 outras receitas deliciosas..."
];

export function EbookSection() {

  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold font-headline">O que você vai encontrar no nosso eBook</h2>
          <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">Mais de 100 receitas fáceis e nutritivas para cada fase do seu bebê, organizadas para facilitar o seu dia a dia.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="md:col-span-2 flex justify-center order-first md:order-none">
              <div className="p-2 rounded-lg shadow-2xl bg-white rotate-[-3deg] border-0 transition-transform hover:rotate-[-1deg] hover:scale-105 max-w-[300px] md:max-w-none">
                <Image
                  src="https://i.imgur.com/q4rYJbl.png"
                  alt="Bebê comendo"
                  width={400}
                  height={533}
                  className="rounded-md w-full h-auto"
                  data-ai-hint="baby eating"
                />
              </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-headline">Conteúdo completo e detalhado:</h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-md md:text-lg text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-md md:text-lg text-foreground text-shadow">Prepare refeições deliciosas que seu bebê vai amar, desde as primeiras papinhas até pratos mais complexos. Tudo testado e aprovado por nutricionistas e, claro, pelos pequenos!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
