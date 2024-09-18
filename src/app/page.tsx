import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <main>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center px-4 md:px-8 py-8">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
              Welcome to The Glam Factor
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Experience luxury and relaxation with our premium beauty services.
            </p>
            <a
              href="https://www.fresha.com/" // Replace with your actual Fresha booking link
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 inline-block"
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
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-800 mb-8">
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
                  className="bg-pink-100 p-6 rounded-lg shadow-md text-center md:text-left"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-pink-800 mb-2">
                    {service}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
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
