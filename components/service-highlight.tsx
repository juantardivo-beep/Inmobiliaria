export function ServiceHighlight() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src="/before-and-after-home-renovation.jpg" alt="Home transformation" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Before & After
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Premier Concierge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Concierge helps you sell your home faster and for more money by covering the cost of home improvement
              services — zero due until closing.*
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">Professional staging and photography</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">Home repairs and improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">No upfront costs or hidden fees</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground italic">
              *Depending on your state of residence, fees or interest may apply.
            </p>
            <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Learn More
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
