import { Link } from "react-router";
import type { Route } from "./+types/menu";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Menu - Cantina Mariachi | Authentic Mexican Food in Casablanca" },
    { name: "description", content: "Explore our authentic Mexican menu featuring tacos, fajitas, nachos, burritos, and our special weekend Pollo a la Brasa. Vegetarian and vegan options available." },
  ];
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuData = {
    nachos: {
      title: "Nachos",
      emoji: "🧀",
      items: [
        {
          name: "Classic Nachos",
          description: "Crispy tortilla chips topped with melted cheese, jalapeños, and sour cream",
          price: "75 MAD",
          vegetarian: true
        },
        {
          name: "Loaded Nachos Supreme",
          description: "Nachos with seasoned ground beef, cheese, guacamole, pico de gallo, and sour cream",
          price: "95 MAD"
        },
        {
          name: "Chicken Nachos",
          description: "Grilled chicken, cheese, black beans, and fresh cilantro",
          price: "85 MAD"
        },
        {
          name: "Veggie Nachos",
          description: "Black beans, corn, bell peppers, cheese, and avocado",
          price: "80 MAD",
          vegetarian: true,
          vegan: true
        }
      ]
    },
    tacos: {
      title: "Tacos",
      emoji: "🌮",
      items: [
        {
          name: "Beef Tacos (3 pieces)",
          description: "Seasoned ground beef with lettuce, tomato, cheese, and salsa",
          price: "65 MAD"
        },
        {
          name: "Chicken Tacos (3 pieces)",
          description: "Grilled chicken with fresh cilantro, onions, and lime",
          price: "60 MAD"
        },
        {
          name: "Fish Tacos (3 pieces)",
          description: "Grilled fish with cabbage slaw and chipotle mayo",
          price: "70 MAD"
        },
        {
          name: "Veggie Tacos (3 pieces)",
          description: "Black beans, corn, peppers, and avocado with lime crema",
          price: "55 MAD",
          vegetarian: true,
          vegan: true
        },
        {
          name: "Al Pastor Tacos (3 pieces)",
          description: "Marinated pork with pineapple, onions, and cilantro",
          price: "68 MAD"
        }
      ]
    },
    fajitas: {
      title: "Fajitas",
      emoji: "🔥",
      items: [
        {
          name: "Chicken Fajitas",
          description: "Sizzling chicken with bell peppers and onions, served with warm tortillas, guacamole, and sour cream",
          price: "120 MAD"
        },
        {
          name: "Beef Fajitas",
          description: "Tender beef strips with peppers and onions, complete fajita experience",
          price: "130 MAD"
        },
        {
          name: "Shrimp Fajitas",
          description: "Grilled shrimp with vegetables and all the fixings",
          price: "140 MAD"
        },
        {
          name: "Veggie Fajitas",
          description: "Mixed bell peppers, onions, zucchini, and mushrooms",
          price: "110 MAD",
          vegetarian: true,
          vegan: true
        },
        {
          name: "Mixed Fajitas",
          description: "Combination of chicken and beef with all the classic sides",
          price: "150 MAD"
        }
      ]
    },
    burritos: {
      title: "Burritos",
      emoji: "🌯",
      items: [
        {
          name: "Classic Chicken Burrito",
          description: "Grilled chicken, rice, beans, cheese, lettuce, and salsa wrapped in a large tortilla",
          price: "85 MAD"
        },
        {
          name: "Beef Burrito Supreme",
          description: "Seasoned beef, rice, beans, cheese, sour cream, and guacamole",
          price: "90 MAD"
        },
        {
          name: "Veggie Burrito",
          description: "Black beans, rice, corn, peppers, avocado, and cilantro lime sauce",
          price: "75 MAD",
          vegetarian: true,
          vegan: true
        },
        {
          name: "Breakfast Burrito",
          description: "Scrambled eggs, cheese, potatoes, and choice of bacon or chorizo",
          price: "70 MAD"
        }
      ]
    },
    flautas: {
      title: "Flautas",
      emoji: "🫔",
      items: [
        {
          name: "Chicken Flautas (4 pieces)",
          description: "Crispy rolled tortillas filled with seasoned chicken, served with guacamole and sour cream",
          price: "80 MAD"
        },
        {
          name: "Beef Flautas (4 pieces)",
          description: "Crispy rolled tortillas with seasoned beef and traditional sides",
          price: "85 MAD"
        },
        {
          name: "Cheese Flautas (4 pieces)",
          description: "Crispy tortillas filled with melted cheese and herbs",
          price: "75 MAD",
          vegetarian: true
        }
      ]
    },
    chili: {
      title: "Chili Con Carne",
      emoji: "🌶️",
      items: [
        {
          name: "Traditional Chili Con Carne",
          description: "Slow-cooked beef chili with kidney beans, served with rice and cornbread",
          price: "95 MAD"
        },
        {
          name: "Spicy Chili Con Carne",
          description: "Extra spicy version with jalapeños and habanero peppers",
          price: "100 MAD"
        },
        {
          name: "Vegetarian Chili",
          description: "Three-bean chili with vegetables and Mexican spices",
          price: "85 MAD",
          vegetarian: true,
          vegan: true
        }
      ]
    },
    specials: {
      title: "Weekend Specials",
      emoji: "⭐",
      items: [
        {
          name: "Pollo a la Brasa",
          description: "Traditional rotisserie chicken marinated in authentic Mexican spices, served with rice, beans, and fresh salad (Weekends Only)",
          price: "150 MAD",
          special: true
        },
        {
          name: "Mariachi Platter",
          description: "A combination of our best dishes: 2 tacos, nachos, and a mini burrito (Weekends Only)",
          price: "120 MAD",
          special: true
        }
      ]
    },
    drinks: {
      title: "Beverages",
      emoji: "🥤",
      items: [
        {
          name: "Fresh Lime Agua Fresca",
          description: "Traditional Mexican lime water",
          price: "25 MAD"
        },
        {
          name: "Horchata",
          description: "Sweet rice and cinnamon drink",
          price: "30 MAD",
          vegetarian: true
        },
        {
          name: "Mexican Coca-Cola",
          description: "Made with real cane sugar",
          price: "20 MAD"
        },
        {
          name: "Freshly Squeezed Orange Juice",
          description: "100% fresh orange juice",
          price: "35 MAD",
          vegan: true
        }
      ]
    },
    desserts: {
      title: "Desserts",
      emoji: "🍮",
      items: [
        {
          name: "Flan",
          description: "Traditional Mexican caramel custard",
          price: "45 MAD",
          vegetarian: true
        },
        {
          name: "Churros with Chocolate",
          description: "Crispy churros served with rich chocolate dipping sauce",
          price: "40 MAD",
          vegetarian: true
        },
        {
          name: "Tres Leches Cake",
          description: "Moist sponge cake soaked in three types of milk",
          price: "50 MAD",
          vegetarian: true
        }
      ]
    }
  };

  const categories = [
    { id: "all", name: "All Items", emoji: "🍽️" },
    { id: "nachos", name: "Nachos", emoji: "🧀" },
    { id: "tacos", name: "Tacos", emoji: "🌮" },
    { id: "fajitas", name: "Fajitas", emoji: "🔥" },
    { id: "burritos", name: "Burritos", emoji: "🌯" },
    { id: "flautas", name: "Flautas", emoji: "🫔" },
    { id: "chili", name: "Chili", emoji: "🌶️" },
    { id: "specials", name: "Specials", emoji: "⭐" },
    { id: "drinks", name: "Drinks", emoji: "🥤" },
    { id: "desserts", name: "Desserts", emoji: "🍮" }
  ];

  const filteredCategories = activeCategory === "all" 
    ? Object.entries(menuData)
    : [[activeCategory, menuData[activeCategory as keyof typeof menuData]]];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-300">Our Authentic Menu</h1>
          <p className="text-xl mb-8">Discover the rich flavors of traditional Mexican cuisine</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/order" 
              className="bg-yellow-500 text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              🛵 Order Online
            </Link>
            <Link 
              to="/reservations" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
            >
              📅 Reserve Table
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-md sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCategories.map(([categoryKey, category]) => (
            <div key={categoryKey} className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  {category.emoji} {category.title}
                </h2>
                {categoryKey === "specials" && (
                  <p className="text-red-600 font-semibold">⭐ Available on Weekends Only</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                      item.special ? 'ring-2 ring-yellow-400' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800 flex-1">{item.name}</h3>
                      <div className="text-2xl font-bold text-red-600 ml-4">{item.price}</div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {item.vegetarian && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                            🌱 Vegetarian
                          </span>
                        )}
                        {item.vegan && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                            🌿 Vegan
                          </span>
                        )}
                        {item.special && (
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                            ⭐ Weekend Special
                          </span>
                        )}
                      </div>
                      
                      <Link 
                        to="/order"
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors text-sm font-semibold"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Dietary Information</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                🌱 Vegetarian
              </span>
              <span className="text-gray-600">No meat or fish</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                🌿 Vegan
              </span>
              <span className="text-gray-600">No animal products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ Weekend Special
              </span>
              <span className="text-gray-600">Available Fri-Sun only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-6">Get your favorite Mexican dishes delivered or pick them up!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/order" 
              className="bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              🛵 Order for Delivery
            </Link>
            <Link 
              to="/reservations" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105"
            >
              🪑 Dine In - Reserve Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}