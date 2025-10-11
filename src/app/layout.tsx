'use client';

import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { PromoHeader } from '@/components/landing/promo-header';
import { poppins } from './fonts';
import FacebookPixelSuspenseWrapper from '@/components/facebook-pixel';
import { ClientScripts } from '@/components/client-scripts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
          <title>Bebê Bem Nutrido</title>
          <meta name="description" content="Transforme a Alimentação do Seu Bebê em Apenas 24 Horas!" />
      </head>
      <body className="font-body antialiased">
        <FacebookPixelSuspenseWrapper />
        <ClientScripts />
        <PromoHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
