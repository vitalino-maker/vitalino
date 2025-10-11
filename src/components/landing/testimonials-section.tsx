'use client';

import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PreviewSection } from './preview-section';

const testimonials = [
  {
    id: "testimonial-print-1",
    description: "Print de um depoimento de cliente.",
    imageUrl: "https://i.imgur.com/OEnXlFT.png",
    imageHint: "testimonial screenshot"
  },
  {
    id: "testimonial-print-2",
    description: "Print de um depoimento de cliente.",
    imageUrl: "https://i.imgur.com/Eps8m9V.png",
    imageHint: "testimonial screenshot"
  },
  {
    id: "testimonial-print-3",
    description: "Print de um depoimento de cliente.",
    imageUrl: "https://i.imgur.com/68VQJ7T.png",
    imageHint: "testimonial screenshot"
  },
  {
    id: "testimonial-print-4",
    description: "Print de um depoimento de cliente.",
    imageUrl: "https://i.imgur.com/apYYlx2.png",
    imageHint: "testimonial screenshot"
  },
  {
    id: "testimonial-print-5",
    description: "Print de um depoimento de cliente.",
    imageUrl: "https://i.imgur.com/1qf3wbP.png",
    imageHint: "testimonial screenshot"
  },
  {
    id: "testimonial-print-6",
    description: "Print de um depoimento de cliente.",
    imageUrl: "https://i.imgur.com/uvFXfKp.png",
    imageHint: "testimonial screenshot"
  },
  {
    id: "testimonial-print-7",
    description: "Print de um depoimento de cliente.",
    imageUrl: "https://i.imgur.com/gKc50yU.png",
    imageHint: "testimonial screenshot"
  }
];

export function TestimonialsSection() {

  return (
    <>
      <PreviewSection />
      <section className="py-16 md:py-28 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-headline">Mais de 10.000 mamães já transformaram a alimentação dos seus bebês!</h2>
            <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Veja os depoimentos reais de mães que saíram do desespero para alegria na hora da comida:</p>
            <div className="w-full max-w-xs sm:max-w-xs md:max-w-xs mx-auto mt-8 md:mt-12">
              <div className="relative w-full rounded-2xl bg-muted shadow-2xl overflow-hidden border-4 border-secondary ring-4 ring-secondary/50 aspect-[9/16]">
                  <div className="wistia_embed wistia_async_f4d8b6fvo5 videoFoam=true" style={{height:'100%',position:'relative',width:'100%'}}>&nbsp;</div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg md:text-xl font-semibold mt-16 mb-8">E os resultados não param de chegar...</p>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 40,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 sm:basis-1/2 md:basis-1/3">
                  <div className="p-1">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.description}
                        width={400}
                        height={400}
                        className="w-full h-auto"
                        data-ai-hint={testimonial.imageHint}
                        quality={80}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 text-primary" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 text-primary" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
