import { Facebook, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">EKZ Pain and Regenerative Medical Center</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Providing quality healthcare services in Bacolod City. Your health is our priority.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>B.S. Aquino Drive, Brgy. 5, Bacolod City</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+639671799444" className="hover:text-background transition-colors">+63 967 179 9444</a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:edmundkylecausing@gmail.com" className="hover:text-background transition-colors"> edmundkylecausing@gmail.com</a>
              </li>
              {/* <li className="flex items-center gap-2 text-background/70">
                <Facebook className="h-4 w-4 flex-shrink-0" />
                <a href="https://facebook.com/santosmedicalclinic" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">@santosmedicalclinic</a>
              </li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">About Dr. Causing</a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">Services</a>
              </li>
              <li>
                <a href="#pricing" className="text-background/70 hover:text-background transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/70 hover:text-background transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-column justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; {currentYear} EKZ Pain and Regenerative Center. All rights reserved.</p>
          
          </div>
          <p className="text-xs text-background/40 mt-4 text-center">
            This website is for informational purposes only and does not constitute medical advice. Please consult with a healthcare professional for medical concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}
