import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Mail, Facebook, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Find Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Clinic Information
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Clinic Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground font-medium">888 WEN CENTER</p>
                <p className="text-muted-foreground">B.S. Aquino Drive, Brgy. 5</p>
                <p className="text-muted-foreground">Bacolod City 6100</p>
                <p className="text-muted-foreground">Philippines</p>
              </CardContent>
            </Card>

            {/* <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  Clinic Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">By Appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:+639671799444" className="text-foreground hover:text-primary transition-colors">
                    +63 967 179 9444
                  </a>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:028123456" className="text-foreground hover:text-primary transition-colors">
                    (02) 8123-4567
                  </a>
                </div> */}
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:clinic@drsantos.com" className="text-foreground hover:text-primary transition-colors">
                   edmundkylecausing@gmail.com
                  </a>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Facebook className="h-4 w-4 text-muted-foreground" />
                  <a href="https://facebook.com/santosmedicalclinic" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    facebook.com/santosmedicalclinic
                  </a>
                </div> */}
              </CardContent>
            </Card>

            {/* <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-primary" />
                  Parking & Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Free parking available in the building basement (2-hour limit)</p>
                <p>Wheelchair accessible entrance and elevator</p>
                <p>Near Ayala MRT Station (5-minute walk)</p>
              </CardContent>
            </Card> */}
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="w-full h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d490.08693876296036!2d122.9587692!3d10.6807259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aed109c21349a1%3A0x49dd04ab94677db6!2sSt.Mary&#39;s%20Monastery%2C%2020th%20St.%20Extension%2C%20Bacolod%2C%20Negros%20Occidental!5e0!3m2!1sen!2sph!4v1778770387808!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
