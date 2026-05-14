import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Info } from "lucide-react"
import Link from 'next/link'

const pricingItems = [
  {
    title: "Start your recovery journey today. Reserve your consultation now.",
    price: "Starts at ₱1,000",
    description: "First visit consultation with comprehensive health assessment",
    includes: [
      "Medical history review",
      "Physical examination",
      "Health assessment",
      "Treatment plan"
    ]
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-14 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Consultation and Procedures</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Live Pain-Free. Heal from Within.
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take the first step toward lasting recovery, better movement, and a better quality of life. Discover advanced, evidence-based solutions designed to relieve pain, restore function, and help your body heal naturally.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-5xl mx-auto">
          {pricingItems.map((item, index) => (
            <Link  key={index} href={'https://nowserving.seriousmd.com/doctor/edmund-kyle-causing?clinicid=83244&virtual=0&appointmentdate=undefined'} target="_blank" rel="noopener noreferrer">
          
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow border-border/50">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{item.price}</span>
                </div>
                <CardDescription className="mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* <ul className="space-y-3">
                  {item.includes.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul> */}
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 bg-secondary/50 rounded-xl p-4">
            <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Note:</span> Final procedure costs may vary depending on complexity. Additional fees may apply for laboratory tests, medications, and specialized materials. All fees will be discussed before any procedure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
