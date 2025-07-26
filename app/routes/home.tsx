import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cantina Mariachi - Authentic Mexican Flavors in Casablanca" },
    { name: "description", content: "Experience the best Mexican cuisine in Casablanca! Order online or book a table for authentic tacos, fajitas, nachos, and our weekend Pollo a la Brasa special." },
  ];
}

export default function Home() {
  const featuredDishes = [
    {
      name: "Sizzling Fajitas",
      description: "Tender chicken or beef with bell peppers and onions, served with warm tortillas",
      image: "🌮",
      price: "120 MAD"
    },
    {
      name: "Loaded Nachos",
      description: "Crispy tortilla chips topped with cheese, jalapeños, and fresh guacamole",
      image: "🧀",
      price: "85 MAD"
    },
    {
      name: "Classic Tacos",
      description: "Soft or hard shell tacos with your choice of meat, fresh salsa, and cilantro",
      image: "🌮",
      price: "45 MAD"
    },
    {
      name: "Weekend Pollo a la Brasa",
      description: "Special rotisserie chicken marinated in authentic Mexican spices (Weekends only)",
      image: "🍗",
      price: "150 MAD",
      special: true
    }
  ];

  const testimonials = [
    {
      name: "Ahmed M.",
      rating: 5,
      text: "Best Mexican food in Casablanca! The atmosphere is amazing and the fajitas are incredible."
    },
    {
      name: "Sarah L.",
      rating: 5,
      text: "Authentic flavors and great service. The weekend chicken special is a must-try!"
    },
    {
      name: "Omar K.",
      rating: 4,
      text: "Love the vibrant atmosphere and delicious nachos. Perfect for family dinners."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-300">
              ¡Authentic Mexican Flavors in Casablanca!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Experience the vibrant tastes of Mexico right in the heart of Casablanca. 
              Fresh ingredients, traditional recipes, and a festive atmosphere await you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/order" 
                className="bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
              >
                🚚 Order Online Now
              </Link>
              <Link 
                to="/reservations" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105 shadow-lg"
              >
                📅 Book Your Table
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🌶️</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce delay-1000">🥑</div>
        <div className="absolute top-1/2 left-20 text-4xl opacity-20 animate-pulse">🌽</div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Signature Dishes</h2>
            <p className="text-xl text-gray-600">Taste the authentic flavors that make us Casablanca's favorite Mexican restaurant</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  dish.special ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
                }`}
              >
                {dish.special && (
                  <div className="bg-yellow-400 text-red-800 text-center py-2 font-bold">
                    🌟 Weekend Special
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4">{dish.image}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="text-2xl font-bold text-red-600">{dish.price}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-500 transition-colors inline-flex items-center"
            >
              View Full Menu 📋
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Cantina Mariachi?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🌮</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Recipes</h3>
              <p className="text-gray-600">Traditional Mexican recipes passed down through generations, using only the freshest ingredients.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Vibrant Atmosphere</h3>
              <p className="text-gray-600">Experience the lively spirit of Mexico with colorful decor and festive ambiance.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery and takeout options to enjoy our delicious food anywhere in Casablanca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Highly rated on TripAdvisor and loved by locals!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <div className="font-semibold text-gray-800">- {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for an Amazing Mexican Experience?</h2>
          <p className="text-xl mb-8">Join us for lunch or dinner, or order online for delivery!</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">📍 Visit Us</h3>
              <p>4 Rue Ahmed Charci, Vélodrome</p>
              <p>📞 +212 5223-99178</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link 
                to="/order" 
                className="bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105"
              >
                Order Online 🛵
              </Link>
              <Link 
                to="/reservations" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105"
              >
                Reserve Table 🪑
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
