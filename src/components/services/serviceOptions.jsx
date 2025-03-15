

export function ServiceOptions({ options = [] }) {
  const defaultOptions = [
    {
      title: "One Time Subscription",
      description: "Ideal for urgent needs, deep cleans, or pre/post-tenancy maintenance.",
      icon: "check"
    },
    {
      title: "Subscription Plans",
      description: "Regular upkeep with monthly, quarterly, or biannual maintenance options for long-term care and convenience.",
      icon: "sync"
    }
  ];

  const displayOptions = options.length > 0 ? options : defaultOptions;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-primary mb-4">Service Options</h2>
        <p className="text-center text-gray-600 mb-8">
          Choose the right plan for your property's needs, whether it's a one-time deep clean or ongoing maintenance.
        </p>

        <div className="max-w-4xl mx-auto border border-gray-200 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {displayOptions.map((option, index) => (
              <div
                key={index}
                className={`p-8 flex flex-col items-center justify-center text-center ${
                  index === 0 ? 'bg-primary text-white' : 'bg-white text-primary'
                }`}
              >
                <div className="mb-4">
                  {option.icon === 'check' ? (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4V9H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 20V15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.5 9.5C18.9606 7.43367 17.7102 5.62338 15.9952 4.35595C14.2801 3.08851 12.1869 2.42915 10.0286 2.47576C7.87033 2.52238 5.81111 3.2721 4.15232 4.6153C2.49353 5.9585 1.32 7.83586 0.825997 9.934L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.5 14.5C5.03938 16.5663 6.28982 18.3766 8.00483 19.644C9.71984 20.9115 11.8131 21.5709 13.9714 21.5242C16.1297 21.4776 18.1889 20.7279 19.8477 19.3847C21.5065 18.0415 22.68 16.1641 23.174 14.066L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className={`text-sm ${index === 0 ? 'text-gray-200' : 'text-gray-600'}`}>
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
