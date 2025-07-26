import { Link } from "react-router";
import type { Route } from "./+types/reservations";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book a Table - Cantina Mariachi | Restaurant Reservations in Casablanca" },
    { name: "description", content: "Reserve your table at Cantina Mariachi, Casablanca's favorite Mexican restaurant. Book online for an authentic dining experience with vibrant atmosphere!" },
  ];
}

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Reservation Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you, {formData.name}! Your table for {formData.guests} guests on {formData.date} at {formData.time} has been reserved.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            We'll send a confirmation to {formData.email} shortly. If you need to make changes, please call us at +212 5223-99178.
          </p>
          <div className="flex flex-col gap-3">
            <Link 
              to="/menu" 
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-colors"
            >
              View Our Menu
            </Link>
            <Link 
              to="/" 
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-300">Reserve Your Table</h1>
          <p className="text-xl mb-8">Experience authentic Mexican cuisine in our vibrant atmosphere</p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-bold">Location</h3>
                <p className="text-sm">4 Rue Ahmed Charci, Vélodrome</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-sm">+212 5223-99178</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🕒</div>
                <h3 className="font-bold">Hours</h3>
                <p className="text-sm">Daily: 12:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Make a Reservation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                      Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                        <option key={num} value={num.toString()}>
                          {num} {num === 1 ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    placeholder="Birthday celebration, dietary restrictions, preferred seating, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-500 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin mr-3">⏳</span>
                      Confirming Reservation...
                    </span>
                  ) : (
                    "🪑 Reserve Table"
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2">📞 Prefer to Call?</h4>
                <p className="text-sm text-yellow-700 mb-2">
                  You can also make a reservation by calling us directly:
                </p>
                <a 
                  href="tel:+212522399178" 
                  className="text-lg font-bold text-yellow-800 hover:text-yellow-900"
                >
                  +212 5223-99178
                </a>
                <p className="text-xs text-yellow-600 mt-1">
                  Our staff will be happy to assist you!
                </p>
              </div>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="space-y-8">
            {/* Why Dine With Us */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Dine at Cantina Mariachi?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎉</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Vibrant Atmosphere</h4>
                    <p className="text-gray-600">Experience the lively spirit of Mexico with authentic decor and festive ambiance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🌮</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Authentic Cuisine</h4>
                    <p className="text-gray-600">Traditional Mexican recipes made with fresh, quality ingredients.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">👨‍🍳</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Expert Chefs</h4>
                    <p className="text-gray-600">Our skilled chefs bring years of experience in Mexican culinary traditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🍗</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Weekend Specials</h4>
                    <p className="text-gray-600">Don't miss our famous Pollo a la Brasa, available on weekends only!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Dishes */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Must-Try Dishes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-bold text-gray-800">🔥 Sizzling Fajitas</h4>
                    <p className="text-sm text-gray-600">Our signature dish - served on a hot plate</p>
                  </div>
                  <span className="text-red-600 font-bold">120 MAD</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-bold text-gray-800">🧀 Loaded Nachos</h4>
                    <p className="text-sm text-gray-600">Perfect for sharing with the table</p>
                  </div>
                  <span className="text-red-600 font-bold">95 MAD</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <h4 className="font-bold text-gray-800">⭐ Pollo a la Brasa</h4>
                    <p className="text-sm text-gray-600">Weekend special rotisserie chicken</p>
                  </div>
                  <span className="text-red-600 font-bold">150 MAD</span>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  to="/menu" 
                  className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-center block"
                >
                  View Full Menu
                </Link>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">4 Rue Ahmed Charci, Vélodrome</p>
                    <p className="text-gray-600">Casablanca, Morocco</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="font-semibold text-gray-800">Parking Available</p>
                    <p className="text-gray-600">Street parking and nearby lots</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚇</span>
                  <div>
                    <p className="font-semibold text-gray-800">Public Transport</p>
                    <p className="text-gray-600">Close to tram and bus stops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}