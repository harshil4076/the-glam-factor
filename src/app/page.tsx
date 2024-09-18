import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <main>
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-pink-800 mb-4">
              Welcome to The Glam Factor
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Experience luxury and relaxation with our premium beauty services.
            </p>
            <a
              href="https://www.fresha.com/" // Replace with your actual Fresha booking link
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now on Fresha
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/LOGO.jpeg" // Replace with your actual image path
              alt="The Glam Factor Salon"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-pink-800 mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Haircuts & Styling",
                "Manicure & Pedicure",
                "Facials & Skincare",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-pink-100 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-pink-800 mb-2">
                    {service}
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
