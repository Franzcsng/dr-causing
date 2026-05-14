import { Award, GraduationCap, Heart, Users } from "lucide-react"

export function AboutSection() {
  const credentials = [
    "Fellow - Neuromusculoskeletal Sonology (FNMSK)",
    "International Olympic Committee Sports Medicine Physician",
    "Diplomate & Fellow of the Philippine Academy of Rehabilitation Medicine",
    "Registered in Musculoskeletal (RMSK) sonography by the Alliance for Physician Certification & Advancement (APCA)",
    "Member - Philippine Academy of Family Physicians",
    "Pain & Regenerative Medicine",
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">About the Doctor</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              DR. EDMUND KYLE CAUSING
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
               Dr. Edmund Kyle Zachary Causing is a licensed medical doctor specializing in pain management, regenerative medicine, sports medicine, and rehabilitation medicine. Through continuous advanced training and a strong focus on precision-based care, he provides modern diagnostic and ultrasound-guided treatment solutions for acute and chronic pain conditions.
               </p>
        
              <p className="text-muted-foreground leading-relaxed">
                Committed to excellence, safety, and patient-centered care, the clinic was established to deliver specialized, evidence-based treatments that help patients recover faster, move better, and live with less pain.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-secondary/50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Credentials & Training
              </h3>
              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-secondary/30">
              <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Compassionate Care</h4>
              <p className="text-sm text-muted-foreground">Every patient is treated with empathy and respect</p>
            </div>
            {/* <div className="text-center p-6 rounded-xl bg-secondary/30">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Family-Focused</h4>
              <p className="text-sm text-muted-foreground">Care for all ages, from children to seniors</p>
            </div> */}
            <div className="text-center p-6 rounded-xl bg-secondary/30">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Quality First</h4>
              <p className="text-sm text-muted-foreground">Evidence-based medicine and best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
