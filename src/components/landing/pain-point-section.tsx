
import { HeartCrack } from 'lucide-react';

export function PainPointSection() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <HeartCrack className="w-16 h-16 text-destructive/70" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold font-headline text-destructive mb-4">
            Eu sei que você já passou por isso, mamãe...
          </h2>
          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground mx-auto space-y-4">
            <p>
              A hora da refeição, que deveria ser um momento de alegria, virou um campo de batalha. 
              Seu bebê recusa tudo o que você oferece com tanto carinho, e a angústia aperta seu coração.
            </p>
            <p>
              Você se sente culpada, preocupada e exausta por não saber mais o que fazer para ele comer direito. 
              Parece que nada funciona e a cada dia a frustração só aumenta.
            </p>
            <p className="font-semibold text-foreground text-shadow-md">
              Você não está sozinha nessa jornada. E a boa notícia é que seus problemas podem acabar agora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
