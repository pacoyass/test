import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Cantina Mariachi | Authentic Mexican Restaurant in Casablanca" },
    { name: "description", content: "Learn about Cantina Mariachi's story, our passion for authentic Mexican cuisine, and our commitment to bringing traditional Mexican flavors to Casablanca." },
  ];
}

export default function About() {
  const teamMembers = [
    {
      name: "Carlos Hernández",
      role: "Head Chef & Owner",
      description: "Born in Guadalajara, Carlos brings 15+ years of authentic Mexican cooking experience to Casablanca.",
      emoji: "👨‍🍳"
    },
    {
      name: "Maria Rodriguez",
      role: "Kitchen Manager",
      description: "Specializes in traditional salsas and marinades, ensuring every dish bursts with authentic flavors.",
      emoji: "👩‍🍳"
    },
    {
      name: "Ahmed Benali",
      role: "General Manager",
      description: "Local Casablanca native who ensures our guests receive the warmest Moroccan hospitality.",
      emoji: "👨‍💼"
    }
  ];

  const values = [
    {
      title: "Authentic Traditions",
      description: "We honor traditional Mexican recipes passed down through generations, using time-tested cooking methods and spice blends.",
      emoji: "🏺"
    },
    {
      title: "Fresh Ingredients",
      description: "Every dish is prepared with the freshest ingredients, sourced locally when possible and imported when authenticity requires it.",
      emoji: "🌱"
    },
    {
      title: "Vibrant Experience",
      description: "We create a festive atmosphere that captures the spirit of Mexico - colorful, lively, and welcoming to all.",
      emoji: "🎨"
    },
    {
      title: "Community Focus",
      description: "We're proud to be part of the Casablanca community, creating a space where families and friends gather to share great food.",
      emoji: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-300">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bringing the authentic taste of Mexico to the heart of Casablanca since 2019
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Cantina Mariachi</h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    In 2019, Carlos Hernández had a dream: to bring the authentic flavors of his homeland, Mexico, 
                    to the vibrant city of Casablanca. Having spent over 15 years perfecting traditional Mexican 
                    recipes in Guadalajara, Carlos was determined to share the rich culinary heritage of Mexico 
                    with his new Moroccan neighbors.
                  </p>
                  <p>
                    What started as a small family restaurant in the heart of Vélodrome has grown into Casablanca's 
                    most beloved Mexican dining destination. Every dish at Cantina Mariachi tells a story - from 
                    our hand-ground spices to our traditional cooking methods that have been passed down through 
                    generations.
                  </p>
                  <p>
                    We believe that food is more than sustenance; it's a bridge between cultures. Here at Cantina 
                    Mariachi, Mexican warmth meets Moroccan hospitality, creating an experience that celebrates 
                    both traditions.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-lg p-8">
                  <div className="text-8xl mb-4">🌮</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Est. 2019</h3>
                  <p className="text-gray-600">
                    5 years of bringing authentic Mexican flavors to Casablanca
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-red-600">1000+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-red-600">50+</div>
                      <div className="text-sm text-gray-600">Authentic Dishes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to authenticity and excellence drives everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{value.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your favorite Mexican dishes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <div className="text-red-600 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-yellow-300">What Makes Us Special</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌶️</div>
              <h3 className="text-xl font-bold mb-3">Traditional Spice Blends</h3>
              <p className="text-gray-100">
                We import authentic Mexican chiles and spices, grinding them fresh daily to create 
                the complex flavors that define true Mexican cuisine.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🫔</div>
              <h3 className="text-xl font-bold mb-3">Handmade Tortillas</h3>
              <p className="text-gray-100">
                Our corn and flour tortillas are made fresh throughout the day using traditional 
                techniques and authentic masa harina.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🍗</div>
              <h3 className="text-xl font-bold mb-3">Weekend Pollo a la Brasa</h3>
              <p className="text-gray-100">
                Our signature weekend special features whole chickens marinated for 24 hours in 
                authentic Mexican spices and slow-roasted to perfection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🥑</div>
              <h3 className="text-xl font-bold mb-3">Fresh Guacamole</h3>
              <p className="text-gray-100">
                Made tableside with ripe avocados, fresh lime juice, and traditional seasonings. 
                Each batch is prepared to order for maximum freshness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🌮</div>
              <h3 className="text-xl font-bold mb-3">Authentic Tacos</h3>
              <p className="text-gray-100">
                From Al Pastor to Carnitas, our tacos feature traditional fillings prepared using 
                time-honored techniques from different regions of Mexico.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🎶</div>
              <h3 className="text-xl font-bold mb-3">Live Mariachi Nights</h3>
              <p className="text-gray-100">
                Join us on special occasions for live mariachi performances that bring the festive 
                spirit of Mexico to life in Casablanca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recognition & Reviews</h2>
            <p className="text-xl text-gray-600">What our customers and the community say about us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">TripAdvisor Rated</h3>
              <p className="text-gray-600">
                Consistently rated as one of the top Mexican restaurants in Casablanca on TripAdvisor
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community Favorite</h3>
              <p className="text-gray-600">
                Winner of "Best International Cuisine" at the 2023 Casablanca Restaurant Awards
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Media Coverage</h3>
              <p className="text-gray-600">
                Featured in local magazines and food blogs as a must-visit dining destination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience Our Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Come taste the passion and tradition that goes into every dish. Join our family and become part of our story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/reservations" 
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-500 transition-all transform hover:scale-105"
            >
              🪑 Reserve Your Table
            </Link>
            <Link 
              to="/order" 
              className="bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              🛵 Order Online
            </Link>
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105"
            >
              📞 Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}