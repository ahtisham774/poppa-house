
export function BillsCoverSection({ bills = [] }) {
  
  const displayBills = bills;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">What We Cover</h2>

        <div className="flex flex-wrap items-center justify-center w-full gap-8 max-w-6xl mx-auto">
          {displayBills.map((bill, index) => (
            <div
              key={index}
              className={`flex items-start  max-w-[350px] space-x-4`}
            >
              <div className="flex-shrink-0">
                <img
                  src={bill.image}
                  alt={bill.title}
                  className="w-24 h-20 object-cover rounded"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">{bill.title}</h3>
                <p className="text-gray-600 text-sm">{bill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
