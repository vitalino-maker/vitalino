'use client';
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "../ui/button";
import { event } from '@/lib/fpixel';

const previewImages = [
  {
    id: "preview-1",
    description: "Preview do ebook",
    imageUrl: "https://i.imgur.com/eRymfaS.png",
    imageHint: "ebook page"
  },
  {
    id: "preview-2",
    description: "Preview do ebook",
    imageUrl: "https://i.imgur.com/SSLTreG.png",
    imageHint: "ebook page"
  },
  {
    id: "preview-3",
    description: "Preview do ebook",
    imageUrl: "https://i.imgur.com/gaM2cuN.png",
    imageHint: "ebook page"
  },
  {
    id: "preview-4",
    description: "Preview do ebook",
    imageUrl: "https://i.imgur.com/1VOQk5W.png",
    imageHint: "ebook page"
  },
  {
    id: "preview-5",
    description: "Preview do ebook",
    imageUrl: "https://i.imgur.com/fPcKXrN.png",
    imageHint: "ebook page"
  },
];

export function PreviewSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
    )

    const handleCTAClick = () => {
      event('InitiateCheckout');
    };

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-headline">Veja por dentro do Ebook. Uma espiadinha no que você vai receber</h2>
          <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">Veja um pouco do material incrível que preparamos para transformar a alimentação do seu bebê.</p>
        </div>
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
                duration: 40,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {previewImages.map((image) => (
              <CarouselItem key={image.id} className="pl-4 sm:basis-1/2 md:basis-1/3">
                <div className="p-1">
                  <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={1080}
                      height={1920}
                      className="w-full h-auto"
                      data-ai-hint={image.imageHint}
                      quality={80}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="h-auto font-bold py-4 px-8 text-base md:text-xl w-full max-w-lg animate-pulse-cta" onClick={handleCTAClick}>
                <a href="https://www.ggcheckout.com/checkout/v2/UDWWCM3VGgYITO6XPCh5">Sim! Quero Acessar as Receitas e Bônus Agora!</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
