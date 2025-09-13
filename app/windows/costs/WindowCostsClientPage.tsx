"use client";

import { CalculatorModel } from "@/components/calculator";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Euro, TrendingDown } from "lucide-react";

export default function WindowCostsClientPage() {
  const priceFactors = [
    "Profiel/materiaal",
    "Glaskeuze",
    "Afmetingen",
    "Scharnieren/beslag",
    "Plaatsingscondities",
    "Afwerking",
  ];

  const savingTips = [
    "Combineer vervanging per gevel",
    "Kies standaardkleuren",
    "HR++ waar triple niet nodig is",
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/10 p-4 rounded-full">
                <Calculator className="h-12 w-12 text-secondary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Kosten kozijnen berekenen
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Kies materiaal, glas en aantal stuks voor een directe
              prijsindicatie.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="p-10 bg-background">
          <CalculatorModel />
        </section>

        {/* Price Factors */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Wat beïnvloedt de prijs?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {priceFactors.map((factor, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Euro className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{factor}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Saving Tips */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Bespaartips
              </h2>
            </div>

            <div className="space-y-6">
              {savingTips.map((tip, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 p-2 rounded-full">
                        <TrendingDown className="h-6 w-6 text-secondary" />
                      </div>
                      <span className="text-lg font-medium text-foreground">
                        {tip}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
