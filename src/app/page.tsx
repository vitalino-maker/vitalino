"use client";

import React, { Suspense } from 'react';
import { HeroSection } from '@/components/landing/hero-section';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';

const OfferSection = React.lazy(() =>
  import('@/components/landing/offer-section').then(module => ({ default: module.OfferSection }))
);
const DetailedBenefitsSection = React.lazy(() =>
  import('@/components/landing/detailed-benefits-section').then(module => ({ default: module.DetailedBenefitsSection }))
);
const TestimonialsSection = React.lazy(() =>
  import('@/components/landing/testimonials-section').then(module => ({ default: module.TestimonialsSection }))
);
const EbookSection = React.lazy(() =>
  import('@/components/landing/ebook-section').then(module => ({ default: module.EbookSection }))
);
const GuaranteeSection = React.lazy(() =>
  import('@/components/landing/guarantee-section').then(module => ({ default: module.GuaranteeSection }))
);
const PainPointSection = React.lazy(() =>
  import('@/components/landing/pain-point-section').then(module => ({ default: module.PainPointSection }))
);
const FinalOfferSection = React.lazy(() =>
  import('@/components/landing/final-offer-section').then(module => ({ default: module.FinalOfferSection }))
);
const FaqSection = React.lazy(() =>
  import('@/components/landing/faq-section').then(module => ({ default: module.FaqSection }))
);

const SectionLoader = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="flex flex-col space-y-8">
      <Skeleton className="h-12 w-1/2 mx-auto" />
      <Skeleton className="h-6 w-3/4 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  </div>
);


export default function LandingPage() {
  return (
    <div className="bg-background text-foreground font-body">
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <OfferSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PainPointSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <DetailedBenefitsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EbookSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FinalOfferSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <GuaranteeSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FaqSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
