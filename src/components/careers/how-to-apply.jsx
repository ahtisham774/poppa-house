export function HowToApply() {
    const steps = [
      {
        number: "1",
        title: "Click The Button",
        description: "Register your interest in the desired role.",
      },
      {
        number: "2",
        title: "Register & Upload Your CV",
        description: "Include details of your relevant experience.",
      },
      {
        number: "3",
        title: "Application Review",
        description: "We'll review your application and contact you shortly.",
      },
    ]
  
    return (
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-[32px] font-bold text-center text-[#1a1a4b] mb-16">How to Apply?</h2>
  
          <div className="flex flex-wrap gap-8 gap-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative flex-1 max-w-[400px]">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 size-24 shrink-0 rounded-full bg-[#1a1a4b] text-white flex items-center justify-center text-5xl font-bold">
                  {step.number}
                </div>
                <div className="pt-10 p-6 bg-white rounded-2xl shadow-[4px_4px_4px_0px_#00000040] min-h-[284px]  flex flex-col items-center justify-center transition-shadow duration-300">
                  <h3 className="text-4xl font-bold text-[#1a1a4b] text-center mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  