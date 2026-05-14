import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar, Clock, MapPin, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-8 relative h-screen max-h-[800px] bg-gradient-to-b flex items-center from-secondary to-background ">
      <div className="container mx-auto px-4 py-8 lg:py-16 justify-evenly ">
        <div className=" flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-16">
          {/* Content */}
          <div className=" w-fit max-w-[760px] text-center lg:text-left order-2 lg:order-1">
            {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              <span>Trusted Healthcare Provider</span>
            </div> */}
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-[1.05] mb-4">
              <span className="text-balance">
                EKZ Pain and Regenerative Medical Center
              </span>

             
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 text-pretty">
              A specialty outpatient medical clinic focused on the diagnosis, treatment, and management of acute and chronic pain conditions through evidence-based, minimally invasive, and regenerative medical approaches.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
              {/* <div className="flex items-center gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium text-foreground">Mon-Sat: 9AM - 6PM</p>
                  <p className="text-muted-foreground">Sunday: By Appointment</p>
                </div>
              </div> */}
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium text-foreground">B.S. Aquino Drive, Brgy. 5</p>
                  <p className="text-muted-foreground">Bacolod City, Negros Occidental</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">Walk-ins Welcome</span>
              <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">Same-Day Consultations</span>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://nowserving.seriousmd.com/doctor/edmund-kyle-causing?clinicid=83244&virtual=0&appointmentdate=undefined"
                target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </a>
              </Button>
              
              {/* <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="tel:+639123456789">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button> */}
            </div>
          </div>

          {/* Image */}
          <div className="w-fit order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <Image
                  src="/ekzhero-image.png"
                  alt="Dr. Maria Santos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
