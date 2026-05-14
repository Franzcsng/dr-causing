import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Schedule Your Consultation?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Take the first step towards better health. Contact us today to book an appointment or ask any questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="https://nowserving.seriousmd.com/doctor/edmund-kyle-causing?clinicid=83244&virtual=0&appointmentdate=undefined"
                target="_blank" rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </a>
            </Button>
            {/* <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Message on Facebook
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
