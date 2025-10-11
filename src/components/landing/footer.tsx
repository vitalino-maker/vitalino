import { Instagram, Mail, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const emailSubject = "Olá, gostaria de saber mais sobre as Receitinhas.";
  const mailtoLink = `mailto:vitalinodigitalltda@gmail.com?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="h-7 w-7 text-accent" />
            <span className="text-lg font-semibold font-headline text-gray-700">Bebê Bem Nutrido</span>
          </div>
          <p className="text-muted-foreground text-sm order-last md:order-none">&copy; {new Date().getFullYear()} Bebê Bem Nutrido.</p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-primary transition-colors">Termos de Uso</Link>
            <a href={mailtoLink} className="hover:text-primary transition-colors flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Contato
            </a>
            <a href="https://www.instagram.com/vtl.digitall/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
