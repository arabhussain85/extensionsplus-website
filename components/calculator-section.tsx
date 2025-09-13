"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CalculatorIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="8" y1="18" x2="16" y2="18" />
  </svg>
);

export function CalculatorSection() {
  const [selectedCalculator, setSelectedCalculator] = useState<string | null>(
    null
  );

  const calculators = [
    {
      id: "extension",
      title: "Uitbouw Calculator",
      description: "Bereken de kosten voor uw aanbouw of uitbouw",
      icon: "🏠",
      link: "/extensions/costs",
    },
    {
      id: "windows",
      title: "Kozijn Calculator",
      description: "Bereken de kosten voor nieuwe kozijnen en ramen",
      icon: "🪟",
      link: "/windows/costs",
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <CalculatorIcon />
            <span className="ml-2">Kostenberekening</span>
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Bereken uw kosten direct online
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Gebruik onze calculators voor een eerste indicatie van de kosten
            voor uw project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {calculators.map((calculator) => (
            <Card
              key={calculator.id}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{calculator.icon}</div>
                <CardTitle className="text-xl">{calculator.title}</CardTitle>
                <CardDescription className="text-base">
                  {calculator.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => (window.location.href = calculator.link)}
                >
                  <CalculatorIcon />
                  <span className="ml-2">Start Calculator</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
