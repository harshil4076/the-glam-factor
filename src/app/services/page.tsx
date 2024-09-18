// src/app/services/page.tsx
export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-pink-800 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            name: "Haircuts & Styling",
            description: "Expert cuts and styles for all hair types.",
          },
          {
            name: "Manicure & Pedicure",
            description: "Luxurious nail care for hands and feet.",
          },
          {
            name: "Facials & Skincare",
            description: "Rejuvenating treatments for glowing skin.",
          },
          {
            name: "Makeup Application",
            description: "Professional makeup for any occasion.",
          },
        ].map((service, index) => (
          <div key={index} className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-pink-800 mb-2">
              {service.name}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
