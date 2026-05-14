import { Award, GraduationCap, Heart, Users } from "lucide-react"

export function AboutSection() {
  const credentials = [
    "Doctor of Medicine, University of the Philippines",
    "Residency in Family Medicine, Philippine General Hospital",
    "Board Certified in Family Medicine",
    "Member, Philippine Medical Association",
    "Member, Philippine Academy of Family Physicians",
    "15+ Years of Clinical Experience"
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">About the Doctor</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Dedicated to Your Health & Wellness
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Dr. Maria Santos has been serving the Metro Manila community for over 15 years, providing comprehensive primary care for patients of all ages. Her practice focuses on building long-term relationships with patients and their families to deliver personalized, preventive healthcare.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a patient-centered approach, Dr. Santos takes the time to listen to each patient&apos;s concerns and works collaboratively to develop treatment plans that fit their lifestyle and health goals. She believes in empowering patients through education and preventive care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need routine check-ups, management of chronic conditions, or minor procedures, Dr. Santos and her team are committed to providing compassionate, high-quality care in a welcoming environment.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-secondary/30">
              <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Compassionate Care</h4>
              <p className="text-sm text-muted-foreground">Every patient is treated with empathy and respect</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary/30">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Family-Focused</h4>
              <p className="text-sm text-muted-foreground">Care for all ages, from children to seniors</p>
            </div>
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
