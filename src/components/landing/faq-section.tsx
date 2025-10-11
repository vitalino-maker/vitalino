
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    value: "item-1",
    question: "Meu bebê vai gostar das receitas?",
    answer: "Sim! As mais de 100 receitas foram testadas e aprovadas por milhares de bebês. Elas são saborosas e nutritivas, pensadas para agradar até os paladares mais exigentes. Você encontrará uma grande variedade para experimentar."
  },
  {
    value: "item-2",
    question: "Não tenho tempo para cozinhar. As receitas são rápidas?",
    answer: "Com certeza! Entendemos a rotina corrida das mães. Por isso, a maioria das nossas receitas leva de 8 a 15 minutos para ficar pronta. São práticas, fáceis e perfeitas para o dia a dia."
  },
  {
    value: "item-3",
    question: "Os ingredientes são caros ou difíceis de encontrar?",
    answer: "De forma alguma. Todas as receitas foram elaboradas com ingredientes simples, acessíveis e fáceis de encontrar em qualquer supermercado ou feira. O objetivo é facilitar sua vida e seu bolso."
  },
  {
    value: "item-4",
    question: "Como vou receber o e-book e os bônus?",
    answer: "O acesso é imediato! Assim que seu pagamento for confirmado, você receberá um e-mail com o link para baixar o e-book e todos os 5 bônus exclusivos diretamente no seu celular, tablet ou computador."
  },
  {
    value: "item-5",
    question: "E se eu não gostar ou não funcionar para mim?",
    answer: "Seu risco é zero! Oferecemos uma garantia incondicional de 15 dias. Se por qualquer motivo você não ficar 100% satisfeita, basta nos enviar um único e-mail e devolveremos todo o seu dinheiro, sem perguntas."
  },
  {
    value: "item-6",
    question: "O pagamento é seguro?",
    answer: "Sim, 100% seguro. Utilizamos a maior e mais segura plataforma de pagamentos do Brasil. Seus dados estão completamente protegidos."
  }
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold font-headline">Ainda tem Dúvidas? A gente responde!</h2>
          <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Separamos as perguntas mais comuns para te ajudar a decidir com segurança.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="bg-background/50 border-primary/10 border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
