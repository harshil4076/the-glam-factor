const services = [
  {"name": "Thread and Wax For Face", "image": "/images/hot_wax.jpeg", "price": "100", "description": "Eye Enhancers"},
  {"name": "Eye Enhancers", "image": "/images/hot_wax.jpeg", "price": "100", "description": "Eye Enhancers"},
  {"name": "Body Waxing", "image": "/images/hot_wax.jpeg", "price": "100", "description": "Body Waxing"},
  {"name": "Paraffine Treatmet", "image": "/images/hot_wax.jpeg", "price": "100", "description": "Paraffine Treatmet"},
  {"name": "Backcare Treatment", "image": "/images/massage.jpg", "price": "100", "description": "Backcare Treatment"},
  {"name": "Pre-exfoliation Treatment", "image": "/images/wax.jpg", "price": "100", "description": "Pre-exfoliation Treatment"},
  {"name": "Backcare Treatment", "image": "/images/massage.jpg", "price": "100", "description": "Backcare Treatment"},
  {"name": "Backcare Treatment", "image": "/images/massage.jpg", "price": "100", "description": "Backcare Treatment"},
  {"name": "Backcare Treatment", "image": "/images/massage.jpg", "price": "100", "description": "Backcare Treatment"},
  
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white-50">
      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-end px-4 md:px-8 py-8 min-h-80" style={{ backgroundImage: `url('/images/hot_wax.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="mb-8 md:mb-0 text-center">
            <h1 className="text-3xl md:text-4xl font-normal text-white mb-4">
            LET&apos;S GLAM TOGETHER
            </h1>

            <a
              href="https://www.fresha.com/" // Replace with your actual Fresha booking link
              className="bg-red-100 text-black px-6 py-3 rounded-full hover:bg-white-600 transition duration-300 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK NOW 
            </a>
          </div>
          <div className="md:w-1/2">

          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-black-800 mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                
                <div
                  key={index}
                  className=" flex flex-col justify-center items-center bg-white-100 p-6 rounded-lg shadow-md text-center md:text-left"
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm md:text-base text-white">
                    {service.description}
                  </p>
                  <p className="text-sm md:text-base text-white">
                    ${service.price}
                  </p>
                  <button className="bg-red-100 text-black mt-4 px-6 py-3 rounded-full hover:bg-white-600 transition duration-300 inline-block">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-8 md:py-12">
          <div className="container flex flex-col justify-center items-center mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-black-800 mb-8">
              SPECIAL OFFERS
            </h2>
            <p className="text-sm md:text-base text-black-800 text-center">
              DON&apos;T MISS OUT ON OUR EXCLUSIVE OFFERS
              <br />
              FOR BRAZILIAN WAXING AND EYEBROW THREADING.
              <br />
              GET YOUR WAX PASS NOW.
              <br />

            </p>
            <p className="text-sm md:text-base text-black-800">
              Limited Time Deals
            </p>
          </div>
        </section>
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-black-800 mb-8">
            VISIT US
            </h2>
            <p className="text-sm md:text-base text-black-800 text-center">
              Experience the Glam Factor difference
            </p>
            <p className="text-sm md:text-base text-black-800 text-center">
              PURA VIDA SALON MEDI AND SPA
            </p>
            <p className="text-sm md:text-base text-black-800 text-center">
              366 HIGHWAY 8
            </p>
            <p className="text-sm md:text-base text-black-800 text-center">
              STONEY CREEK
            </p>
            <p className="text-sm md:text-base text-black-800 text-center">
              ON L8G 1E8
            </p>
            <p className="text-sm md:text-base text-black-800 text-center">
              ROOM : 7
            </p>
            <p className="text-sm md:text-base text-black-800 text-center">
              email: glamfactor366@gmail.com
            </p>
            <p className="text-sm md:text-base text-black-800 text-center">
              or call us at 587-501-9546
            </p>
            <div className="flex justify-center items-center">  
            <button className="bg-red-100 text-black mt-4 px-6 py-3 rounded-full hover:bg-white-600 transition duration-300 inline-block">
            <a href="https://www.google.com/maps" className="text-sm md:text-base text-black-800 text-center">
              GET DIRECTIONS
            </a>
            </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
