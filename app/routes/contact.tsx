import { Link } from "react-router";
import type { Route } from "./+types/contact";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Cantina Mariachi | Mexican Restaurant in Casablanca" },
    { name: "description", content: "Get in touch with Cantina Mariachi! Find our location, hours, phone number, and contact form. Located at 4 Rue Ahmed Charci, Vélodrome, Casablanca." },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const contactInfo = [
    {
      title: "Address",
      icon: "📍",
      details: [
        "4 Rue Ahmed Charci",
        "Vélodrome, Casablanca",
        "Morocco"
      ]
    },
    {
      title: "Phone",
      icon: "📞",
      details: ["+212 5223-99178"],
      action: "tel:+212522399178"
    },
    {
      title: "Hours",
      icon: "🕒",
      details: [
        "Monday - Sunday",
        "12:00 PM - 11:00 PM",
        "Last orders: 10:30 PM"
      ]
    },
    {
      title: "Email",
      icon: "📧",
      details: ["info@cantinamariachi.ma"],
      action: "mailto:info@cantinamariachi.ma"
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">✉️</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out, {formData.name}! We've received your message and will get back to you soon.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            We typically respond within 24 hours. For urgent matters, please call us at +212 5223-99178.
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
          <h1 className="text-5xl font-bold mb-4 text-yellow-300">Get in Touch</h1>
          <p className="text-xl mb-8">We'd love to hear from you! Contact us for reservations, questions, or feedback</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+212522399178"
              className="bg-yellow-500 text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              📞 Call Now
            </a>
            <Link 
              to="/reservations" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
            >
              📅 Make Reservation
            </Link>
            <Link 
              to="/order" 
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              🛵 Order Online
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-red-600 hover:text-red-500 font-semibold"
                        >
                          {info.details.join(", ")}
                        </a>
                      ) : (
                        <div className="text-gray-600">
                          {info.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  📘 Facebook
                </a>
                <a 
                  href="#" 
                  className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-500 transition-colors"
                >
                  📷 Instagram
                </a>
                <a 
                  href="#" 
                  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-500 transition-colors"
                >
                  📺 YouTube
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📍 Find Us</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="font-semibold">Interactive Map</p>
                  <p className="text-sm">4 Rue Ahmed Charci, Vélodrome</p>
                  <p className="text-sm">Casablanca, Morocco</p>
                  <a 
                    href="https://maps.google.com/?q=4+Rue+Ahmed+Charci+Casablanca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors text-sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🚌 Getting Here</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="font-semibold">By Car</p>
                    <p className="text-sm text-gray-600">Street parking available nearby</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚇</span>
                  <div>
                    <p className="font-semibold">By Tram</p>
                    <p className="text-sm text-gray-600">Closest stop: Vélodrome</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚌</span>
                  <div>
                    <p className="font-semibold">By Bus</p>
                    <p className="text-sm text-gray-600">Multiple bus routes serve the area</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚕</span>
                  <div>
                    <p className="font-semibold">By Taxi</p>
                    <p className="text-sm text-gray-600">Grand taxis and petit taxis available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
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

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="catering">Catering Services</option>
                    <option value="feedback">Feedback/Compliment</option>
                    <option value="complaint">Complaint</option>
                    <option value="employment">Employment</option>
                    <option value="partnership">Partnership/Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    placeholder="Tell us how we can help you..."
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
                      Sending Message...
                    </span>
                  ) : (
                    "✉️ Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Do you offer delivery?</h4>
                  <p className="text-gray-600">Yes! We deliver to Vélodrome, Maarif, Gauthier, Centre Ville, and Racine. Free delivery on orders over 100 MAD.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Do you have vegetarian/vegan options?</h4>
                  <p className="text-gray-600">Absolutely! We have many vegetarian and vegan dishes clearly marked on our menu, including veggie tacos, fajitas, and nachos.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">What's special about the weekend Pollo a la Brasa?</h4>
                  <p className="text-gray-600">Our signature rotisserie chicken is marinated for 24 hours in authentic Mexican spices and slow-roasted. Available Friday through Sunday only!</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Do you accept reservations?</h4>
                  <p className="text-gray-600">Yes! You can book online through our reservations page or call us at +212 5223-99178.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Do you cater events?</h4>
                  <p className="text-gray-600">We offer catering for special events and parties. Contact us for more information about our catering packages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Cantina Mariachi?</h2>
          <p className="text-xl mb-8">Visit us today or order online for a taste of authentic Mexico in Casablanca!</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/reservations" 
              className="bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              🪑 Reserve Table
            </Link>
            <Link 
              to="/order" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105"
            >
              🛵 Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}