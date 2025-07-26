import { Link } from "react-router";
import type { Route } from "./+types/order";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Order Online - Cantina Mariachi | Mexican Food Delivery in Casablanca" },
    { name: "description", content: "Order authentic Mexican food online for delivery or pickup in Casablanca. Fast delivery from Cantina Mariachi - the best Mexican restaurant in town!" },
  ];
}

export default function Order() {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [cart, setCart] = useState<any[]>([]);

  const quickOrderItems = [
    {
      name: "Chicken Fajitas",
      description: "Sizzling chicken with bell peppers and onions",
      price: 120,
      image: "🔥",
      popular: true
    },
    {
      name: "Loaded Nachos Supreme",
      description: "Nachos with beef, cheese, guacamole, and sour cream",
      price: 95,
      image: "🧀",
      popular: true
    },
    {
      name: "Classic Chicken Burrito",
      description: "Grilled chicken, rice, beans, cheese, and salsa",
      price: 85,
      image: "🌯"
    },
    {
      name: "Beef Tacos (3 pieces)",
      description: "Seasoned ground beef with fresh toppings",
      price: 65,
      image: "🌮",
      popular: true
    },
    {
      name: "Veggie Fajitas",
      description: "Mixed bell peppers, onions, and mushrooms",
      price: 110,
      image: "🥬",
      vegetarian: true
    },
    {
      name: "Weekend Pollo a la Brasa",
      description: "Traditional rotisserie chicken (Weekends only)",
      price: 150,
      image: "🍗",
      special: true
    }
  ];

  const addToCart = (item: any) => {
    setCart([...cart, { ...item, id: Date.now() }]);
  };

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-yellow-300">Order Online</h1>
          <p className="text-xl mb-6">Get authentic Mexican food delivered or ready for pickup!</p>
          
          {/* Order Type Selection */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setOrderType("delivery")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                orderType === "delivery"
                  ? "bg-yellow-500 text-red-800 shadow-lg"
                  : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
              }`}
            >
              🚚 Delivery
            </button>
            <button
              onClick={() => setOrderType("pickup")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                orderType === "pickup"
                  ? "bg-yellow-500 text-red-800 shadow-lg"
                  : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
              }`}
            >
              🏪 Pickup
            </button>
          </div>

          <div className="text-center">
            <p className="text-lg">
              📍 4 Rue Ahmed Charci, Vélodrome • 📞 +212 5223-99178
            </p>
            {orderType === "delivery" && (
              <p className="text-yellow-300 mt-2">🕒 Delivery time: 30-45 minutes • Free delivery over 100 MAD</p>
            )}
            {orderType === "pickup" && (
              <p className="text-yellow-300 mt-2">🕒 Pickup ready in: 15-20 minutes</p>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Quick Order</h2>
                <Link 
                  to="/menu" 
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  View Full Menu
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickOrderItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{item.image}</span>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                          {item.popular && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                              🔥 Popular
                            </span>
                          )}
                          {item.special && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                              ⭐ Weekend Special
                            </span>
                          )}
                          {item.vegetarian && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              🌱 Vegetarian
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-xl font-bold text-red-600">{item.price} MAD</div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition-colors font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">📋 Order Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700">Delivery Areas:</h4>
                  <ul className="text-blue-600 mt-1">
                    <li>• Vélodrome</li>
                    <li>• Maarif</li>
                    <li>• Gauthier</li>
                    <li>• Centre Ville</li>
                    <li>• Racine</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Opening Hours:</h4>
                  <ul className="text-blue-600 mt-1">
                    <li>• Monday - Sunday</li>
                    <li>• 12:00 PM - 11:00 PM</li>
                    <li>• Last orders: 10:30 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🛒 Your Order ({cart.length} items)
              </h3>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <span className="text-6xl mb-4 block">🛒</span>
                  <p className="text-gray-500">Your cart is empty</p>
                  <p className="text-sm text-gray-400 mt-2">Add items from our menu to get started!</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{item.image}</span>
                          <div>
                            <p className="font-semibold text-sm">{item.name}</p>
                            <p className="text-red-600 font-bold">{item.price} MAD</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-xl"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Subtotal:</span>
                      <span className="font-bold">{getCartTotal()} MAD</span>
                    </div>
                    
                    {orderType === "delivery" && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Delivery fee:</span>
                        <span className="text-sm">
                          {getCartTotal() >= 100 ? (
                            <span className="text-green-600 font-semibold">FREE!</span>
                          ) : (
                            "15 MAD"
                          )}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                      <span>Total:</span>
                      <span className="text-red-600">
                        {orderType === "delivery" && getCartTotal() < 100 
                          ? getCartTotal() + 15 
                          : getCartTotal()
                        } MAD
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-colors font-bold text-lg mt-6">
                    {orderType === "delivery" ? "🚚 Place Delivery Order" : "🏪 Place Pickup Order"}
                  </button>
                </>
              )}
              
              {/* Contact for Phone Orders */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2">📞 Prefer to Call?</h4>
                <p className="text-sm text-yellow-700 mb-2">
                  Call us directly to place your order:
                </p>
                <a 
                  href="tel:+212522399178" 
                  className="text-lg font-bold text-yellow-800 hover:text-yellow-900"
                >
                  +212 5223-99178
                </a>
                <p className="text-xs text-yellow-600 mt-1">
                  Available during opening hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Order from Cantina Mariachi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery in 30-45 minutes to your doorstep</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌮</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh & Authentic</h3>
              <p className="text-gray-600">Made fresh with authentic Mexican recipes and ingredients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Great Value</h3>
              <p className="text-gray-600">Free delivery over 100 MAD and competitive prices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}