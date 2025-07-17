import React from 'react';

function App() {
  const scrollToDestinations = () => {
    const section = document.getElementById('destinations');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-white font-sans">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">🌴 Dream Vacation App 🛫</h1>
        <p className="text-lg mb-6 max-w-2xl">
          Explore breathtaking destinations and book unforgettable adventures.
        </p>
        <button
          onClick={scrollToDestinations}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 transition"
        >
          Get Started
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4 flex justify-center gap-10 sticky top-0 z-50">
        <a href="#home" className="hover:text-yellow-300">Home</a>
        <a href="#destinations" className="hover:text-yellow-300">Destinations</a>
        <a href="#bookings" className="hover:text-yellow-300">Bookings</a>
      </nav>

      {/* Destinations Section */}
      <section id="destinations" className="bg-white text-black py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Bali Bliss',
              img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60',
            },
            {
              title: 'Paris Romance',
              img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60',
            },
            {
              title: 'Safari Adventure',
              img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=60',
            },
          ].map(({ title, img }) => (
            <div key={title} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img src={img} alt={title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">
                  Enjoy breathtaking views and unforgettable experiences.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bookings Section */}
      <section id="bookings" className="bg-blue-100 text-black py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Vacation</h2>
        <p className="mb-8">Ready to make your dream vacation a reality? Contact us below!</p>
        <a
          href="mailto:adekunleisaac1989@gmail.com"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Contact Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4 mt-10">
        <p>Contact: adekunleisaac1989@gmail.com | 📞 +2348142723736</p>
        <p className="mt-2">© {new Date().getFullYear()} Dream Vacation App</p>
      </footer>
    </div>
  );
}

export default App;
