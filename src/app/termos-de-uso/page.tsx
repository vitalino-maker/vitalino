import { Footer } from '@/components/landing/footer';
import { PromoHeader } from '@/components/landing/promo-header';

export default function TermosDeUso() {
  return (
    <div className="bg-background text-foreground font-body">
      <PromoHeader />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-headline mb-8">Termos de Uso</h1>
        <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-4">
            <h2 className="text-2xl font-bold font-headline">1. Termos</h2>
            <p>Ao acessar ao site Bebê Bem Nutrido, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8">2. Uso de Licença</h2>
            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Bebê Bem Nutrido , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: </p>
            <ol>
                <li>modificar ou copiar os materiais; </li>
                <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>
                <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Bebê Bem Nutrido; </li>
                <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </li>
                <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ol>
            <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Bebê Bem Nutrido a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8">3. Limitações</h2>
            <p>Em nenhum caso o Bebê Bem Nutrido ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Bebê Bem Nutrido, mesmo que Bebê Bem Nutrido ou um representante autorizado da Bebê Bem Nutrido tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8">Links externos</h2>
            <p>O Bebê Bem Nutrido não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Bebê Bem Nutrido do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
