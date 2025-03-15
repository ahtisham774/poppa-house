export function WhatWeDo({ content }) {
  const contentArray = content?.content || [
    "Our Property Viewing Service ensures you get a true and honest assessment of any property before making a commitment. Whether you're abroad, in another city, or simply too busy, we act as your trusted representative, visiting the property on your behalf and providing a detailed review of its condition.",
    "But we don't just send anyone to do the viewing—we appoint a viewing agent who shares similar goals, interests, beliefs, and even your language.",
    "We understand that finding a home isn't just about the building—it's about feeling comfortable, safe, and informed in your decision. By pairing you with someone who understands your concerns, we ensure you get the right insights, cultural context, and practical advice to make the best choice."
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-primary mb-8">What We Do</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-600">
          {contentArray.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
