import { 
  Stethoscope, 
  Baby, 
  HeartPulse, 
  Scissors, 
  Syringe, 
  Activity, 
  Bone,
  Pill,
  UserCheck
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const specializations = [
  {
    icon: Stethoscope,
    title: "Specialist Assessment",
    description: "The path to recovery starts with finding out exactly what the problem is. Treatment is only as effective as the diagnosis. Discover the best options to help you recover and move better."
  },
  {
    icon: Bone,
    title: "Neuromusculoskeletal Diagnostics",
    description: "Advanced diagnostic modalities designed to identify the root cause of pain, weakness, numbness, and movement dysfunction. Through real-time imaging and functional assessment, these evaluations provide valuable insights that guide precise and effective treatment planning."
  },
  {
    icon: Activity,
    title: "Ultrasound-guided Pain & Regenerative Interventions",
    description: "Management of chronic conditions like diabetes, hypertension, and more"
  }
]

// const procedures = [
//   {
//     icon: Scissors,
//     title: "Minor Surgery",
//     description: "Removal of skin tags, moles, cysts, and minor wound care",
//     duration: "15-45 minutes",
//     forWhom: "Adults and older children"
//   },
//   {
//     icon: Syringe,
//     title: "Vaccinations",
//     description: "Complete immunization services for all ages including flu shots",
//     duration: "15-30 minutes",
//     forWhom: "All ages"
//   },
//   {
//     icon: Pill,
//     title: "IV Therapy",
//     description: "Hydration therapy and vitamin infusions for wellness support",
//     duration: "30-60 minutes",
//     forWhom: "Adults"
//   },
//   {
//     icon: UserCheck,
//     title: "Medical Certificates",
//     description: "Pre-employment, fitness-to-work, and clearance certificates",
//     duration: "20-30 minutes",
//     forWhom: "Adults"
//   }
// ]

export function ServicesSection() {
  return (
    <section id="services" className=" py-16 lg:py-14 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {/* Services & Specializations */}
            Specializations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Specializations */}
        <div className="mb-10">
          {/* <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Specializations</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border/50">
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Procedures */}
        {/* <div>
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Procedures & Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {procedures.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">Duration:</span> {item.duration}
                    </span>
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">For:</span> {item.forWhom}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
