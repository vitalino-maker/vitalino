import { Footer } from '@/components/landing/footer';
import { PromoHeader } from '@/components/landing/promo-header';

export default function PoliticaDePrivacidade() {
  return (
    <div className="bg-background text-foreground font-body">
      <PromoHeader />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-headline mb-8">Política de Privacidade</h1>
        <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-4">
            <p>A sua privacidade é importante para nós. É política do Bebê Bem Nutrido respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Bebê Bem Nutrido, e outros sites que possuímos e operamos.</p>
            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
            <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
            <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
            <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
            <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
            <h2 className="text-2xl font-bold font-headline mt-8">Compromisso do Usuário</h2>
            <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Bebê Bem Nutrido oferece no site e com caráter enunciativo, mas não limitativo:</p>
            <ul>
                <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
                <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Bebê Bem Nutrido, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar os danos anteriormente mencionados.</li>
            </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
