// src/app/account/page.tsx
export default function Account() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-pink-800 mb-8">My Account</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to your account page. Here you can manage your bookings and
        preferences.
      </p>
      <div className="bg-pink-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-pink-800 mb-4">
          Upcoming Appointments
        </h2>
        <p className="text-gray-700">You have no upcoming appointments.</p>
        <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}
