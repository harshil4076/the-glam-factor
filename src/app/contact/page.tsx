// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-black-800 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-black-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-4">
            We&rsquo;d love to hear from you. Please fill out the form below and
            we&rsquo;ll get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black-800 mb-4">
            Our Location
          </h2>
          <p>Located in PURA VIDA SALON AND MEDI-SPA</p>
          <p>366 HIGHWAY 8</p>
          <p>STONEY CREEK</p>
          <p>ON L8G 1E8</p>
          

          <div className="bg-gray-200 h-64 rounded-lg">
            {/* Placeholder for map */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5815.13077495601!2d-79.7264075!3d43.218604299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca26483eb0bb3%3A0x220a7996040afc99!2s366%20Hwy%208%2C%20Hamilton%2C%20ON%20L8G%201E8!5e0!3m2!1sen!2sca!4v1726778181786!5m2!1sen!2sca" width="100%" height="100%" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <p className="text-center pt-24">Map goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
