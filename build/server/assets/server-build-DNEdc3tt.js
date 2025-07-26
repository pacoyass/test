import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, Meta, Links, ScrollRestoration, Scripts, isRouteErrorResponse, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap"
}];
function meta$6() {
  return [{
    title: "Cantina Mariachi - Authentic Mexican Food in Casablanca"
  }, {
    name: "description",
    content: "Experience the best Mexican cuisine in Casablanca at Cantina Mariachi. Order online or book a table for authentic tacos, fajitas, and more!"
  }, {
    name: "keywords",
    content: "best Mexican food Casablanca, Cantina Mariachi Casablanca, Mexican restaurant near me, tacos, fajitas, authentic Mexican cuisine"
  }];
}
function Header() {
  return /* @__PURE__ */ jsx("header", {
    className: "bg-red-600 text-white shadow-lg sticky top-0 z-50",
    children: /* @__PURE__ */ jsx("div", {
      className: "container mx-auto px-4",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex items-center justify-between py-4",
        children: [/* @__PURE__ */ jsxs(Link, {
          to: "/",
          className: "flex items-center space-x-2",
          children: [/* @__PURE__ */ jsx("span", {
            className: "text-2xl",
            children: "🌮"
          }), /* @__PURE__ */ jsx("h1", {
            className: "text-2xl font-bold text-yellow-300",
            children: "Cantina Mariachi"
          })]
        }), /* @__PURE__ */ jsxs("nav", {
          className: "hidden md:flex space-x-6",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "hover:text-yellow-300 transition-colors",
            children: "Home"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/menu",
            className: "hover:text-yellow-300 transition-colors",
            children: "Menu"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/order",
            className: "hover:text-yellow-300 transition-colors",
            children: "Order Online"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/reservations",
            className: "hover:text-yellow-300 transition-colors",
            children: "Reservations"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/about",
            className: "hover:text-yellow-300 transition-colors",
            children: "About"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/contact",
            className: "hover:text-yellow-300 transition-colors",
            children: "Contact"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex space-x-3",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/order",
            className: "bg-yellow-500 text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors",
            children: "Order Now"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/reservations",
            className: "bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-500 transition-colors",
            children: "Book Table"
          })]
        }), /* @__PURE__ */ jsx("button", {
          className: "md:hidden text-white",
          children: /* @__PURE__ */ jsx("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M4 6h16M4 12h16M4 18h16"
            })
          })
        })]
      })
    })
  });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", {
    className: "bg-gray-900 text-white py-12",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container mx-auto px-4",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-4 gap-8",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h3", {
            className: "text-xl font-bold text-yellow-300 mb-4",
            children: "Cantina Mariachi"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-gray-300",
            children: "Authentic Mexican flavors in the heart of Casablanca"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h4", {
            className: "text-lg font-semibold mb-4",
            children: "Quick Links"
          }), /* @__PURE__ */ jsxs("ul", {
            className: "space-y-2",
            children: [/* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx(Link, {
                to: "/menu",
                className: "text-gray-300 hover:text-yellow-300 transition-colors",
                children: "Menu"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx(Link, {
                to: "/order",
                className: "text-gray-300 hover:text-yellow-300 transition-colors",
                children: "Order Online"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx(Link, {
                to: "/reservations",
                className: "text-gray-300 hover:text-yellow-300 transition-colors",
                children: "Reservations"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx(Link, {
                to: "/about",
                className: "text-gray-300 hover:text-yellow-300 transition-colors",
                children: "About Us"
              })
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h4", {
            className: "text-lg font-semibold mb-4",
            children: "Contact"
          }), /* @__PURE__ */ jsxs("div", {
            className: "space-y-2 text-gray-300",
            children: [/* @__PURE__ */ jsx("p", {
              children: "📍 4 Rue Ahmed Charci, Vélodrome"
            }), /* @__PURE__ */ jsx("p", {
              children: "📞 +212 5223-99178"
            }), /* @__PURE__ */ jsx("p", {
              children: "🕒 Open Daily: 12:00 PM - 11:00 PM"
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h4", {
            className: "text-lg font-semibold mb-4",
            children: "Follow Us"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex space-x-4",
            children: [/* @__PURE__ */ jsxs("a", {
              href: "#",
              className: "text-gray-300 hover:text-yellow-300 transition-colors",
              children: [/* @__PURE__ */ jsx("span", {
                className: "sr-only",
                children: "Facebook"
              }), "📘"]
            }), /* @__PURE__ */ jsxs("a", {
              href: "#",
              className: "text-gray-300 hover:text-yellow-300 transition-colors",
              children: [/* @__PURE__ */ jsx("span", {
                className: "sr-only",
                children: "Instagram"
              }), "📷"]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-4",
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-2",
              children: "Newsletter"
            }), /* @__PURE__ */ jsxs("form", {
              className: "flex",
              children: [/* @__PURE__ */ jsx("input", {
                type: "email",
                placeholder: "Your email",
                className: "flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-yellow-300"
              }), /* @__PURE__ */ jsx("button", {
                type: "submit",
                className: "bg-yellow-500 text-red-800 px-4 py-2 rounded-r-lg hover:bg-yellow-400 transition-colors",
                children: "Subscribe"
              })]
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",
        children: /* @__PURE__ */ jsx("p", {
          children: "© 2024 Cantina Mariachi. All rights reserved. Made with ❤️ in Casablanca"
        })
      })]
    })
  });
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "min-h-screen flex flex-col",
      children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", {
        className: "flex-1",
        children
      }), /* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsx("div", {
    className: "min-h-screen bg-gray-100 flex items-center justify-center",
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-3xl font-bold text-red-600 mb-4",
        children: message
      }), /* @__PURE__ */ jsx("p", {
        className: "text-gray-600 mb-6",
        children: details
      }), stack, /* @__PURE__ */ jsx(Link, {
        to: "/",
        className: "bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-colors",
        children: "Go Home"
      })]
    })
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function meta$5({}) {
  return [{
    title: "Cantina Mariachi - Authentic Mexican Flavors in Casablanca"
  }, {
    name: "description",
    content: "Experience the best Mexican cuisine in Casablanca! Order online or book a table for authentic tacos, fajitas, nachos, and our weekend Pollo a la Brasa special."
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  const featuredDishes = [{
    name: "Sizzling Fajitas",
    description: "Tender chicken or beef with bell peppers and onions, served with warm tortillas",
    image: "🌮",
    price: "120 MAD"
  }, {
    name: "Loaded Nachos",
    description: "Crispy tortilla chips topped with cheese, jalapeños, and fresh guacamole",
    image: "🧀",
    price: "85 MAD"
  }, {
    name: "Classic Tacos",
    description: "Soft or hard shell tacos with your choice of meat, fresh salsa, and cilantro",
    image: "🌮",
    price: "45 MAD"
  }, {
    name: "Weekend Pollo a la Brasa",
    description: "Special rotisserie chicken marinated in authentic Mexican spices (Weekends only)",
    image: "🍗",
    price: "150 MAD",
    special: true
  }];
  const testimonials = [{
    name: "Ahmed M.",
    rating: 5,
    text: "Best Mexican food in Casablanca! The atmosphere is amazing and the fajitas are incredible."
  }, {
    name: "Sarah L.",
    rating: 5,
    text: "Authentic flavors and great service. The weekend chicken special is a must-try!"
  }, {
    name: "Omar K.",
    rating: 4,
    text: "Love the vibrant atmosphere and delicious nachos. Perfect for family dinners."
  }];
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative bg-gradient-to-r from-red-600 to-orange-500 text-white py-20 overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 bg-black bg-opacity-20"
      }), /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4 relative z-10",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [/* @__PURE__ */ jsx("h1", {
            className: "text-5xl md:text-7xl font-bold mb-6 text-yellow-300",
            children: "¡Authentic Mexican Flavors in Casablanca!"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl md:text-2xl mb-8 text-gray-100",
            children: "Experience the vibrant tastes of Mexico right in the heart of Casablanca. Fresh ingredients, traditional recipes, and a festive atmosphere await you!"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/order",
              className: "bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg",
              children: "🚚 Order Online Now"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/reservations",
              className: "bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105 shadow-lg",
              children: "📅 Book Your Table"
            })]
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute top-10 left-10 text-6xl opacity-20 animate-bounce",
        children: "🌶️"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce delay-1000",
        children: "🥑"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute top-1/2 left-20 text-4xl opacity-20 animate-pulse",
        children: "🌽"
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-gray-50",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-gray-800 mb-4",
            children: "Our Signature Dishes"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl text-gray-600",
            children: "Taste the authentic flavors that make us Casablanca's favorite Mexican restaurant"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: featuredDishes.map((dish, index) => /* @__PURE__ */ jsxs("div", {
            className: `bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${dish.special ? "ring-4 ring-yellow-400 ring-opacity-50" : ""}`,
            children: [dish.special && /* @__PURE__ */ jsx("div", {
              className: "bg-yellow-400 text-red-800 text-center py-2 font-bold",
              children: "🌟 Weekend Special"
            }), /* @__PURE__ */ jsxs("div", {
              className: "p-6 text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-6xl mb-4",
                children: dish.image
              }), /* @__PURE__ */ jsx("h3", {
                className: "text-xl font-bold text-gray-800 mb-2",
                children: dish.name
              }), /* @__PURE__ */ jsx("p", {
                className: "text-gray-600 mb-4",
                children: dish.description
              }), /* @__PURE__ */ jsx("div", {
                className: "text-2xl font-bold text-red-600",
                children: dish.price
              })]
            })]
          }, index))
        }), /* @__PURE__ */ jsx("div", {
          className: "text-center mt-12",
          children: /* @__PURE__ */ jsx(Link, {
            to: "/menu",
            className: "bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-500 transition-colors inline-flex items-center",
            children: "View Full Menu 📋"
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-center mb-12",
          children: /* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-gray-800 mb-4",
            children: "Why Cantina Mariachi?"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-6xl mb-4",
              children: "🌮"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "Authentic Recipes"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Traditional Mexican recipes passed down through generations, using only the freshest ingredients."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-6xl mb-4",
              children: "🎉"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "Vibrant Atmosphere"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Experience the lively spirit of Mexico with colorful decor and festive ambiance."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-6xl mb-4",
              children: "🚚"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "Fast Delivery"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Quick delivery and takeout options to enjoy our delicious food anywhere in Casablanca."
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-gray-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-gray-800 mb-4",
            children: "What Our Customers Say"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl text-gray-600",
            children: "Highly rated on TripAdvisor and loved by locals!"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: testimonials.map((review, index) => /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex mb-4",
              children: [...Array(review.rating)].map((_, i) => /* @__PURE__ */ jsx("span", {
                className: "text-yellow-400 text-2xl",
                children: "⭐"
              }, i))
            }), /* @__PURE__ */ jsxs("p", {
              className: "text-gray-600 mb-4 italic",
              children: ['"', review.text, '"']
            }), /* @__PURE__ */ jsxs("div", {
              className: "font-semibold text-gray-800",
              children: ["- ", review.name]
            })]
          }, index))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold mb-4",
          children: "Ready for an Amazing Mexican Experience?"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl mb-8",
          children: "Join us for lunch or dinner, or order online for delivery!"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "bg-white bg-opacity-20 rounded-lg p-6",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold mb-2",
              children: "📍 Visit Us"
            }), /* @__PURE__ */ jsx("p", {
              children: "4 Rue Ahmed Charci, Vélodrome"
            }), /* @__PURE__ */ jsx("p", {
              children: "📞 +212 5223-99178"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col gap-4",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/order",
              className: "bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105",
              children: "Order Online 🛵"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/reservations",
              className: "bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105",
              children: "Reserve Table 🪑"
            })]
          })]
        })]
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function meta$4({}) {
  return [{
    title: "Menu - Cantina Mariachi | Authentic Mexican Food in Casablanca"
  }, {
    name: "description",
    content: "Explore our authentic Mexican menu featuring tacos, fajitas, nachos, burritos, and our special weekend Pollo a la Brasa. Vegetarian and vegan options available."
  }];
}
const menu = UNSAFE_withComponentProps(function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const menuData = {
    nachos: {
      title: "Nachos",
      emoji: "🧀",
      items: [{
        name: "Classic Nachos",
        description: "Crispy tortilla chips topped with melted cheese, jalapeños, and sour cream",
        price: "75 MAD",
        vegetarian: true
      }, {
        name: "Loaded Nachos Supreme",
        description: "Nachos with seasoned ground beef, cheese, guacamole, pico de gallo, and sour cream",
        price: "95 MAD"
      }, {
        name: "Chicken Nachos",
        description: "Grilled chicken, cheese, black beans, and fresh cilantro",
        price: "85 MAD"
      }, {
        name: "Veggie Nachos",
        description: "Black beans, corn, bell peppers, cheese, and avocado",
        price: "80 MAD",
        vegetarian: true,
        vegan: true
      }]
    },
    tacos: {
      title: "Tacos",
      emoji: "🌮",
      items: [{
        name: "Beef Tacos (3 pieces)",
        description: "Seasoned ground beef with lettuce, tomato, cheese, and salsa",
        price: "65 MAD"
      }, {
        name: "Chicken Tacos (3 pieces)",
        description: "Grilled chicken with fresh cilantro, onions, and lime",
        price: "60 MAD"
      }, {
        name: "Fish Tacos (3 pieces)",
        description: "Grilled fish with cabbage slaw and chipotle mayo",
        price: "70 MAD"
      }, {
        name: "Veggie Tacos (3 pieces)",
        description: "Black beans, corn, peppers, and avocado with lime crema",
        price: "55 MAD",
        vegetarian: true,
        vegan: true
      }, {
        name: "Al Pastor Tacos (3 pieces)",
        description: "Marinated pork with pineapple, onions, and cilantro",
        price: "68 MAD"
      }]
    },
    fajitas: {
      title: "Fajitas",
      emoji: "🔥",
      items: [{
        name: "Chicken Fajitas",
        description: "Sizzling chicken with bell peppers and onions, served with warm tortillas, guacamole, and sour cream",
        price: "120 MAD"
      }, {
        name: "Beef Fajitas",
        description: "Tender beef strips with peppers and onions, complete fajita experience",
        price: "130 MAD"
      }, {
        name: "Shrimp Fajitas",
        description: "Grilled shrimp with vegetables and all the fixings",
        price: "140 MAD"
      }, {
        name: "Veggie Fajitas",
        description: "Mixed bell peppers, onions, zucchini, and mushrooms",
        price: "110 MAD",
        vegetarian: true,
        vegan: true
      }, {
        name: "Mixed Fajitas",
        description: "Combination of chicken and beef with all the classic sides",
        price: "150 MAD"
      }]
    },
    burritos: {
      title: "Burritos",
      emoji: "🌯",
      items: [{
        name: "Classic Chicken Burrito",
        description: "Grilled chicken, rice, beans, cheese, lettuce, and salsa wrapped in a large tortilla",
        price: "85 MAD"
      }, {
        name: "Beef Burrito Supreme",
        description: "Seasoned beef, rice, beans, cheese, sour cream, and guacamole",
        price: "90 MAD"
      }, {
        name: "Veggie Burrito",
        description: "Black beans, rice, corn, peppers, avocado, and cilantro lime sauce",
        price: "75 MAD",
        vegetarian: true,
        vegan: true
      }, {
        name: "Breakfast Burrito",
        description: "Scrambled eggs, cheese, potatoes, and choice of bacon or chorizo",
        price: "70 MAD"
      }]
    },
    flautas: {
      title: "Flautas",
      emoji: "🫔",
      items: [{
        name: "Chicken Flautas (4 pieces)",
        description: "Crispy rolled tortillas filled with seasoned chicken, served with guacamole and sour cream",
        price: "80 MAD"
      }, {
        name: "Beef Flautas (4 pieces)",
        description: "Crispy rolled tortillas with seasoned beef and traditional sides",
        price: "85 MAD"
      }, {
        name: "Cheese Flautas (4 pieces)",
        description: "Crispy tortillas filled with melted cheese and herbs",
        price: "75 MAD",
        vegetarian: true
      }]
    },
    chili: {
      title: "Chili Con Carne",
      emoji: "🌶️",
      items: [{
        name: "Traditional Chili Con Carne",
        description: "Slow-cooked beef chili with kidney beans, served with rice and cornbread",
        price: "95 MAD"
      }, {
        name: "Spicy Chili Con Carne",
        description: "Extra spicy version with jalapeños and habanero peppers",
        price: "100 MAD"
      }, {
        name: "Vegetarian Chili",
        description: "Three-bean chili with vegetables and Mexican spices",
        price: "85 MAD",
        vegetarian: true,
        vegan: true
      }]
    },
    specials: {
      title: "Weekend Specials",
      emoji: "⭐",
      items: [{
        name: "Pollo a la Brasa",
        description: "Traditional rotisserie chicken marinated in authentic Mexican spices, served with rice, beans, and fresh salad (Weekends Only)",
        price: "150 MAD",
        special: true
      }, {
        name: "Mariachi Platter",
        description: "A combination of our best dishes: 2 tacos, nachos, and a mini burrito (Weekends Only)",
        price: "120 MAD",
        special: true
      }]
    },
    drinks: {
      title: "Beverages",
      emoji: "🥤",
      items: [{
        name: "Fresh Lime Agua Fresca",
        description: "Traditional Mexican lime water",
        price: "25 MAD"
      }, {
        name: "Horchata",
        description: "Sweet rice and cinnamon drink",
        price: "30 MAD",
        vegetarian: true
      }, {
        name: "Mexican Coca-Cola",
        description: "Made with real cane sugar",
        price: "20 MAD"
      }, {
        name: "Freshly Squeezed Orange Juice",
        description: "100% fresh orange juice",
        price: "35 MAD",
        vegan: true
      }]
    },
    desserts: {
      title: "Desserts",
      emoji: "🍮",
      items: [{
        name: "Flan",
        description: "Traditional Mexican caramel custard",
        price: "45 MAD",
        vegetarian: true
      }, {
        name: "Churros with Chocolate",
        description: "Crispy churros served with rich chocolate dipping sauce",
        price: "40 MAD",
        vegetarian: true
      }, {
        name: "Tres Leches Cake",
        description: "Moist sponge cake soaked in three types of milk",
        price: "50 MAD",
        vegetarian: true
      }]
    }
  };
  const categories = [{
    id: "all",
    name: "All Items",
    emoji: "🍽️"
  }, {
    id: "nachos",
    name: "Nachos",
    emoji: "🧀"
  }, {
    id: "tacos",
    name: "Tacos",
    emoji: "🌮"
  }, {
    id: "fajitas",
    name: "Fajitas",
    emoji: "🔥"
  }, {
    id: "burritos",
    name: "Burritos",
    emoji: "🌯"
  }, {
    id: "flautas",
    name: "Flautas",
    emoji: "🫔"
  }, {
    id: "chili",
    name: "Chili",
    emoji: "🌶️"
  }, {
    id: "specials",
    name: "Specials",
    emoji: "⭐"
  }, {
    id: "drinks",
    name: "Drinks",
    emoji: "🥤"
  }, {
    id: "desserts",
    name: "Desserts",
    emoji: "🍮"
  }];
  const filteredCategories = activeCategory === "all" ? Object.entries(menuData) : [[activeCategory, menuData[activeCategory]]];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/* @__PURE__ */ jsx("section", {
      className: "bg-gradient-to-r from-red-600 to-orange-500 text-white py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold mb-4 text-yellow-300",
          children: "Our Authentic Menu"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl mb-8",
          children: "Discover the rich flavors of traditional Mexican cuisine"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/order",
            className: "bg-yellow-500 text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors",
            children: "🛵 Order Online"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/reservations",
            className: "bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors",
            children: "📅 Reserve Table"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-8 bg-white shadow-md sticky top-20 z-40",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex flex-wrap justify-center gap-3",
          children: categories.map((category) => /* @__PURE__ */ jsxs("button", {
            onClick: () => setActiveCategory(category.id),
            className: `px-4 py-2 rounded-lg font-semibold transition-all ${activeCategory === category.id ? "bg-red-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
            children: [category.emoji, " ", category.name]
          }, category.id))
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-12",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: filteredCategories.map(([categoryKey, category]) => /* @__PURE__ */ jsxs("div", {
          className: "mb-12",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-center mb-8",
            children: [/* @__PURE__ */ jsxs("h2", {
              className: "text-4xl font-bold text-gray-800 mb-2",
              children: [category.emoji, " ", category.title]
            }), categoryKey === "specials" && /* @__PURE__ */ jsx("p", {
              className: "text-red-600 font-semibold",
              children: "⭐ Available on Weekends Only"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: category.items.map((item, index) => /* @__PURE__ */ jsxs("div", {
              className: `bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${item.special ? "ring-2 ring-yellow-400" : ""}`,
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex justify-between items-start mb-3",
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-bold text-gray-800 flex-1",
                  children: item.name
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-2xl font-bold text-red-600 ml-4",
                  children: item.price
                })]
              }), /* @__PURE__ */ jsx("p", {
                className: "text-gray-600 mb-4",
                children: item.description
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex justify-between items-center",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "flex gap-2",
                  children: [item.vegetarian && /* @__PURE__ */ jsx("span", {
                    className: "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold",
                    children: "🌱 Vegetarian"
                  }), item.vegan && /* @__PURE__ */ jsx("span", {
                    className: "bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold",
                    children: "🌿 Vegan"
                  }), item.special && /* @__PURE__ */ jsx("span", {
                    className: "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold",
                    children: "⭐ Weekend Special"
                  })]
                }), /* @__PURE__ */ jsx(Link, {
                  to: "/order",
                  className: "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors text-sm font-semibold",
                  children: "Order Now"
                })]
              })]
            }, index))
          })]
        }, categoryKey))
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-8 bg-gray-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "text-2xl font-bold text-gray-800 mb-4",
          children: "Dietary Information"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-wrap justify-center gap-4",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-2",
            children: [/* @__PURE__ */ jsx("span", {
              className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold",
              children: "🌱 Vegetarian"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-gray-600",
              children: "No meat or fish"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-2",
            children: [/* @__PURE__ */ jsx("span", {
              className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold",
              children: "🌿 Vegan"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-gray-600",
              children: "No animal products"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-2",
            children: [/* @__PURE__ */ jsx("span", {
              className: "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold",
              children: "⭐ Weekend Special"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-gray-600",
              children: "Available Fri-Sun only"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-12 bg-gradient-to-r from-red-600 to-orange-500 text-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold mb-4",
          children: "Ready to Order?"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl mb-6",
          children: "Get your favorite Mexican dishes delivered or pick them up!"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/order",
            className: "bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105",
            children: "🛵 Order for Delivery"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/reservations",
            className: "bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105",
            children: "🪑 Dine In - Reserve Table"
          })]
        })]
      })
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: menu,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
function meta$3({}) {
  return [{
    title: "Order Online - Cantina Mariachi | Mexican Food Delivery in Casablanca"
  }, {
    name: "description",
    content: "Order authentic Mexican food online for delivery or pickup in Casablanca. Fast delivery from Cantina Mariachi - the best Mexican restaurant in town!"
  }];
}
const order = UNSAFE_withComponentProps(function Order() {
  const [orderType, setOrderType] = useState("delivery");
  const [cart, setCart] = useState([]);
  const quickOrderItems = [{
    name: "Chicken Fajitas",
    description: "Sizzling chicken with bell peppers and onions",
    price: 120,
    image: "🔥",
    popular: true
  }, {
    name: "Loaded Nachos Supreme",
    description: "Nachos with beef, cheese, guacamole, and sour cream",
    price: 95,
    image: "🧀",
    popular: true
  }, {
    name: "Classic Chicken Burrito",
    description: "Grilled chicken, rice, beans, cheese, and salsa",
    price: 85,
    image: "🌯"
  }, {
    name: "Beef Tacos (3 pieces)",
    description: "Seasoned ground beef with fresh toppings",
    price: 65,
    image: "🌮",
    popular: true
  }, {
    name: "Veggie Fajitas",
    description: "Mixed bell peppers, onions, and mushrooms",
    price: 110,
    image: "🥬",
    vegetarian: true
  }, {
    name: "Weekend Pollo a la Brasa",
    description: "Traditional rotisserie chicken (Weekends only)",
    price: 150,
    image: "🍗",
    special: true
  }];
  const addToCart = (item) => {
    setCart([...cart, {
      ...item,
      id: Date.now()
    }]);
  };
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/* @__PURE__ */ jsx("section", {
      className: "bg-gradient-to-r from-red-600 to-orange-500 text-white py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-4xl font-bold mb-4 text-yellow-300",
          children: "Order Online"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl mb-6",
          children: "Get authentic Mexican food delivered or ready for pickup!"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-center gap-4 mb-6",
          children: [/* @__PURE__ */ jsx("button", {
            onClick: () => setOrderType("delivery"),
            className: `px-6 py-3 rounded-lg font-semibold transition-all ${orderType === "delivery" ? "bg-yellow-500 text-red-800 shadow-lg" : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"}`,
            children: "🚚 Delivery"
          }), /* @__PURE__ */ jsx("button", {
            onClick: () => setOrderType("pickup"),
            className: `px-6 py-3 rounded-lg font-semibold transition-all ${orderType === "pickup" ? "bg-yellow-500 text-red-800 shadow-lg" : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"}`,
            children: "🏪 Pickup"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "text-center",
          children: [/* @__PURE__ */ jsx("p", {
            className: "text-lg",
            children: "📍 4 Rue Ahmed Charci, Vélodrome • 📞 +212 5223-99178"
          }), orderType === "delivery" && /* @__PURE__ */ jsx("p", {
            className: "text-yellow-300 mt-2",
            children: "🕒 Delivery time: 30-45 minutes • Free delivery over 100 MAD"
          }), orderType === "pickup" && /* @__PURE__ */ jsx("p", {
            className: "text-yellow-300 mt-2",
            children: "🕒 Pickup ready in: 15-20 minutes"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "container mx-auto px-4 py-8",
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "lg:col-span-2",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "mb-8",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex justify-between items-center mb-6",
              children: [/* @__PURE__ */ jsx("h2", {
                className: "text-3xl font-bold text-gray-800",
                children: "Quick Order"
              }), /* @__PURE__ */ jsx(Link, {
                to: "/menu",
                className: "bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors",
                children: "View Full Menu"
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: quickOrderItems.map((item, index) => /* @__PURE__ */ jsxs("div", {
                className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between items-start mb-3",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "text-3xl",
                      children: item.image
                    }), /* @__PURE__ */ jsxs("div", {
                      children: [/* @__PURE__ */ jsx("h3", {
                        className: "text-lg font-bold text-gray-800",
                        children: item.name
                      }), item.popular && /* @__PURE__ */ jsx("span", {
                        className: "bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full",
                        children: "🔥 Popular"
                      }), item.special && /* @__PURE__ */ jsx("span", {
                        className: "bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full",
                        children: "⭐ Weekend Special"
                      }), item.vegetarian && /* @__PURE__ */ jsx("span", {
                        className: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full",
                        children: "🌱 Vegetarian"
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "text-xl font-bold text-red-600",
                    children: [item.price, " MAD"]
                  })]
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-gray-600 mb-4",
                  children: item.description
                }), /* @__PURE__ */ jsx("button", {
                  onClick: () => addToCart(item),
                  className: "w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition-colors font-semibold",
                  children: "Add to Cart"
                })]
              }, index))
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-blue-50 border border-blue-200 rounded-lg p-6",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-blue-800 mb-4",
              children: "📋 Order Information"
            }), /* @__PURE__ */ jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h4", {
                  className: "font-semibold text-blue-700",
                  children: "Delivery Areas:"
                }), /* @__PURE__ */ jsxs("ul", {
                  className: "text-blue-600 mt-1",
                  children: [/* @__PURE__ */ jsx("li", {
                    children: "• Vélodrome"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Maarif"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Gauthier"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Centre Ville"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Racine"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h4", {
                  className: "font-semibold text-blue-700",
                  children: "Opening Hours:"
                }), /* @__PURE__ */ jsxs("ul", {
                  className: "text-blue-600 mt-1",
                  children: [/* @__PURE__ */ jsx("li", {
                    children: "• Monday - Sunday"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• 12:00 PM - 11:00 PM"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Last orders: 10:30 PM"
                  })]
                })]
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "lg:col-span-1",
          children: /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-md p-6 sticky top-24",
            children: [/* @__PURE__ */ jsxs("h3", {
              className: "text-2xl font-bold text-gray-800 mb-4",
              children: ["🛒 Your Order (", cart.length, " items)"]
            }), cart.length === 0 ? /* @__PURE__ */ jsxs("div", {
              className: "text-center py-8",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-6xl mb-4 block",
                children: "🛒"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-gray-500",
                children: "Your cart is empty"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-gray-400 mt-2",
                children: "Add items from our menu to get started!"
              })]
            }) : /* @__PURE__ */ jsxs(Fragment, {
              children: [/* @__PURE__ */ jsx("div", {
                className: "space-y-3 mb-6 max-h-64 overflow-y-auto",
                children: cart.map((item) => /* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "text-lg",
                      children: item.image
                    }), /* @__PURE__ */ jsxs("div", {
                      children: [/* @__PURE__ */ jsx("p", {
                        className: "font-semibold text-sm",
                        children: item.name
                      }), /* @__PURE__ */ jsxs("p", {
                        className: "text-red-600 font-bold",
                        children: [item.price, " MAD"]
                      })]
                    })]
                  }), /* @__PURE__ */ jsx("button", {
                    onClick: () => removeFromCart(item.id),
                    className: "text-red-500 hover:text-red-700 text-xl",
                    children: "×"
                  })]
                }, item.id))
              }), /* @__PURE__ */ jsxs("div", {
                className: "border-t pt-4",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between items-center mb-2",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "font-semibold",
                    children: "Subtotal:"
                  }), /* @__PURE__ */ jsxs("span", {
                    className: "font-bold",
                    children: [getCartTotal(), " MAD"]
                  })]
                }), orderType === "delivery" && /* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between items-center mb-2",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "text-sm",
                    children: "Delivery fee:"
                  }), /* @__PURE__ */ jsx("span", {
                    className: "text-sm",
                    children: getCartTotal() >= 100 ? /* @__PURE__ */ jsx("span", {
                      className: "text-green-600 font-semibold",
                      children: "FREE!"
                    }) : "15 MAD"
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between items-center text-lg font-bold border-t pt-2",
                  children: [/* @__PURE__ */ jsx("span", {
                    children: "Total:"
                  }), /* @__PURE__ */ jsxs("span", {
                    className: "text-red-600",
                    children: [orderType === "delivery" && getCartTotal() < 100 ? getCartTotal() + 15 : getCartTotal(), " MAD"]
                  })]
                })]
              }), /* @__PURE__ */ jsx("button", {
                className: "w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-colors font-bold text-lg mt-6",
                children: orderType === "delivery" ? "🚚 Place Delivery Order" : "🏪 Place Pickup Order"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",
              children: [/* @__PURE__ */ jsx("h4", {
                className: "font-bold text-yellow-800 mb-2",
                children: "📞 Prefer to Call?"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-yellow-700 mb-2",
                children: "Call us directly to place your order:"
              }), /* @__PURE__ */ jsx("a", {
                href: "tel:+212522399178",
                className: "text-lg font-bold text-yellow-800 hover:text-yellow-900",
                children: "+212 5223-99178"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-xs text-yellow-600 mt-1",
                children: "Available during opening hours"
              })]
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-12 bg-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold text-center text-gray-800 mb-8",
          children: "Why Order from Cantina Mariachi?"
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "⚡"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "Fast Delivery"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Quick delivery in 30-45 minutes to your doorstep"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "🌮"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "Fresh & Authentic"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Made fresh with authentic Mexican recipes and ingredients"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "💰"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "Great Value"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Free delivery over 100 MAD and competitive prices"
            })]
          })]
        })]
      })
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: order,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function meta$2({}) {
  return [{
    title: "Book a Table - Cantina Mariachi | Restaurant Reservations in Casablanca"
  }, {
    name: "description",
    content: "Reserve your table at Cantina Mariachi, Casablanca's favorite Mexican restaurant. Book online for an authentic dining experience with vibrant atmosphere!"
  }];
}
const reservations = UNSAFE_withComponentProps(function Reservations() {
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
  const timeSlots = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  if (submitted) {
    return /* @__PURE__ */ jsx("div", {
      className: "min-h-screen bg-gray-50 flex items-center justify-center",
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-6xl mb-6",
          children: "🎉"
        }), /* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold text-green-600 mb-4",
          children: "Reservation Confirmed!"
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-gray-600 mb-6",
          children: ["Thank you, ", formData.name, "! Your table for ", formData.guests, " guests on ", formData.date, " at ", formData.time, " has been reserved."]
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-sm text-gray-500 mb-6",
          children: ["We'll send a confirmation to ", formData.email, " shortly. If you need to make changes, please call us at +212 5223-99178."]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col gap-3",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/menu",
            className: "bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-colors",
            children: "View Our Menu"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors",
            children: "Back to Home"
          })]
        })]
      })
    });
  }
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/* @__PURE__ */ jsx("section", {
      className: "bg-gradient-to-r from-red-600 to-orange-500 text-white py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold mb-4 text-yellow-300",
          children: "Reserve Your Table"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl mb-8",
          children: "Experience authentic Mexican cuisine in our vibrant atmosphere"
        }), /* @__PURE__ */ jsx("div", {
          className: "bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto",
          children: /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-center",
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-3xl mb-2",
                children: "📍"
              }), /* @__PURE__ */ jsx("h3", {
                className: "font-bold",
                children: "Location"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm",
                children: "4 Rue Ahmed Charci, Vélodrome"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-3xl mb-2",
                children: "📞"
              }), /* @__PURE__ */ jsx("h3", {
                className: "font-bold",
                children: "Phone"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm",
                children: "+212 5223-99178"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-3xl mb-2",
                children: "🕒"
              }), /* @__PURE__ */ jsx("h3", {
                className: "font-bold",
                children: "Hours"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm",
                children: "Daily: 12:00 PM - 11:00 PM"
              })]
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "container mx-auto px-4 py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
        children: [/* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-8",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-3xl font-bold text-gray-800 mb-6",
              children: "Make a Reservation"
            }), /* @__PURE__ */ jsxs("form", {
              onSubmit: handleSubmit,
              className: "space-y-6",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [/* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("label", {
                    htmlFor: "name",
                    className: "block text-sm font-semibold text-gray-700 mb-2",
                    children: "Full Name *"
                  }), /* @__PURE__ */ jsx("input", {
                    type: "text",
                    id: "name",
                    name: "name",
                    required: true,
                    value: formData.name,
                    onChange: handleInputChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                    placeholder: "Your full name"
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("label", {
                    htmlFor: "phone",
                    className: "block text-sm font-semibold text-gray-700 mb-2",
                    children: "Phone Number *"
                  }), /* @__PURE__ */ jsx("input", {
                    type: "tel",
                    id: "phone",
                    name: "phone",
                    required: true,
                    value: formData.phone,
                    onChange: handleInputChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                    placeholder: "+212 6XX XXX XXX"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "email",
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  children: "Email Address *"
                }), /* @__PURE__ */ jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  value: formData.email,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                  placeholder: "your.email@example.com"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [/* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("label", {
                    htmlFor: "date",
                    className: "block text-sm font-semibold text-gray-700 mb-2",
                    children: "Date *"
                  }), /* @__PURE__ */ jsx("input", {
                    type: "date",
                    id: "date",
                    name: "date",
                    required: true,
                    value: formData.date,
                    onChange: handleInputChange,
                    min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("label", {
                    htmlFor: "time",
                    className: "block text-sm font-semibold text-gray-700 mb-2",
                    children: "Time *"
                  }), /* @__PURE__ */ jsxs("select", {
                    id: "time",
                    name: "time",
                    required: true,
                    value: formData.time,
                    onChange: handleInputChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                    children: [/* @__PURE__ */ jsx("option", {
                      value: "",
                      children: "Select time"
                    }), timeSlots.map((time) => /* @__PURE__ */ jsx("option", {
                      value: time,
                      children: time
                    }, time))]
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("label", {
                    htmlFor: "guests",
                    className: "block text-sm font-semibold text-gray-700 mb-2",
                    children: "Guests *"
                  }), /* @__PURE__ */ jsx("select", {
                    id: "guests",
                    name: "guests",
                    required: true,
                    value: formData.guests,
                    onChange: handleInputChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => /* @__PURE__ */ jsxs("option", {
                      value: num.toString(),
                      children: [num, " ", num === 1 ? "guest" : "guests"]
                    }, num))
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "specialRequests",
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  children: "Special Requests"
                }), /* @__PURE__ */ jsx("textarea", {
                  id: "specialRequests",
                  name: "specialRequests",
                  value: formData.specialRequests,
                  onChange: handleInputChange,
                  rows: 4,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                  placeholder: "Birthday celebration, dietary restrictions, preferred seating, etc."
                })]
              }), /* @__PURE__ */ jsx("button", {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-500 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed",
                children: isSubmitting ? /* @__PURE__ */ jsxs("span", {
                  className: "flex items-center justify-center",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "animate-spin mr-3",
                    children: "⏳"
                  }), "Confirming Reservation..."]
                }) : "🪑 Reserve Table"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",
              children: [/* @__PURE__ */ jsx("h4", {
                className: "font-bold text-yellow-800 mb-2",
                children: "📞 Prefer to Call?"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-yellow-700 mb-2",
                children: "You can also make a reservation by calling us directly:"
              }), /* @__PURE__ */ jsx("a", {
                href: "tel:+212522399178",
                className: "text-lg font-bold text-yellow-800 hover:text-yellow-900",
                children: "+212 5223-99178"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-xs text-yellow-600 mt-1",
                children: "Our staff will be happy to assist you!"
              })]
            })]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "space-y-8",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-8",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-bold text-gray-800 mb-6",
              children: "Why Dine at Cantina Mariachi?"
            }), /* @__PURE__ */ jsxs("div", {
              className: "space-y-4",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-start gap-4",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-3xl",
                  children: "🎉"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h4", {
                    className: "font-bold text-gray-800",
                    children: "Vibrant Atmosphere"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-gray-600",
                    children: "Experience the lively spirit of Mexico with authentic decor and festive ambiance."
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-start gap-4",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-3xl",
                  children: "🌮"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h4", {
                    className: "font-bold text-gray-800",
                    children: "Authentic Cuisine"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-gray-600",
                    children: "Traditional Mexican recipes made with fresh, quality ingredients."
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-start gap-4",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-3xl",
                  children: "👨‍🍳"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h4", {
                    className: "font-bold text-gray-800",
                    children: "Expert Chefs"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-gray-600",
                    children: "Our skilled chefs bring years of experience in Mexican culinary traditions."
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-start gap-4",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-3xl",
                  children: "🍗"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h4", {
                    className: "font-bold text-gray-800",
                    children: "Weekend Specials"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-gray-600",
                    children: "Don't miss our famous Pollo a la Brasa, available on weekends only!"
                  })]
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-8",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-bold text-gray-800 mb-6",
              children: "Must-Try Dishes"
            }), /* @__PURE__ */ jsxs("div", {
              className: "space-y-4",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                children: [/* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h4", {
                    className: "font-bold text-gray-800",
                    children: "🔥 Sizzling Fajitas"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Our signature dish - served on a hot plate"
                  })]
                }), /* @__PURE__ */ jsx("span", {
                  className: "text-red-600 font-bold",
                  children: "120 MAD"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                children: [/* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h4", {
                    className: "font-bold text-gray-800",
                    children: "🧀 Loaded Nachos"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Perfect for sharing with the table"
                  })]
                }), /* @__PURE__ */ jsx("span", {
                  className: "text-red-600 font-bold",
                  children: "95 MAD"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200",
                children: [/* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h4", {
                    className: "font-bold text-gray-800",
                    children: "⭐ Pollo a la Brasa"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Weekend special rotisserie chicken"
                  })]
                }), /* @__PURE__ */ jsx("span", {
                  className: "text-red-600 font-bold",
                  children: "150 MAD"
                })]
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "mt-6",
              children: /* @__PURE__ */ jsx(Link, {
                to: "/menu",
                className: "w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-center block",
                children: "View Full Menu"
              })
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-8",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-bold text-gray-800 mb-6",
              children: "Visit Us"
            }), /* @__PURE__ */ jsxs("div", {
              className: "space-y-4",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-2xl",
                  children: "📍"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "font-semibold text-gray-800",
                    children: "4 Rue Ahmed Charci, Vélodrome"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-gray-600",
                    children: "Casablanca, Morocco"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-2xl",
                  children: "🚗"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "font-semibold text-gray-800",
                    children: "Parking Available"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-gray-600",
                    children: "Street parking and nearby lots"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-2xl",
                  children: "🚇"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "font-semibold text-gray-800",
                    children: "Public Transport"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-gray-600",
                    children: "Close to tram and bus stops"
                  })]
                })]
              })]
            })]
          })]
        })]
      })
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: reservations,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function meta$1({}) {
  return [{
    title: "About Us - Cantina Mariachi | Authentic Mexican Restaurant in Casablanca"
  }, {
    name: "description",
    content: "Learn about Cantina Mariachi's story, our passion for authentic Mexican cuisine, and our commitment to bringing traditional Mexican flavors to Casablanca."
  }];
}
const about = UNSAFE_withComponentProps(function About() {
  const teamMembers = [{
    name: "Carlos Hernández",
    role: "Head Chef & Owner",
    description: "Born in Guadalajara, Carlos brings 15+ years of authentic Mexican cooking experience to Casablanca.",
    emoji: "👨‍🍳"
  }, {
    name: "Maria Rodriguez",
    role: "Kitchen Manager",
    description: "Specializes in traditional salsas and marinades, ensuring every dish bursts with authentic flavors.",
    emoji: "👩‍🍳"
  }, {
    name: "Ahmed Benali",
    role: "General Manager",
    description: "Local Casablanca native who ensures our guests receive the warmest Moroccan hospitality.",
    emoji: "👨‍💼"
  }];
  const values = [{
    title: "Authentic Traditions",
    description: "We honor traditional Mexican recipes passed down through generations, using time-tested cooking methods and spice blends.",
    emoji: "🏺"
  }, {
    title: "Fresh Ingredients",
    description: "Every dish is prepared with the freshest ingredients, sourced locally when possible and imported when authenticity requires it.",
    emoji: "🌱"
  }, {
    title: "Vibrant Experience",
    description: "We create a festive atmosphere that captures the spirit of Mexico - colorful, lively, and welcoming to all.",
    emoji: "🎨"
  }, {
    title: "Community Focus",
    description: "We're proud to be part of the Casablanca community, creating a space where families and friends gather to share great food.",
    emoji: "🤝"
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/* @__PURE__ */ jsx("section", {
      className: "bg-gradient-to-r from-red-600 to-orange-500 text-white py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold mb-4 text-yellow-300",
          children: "Our Story"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl max-w-3xl mx-auto",
          children: "Bringing the authentic taste of Mexico to the heart of Casablanca since 2019"
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-white",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "max-w-4xl mx-auto",
          children: /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("h2", {
                className: "text-4xl font-bold text-gray-800 mb-6",
                children: "Welcome to Cantina Mariachi"
              }), /* @__PURE__ */ jsxs("div", {
                className: "space-y-4 text-gray-600 text-lg",
                children: [/* @__PURE__ */ jsx("p", {
                  children: "In 2019, Carlos Hernández had a dream: to bring the authentic flavors of his homeland, Mexico, to the vibrant city of Casablanca. Having spent over 15 years perfecting traditional Mexican recipes in Guadalajara, Carlos was determined to share the rich culinary heritage of Mexico with his new Moroccan neighbors."
                }), /* @__PURE__ */ jsx("p", {
                  children: "What started as a small family restaurant in the heart of Vélodrome has grown into Casablanca's most beloved Mexican dining destination. Every dish at Cantina Mariachi tells a story - from our hand-ground spices to our traditional cooking methods that have been passed down through generations."
                }), /* @__PURE__ */ jsx("p", {
                  children: "We believe that food is more than sustenance; it's a bridge between cultures. Here at Cantina Mariachi, Mexican warmth meets Moroccan hospitality, creating an experience that celebrates both traditions."
                })]
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "text-center",
              children: /* @__PURE__ */ jsxs("div", {
                className: "bg-gradient-to-br from-red-100 to-yellow-100 rounded-lg p-8",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "text-8xl mb-4",
                  children: "🌮"
                }), /* @__PURE__ */ jsx("h3", {
                  className: "text-2xl font-bold text-gray-800 mb-4",
                  children: "Est. 2019"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-gray-600",
                  children: "5 years of bringing authentic Mexican flavors to Casablanca"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "mt-6 grid grid-cols-2 gap-4 text-center",
                  children: [/* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "text-3xl font-bold text-red-600",
                      children: "1000+"
                    }), /* @__PURE__ */ jsx("div", {
                      className: "text-sm text-gray-600",
                      children: "Happy Customers"
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "text-3xl font-bold text-red-600",
                      children: "50+"
                    }), /* @__PURE__ */ jsx("div", {
                      className: "text-sm text-gray-600",
                      children: "Authentic Dishes"
                    })]
                  })]
                })]
              })
            })]
          })
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-gray-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-gray-800 mb-4",
            children: "What We Stand For"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl text-gray-600 max-w-2xl mx-auto",
            children: "Our commitment to authenticity and excellence drives everything we do"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: values.map((value, index) => /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: value.emoji
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-3",
              children: value.title
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: value.description
            })]
          }, index))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-gray-800 mb-4",
            children: "Meet Our Team"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl text-gray-600 max-w-2xl mx-auto",
            children: "The passionate people behind your favorite Mexican dishes"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: teamMembers.map((member, index) => /* @__PURE__ */ jsxs("div", {
            className: "bg-gray-50 rounded-lg p-8 text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-6xl mb-4",
              children: member.emoji
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-bold text-gray-800 mb-2",
              children: member.name
            }), /* @__PURE__ */ jsx("div", {
              className: "text-red-600 font-semibold mb-4",
              children: member.role
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: member.description
            })]
          }, index))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-center mb-12",
          children: /* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold mb-4 text-yellow-300",
            children: "What Makes Us Special"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "🌶️"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold mb-3",
              children: "Traditional Spice Blends"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-100",
              children: "We import authentic Mexican chiles and spices, grinding them fresh daily to create the complex flavors that define true Mexican cuisine."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "🫔"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold mb-3",
              children: "Handmade Tortillas"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-100",
              children: "Our corn and flour tortillas are made fresh throughout the day using traditional techniques and authentic masa harina."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "🍗"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold mb-3",
              children: "Weekend Pollo a la Brasa"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-100",
              children: "Our signature weekend special features whole chickens marinated for 24 hours in authentic Mexican spices and slow-roasted to perfection."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "🥑"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold mb-3",
              children: "Fresh Guacamole"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-100",
              children: "Made tableside with ripe avocados, fresh lime juice, and traditional seasonings. Each batch is prepared to order for maximum freshness."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "🌮"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold mb-3",
              children: "Authentic Tacos"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-100",
              children: "From Al Pastor to Carnitas, our tacos feature traditional fillings prepared using time-honored techniques from different regions of Mexico."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-5xl mb-4",
              children: "🎶"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold mb-3",
              children: "Live Mariachi Nights"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-100",
              children: "Join us on special occasions for live mariachi performances that bring the festive spirit of Mexico to life in Casablanca."
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-gray-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-gray-800 mb-4",
            children: "Recognition & Reviews"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl text-gray-600",
            children: "What our customers and the community say about us"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6 text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-4xl mb-4",
              children: "⭐"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "TripAdvisor Rated"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Consistently rated as one of the top Mexican restaurants in Casablanca on TripAdvisor"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6 text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-4xl mb-4",
              children: "🏆"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "Community Favorite"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: 'Winner of "Best International Cuisine" at the 2023 Casablanca Restaurant Awards'
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6 text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-4xl mb-4",
              children: "📰"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-2",
              children: "Media Coverage"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Featured in local magazines and food blogs as a must-visit dining destination"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-gray-800 mb-4",
          children: "Experience Our Story"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
          children: "Come taste the passion and tradition that goes into every dish. Join our family and become part of our story."
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/reservations",
            className: "bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-500 transition-all transform hover:scale-105",
            children: "🪑 Reserve Your Table"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/order",
            className: "bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105",
            children: "🛵 Order Online"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/contact",
            className: "bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105",
            children: "📞 Get in Touch"
          })]
        })]
      })
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "Contact Us - Cantina Mariachi | Mexican Restaurant in Casablanca"
  }, {
    name: "description",
    content: "Get in touch with Cantina Mariachi! Find our location, hours, phone number, and contact form. Located at 4 Rue Ahmed Charci, Vélodrome, Casablanca."
  }];
}
const contact = UNSAFE_withComponentProps(function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    title: "Address",
    icon: "📍",
    details: ["4 Rue Ahmed Charci", "Vélodrome, Casablanca", "Morocco"]
  }, {
    title: "Phone",
    icon: "📞",
    details: ["+212 5223-99178"],
    action: "tel:+212522399178"
  }, {
    title: "Hours",
    icon: "🕒",
    details: ["Monday - Sunday", "12:00 PM - 11:00 PM", "Last orders: 10:30 PM"]
  }, {
    title: "Email",
    icon: "📧",
    details: ["info@cantinamariachi.ma"],
    action: "mailto:info@cantinamariachi.ma"
  }];
  if (submitted) {
    return /* @__PURE__ */ jsx("div", {
      className: "min-h-screen bg-gray-50 flex items-center justify-center",
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-6xl mb-6",
          children: "✉️"
        }), /* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold text-green-600 mb-4",
          children: "Message Sent!"
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-gray-600 mb-6",
          children: ["Thank you for reaching out, ", formData.name, "! We've received your message and will get back to you soon."]
        }), /* @__PURE__ */ jsx("p", {
          className: "text-sm text-gray-500 mb-6",
          children: "We typically respond within 24 hours. For urgent matters, please call us at +212 5223-99178."
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col gap-3",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/menu",
            className: "bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-colors",
            children: "View Our Menu"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors",
            children: "Back to Home"
          })]
        })]
      })
    });
  }
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/* @__PURE__ */ jsx("section", {
      className: "bg-gradient-to-r from-red-600 to-orange-500 text-white py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold mb-4 text-yellow-300",
          children: "Get in Touch"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl mb-8",
          children: "We'd love to hear from you! Contact us for reservations, questions, or feedback"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/* @__PURE__ */ jsx("a", {
            href: "tel:+212522399178",
            className: "bg-yellow-500 text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors",
            children: "📞 Call Now"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/reservations",
            className: "bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors",
            children: "📅 Make Reservation"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/order",
            className: "bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",
            children: "🛵 Order Online"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "container mx-auto px-4 py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold text-gray-800 mb-8",
            children: "Contact Information"
          }), /* @__PURE__ */ jsx("div", {
            className: "space-y-6",
            children: contactInfo.map((info, index) => /* @__PURE__ */ jsx("div", {
              className: "bg-white rounded-lg shadow-md p-6",
              children: /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-4",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "text-4xl",
                  children: info.icon
                }), /* @__PURE__ */ jsxs("div", {
                  className: "flex-1",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: "text-xl font-bold text-gray-800 mb-2",
                    children: info.title
                  }), info.action ? /* @__PURE__ */ jsx("a", {
                    href: info.action,
                    className: "text-red-600 hover:text-red-500 font-semibold",
                    children: info.details.join(", ")
                  }) : /* @__PURE__ */ jsx("div", {
                    className: "text-gray-600",
                    children: info.details.map((detail, i) => /* @__PURE__ */ jsx("p", {
                      children: detail
                    }, i))
                  })]
                })]
              })
            }, index))
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-md p-6 mt-6",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-4",
              children: "Follow Us"
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex gap-4",
              children: [/* @__PURE__ */ jsx("a", {
                href: "#",
                className: "bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors",
                children: "📘 Facebook"
              }), /* @__PURE__ */ jsx("a", {
                href: "#",
                className: "bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-500 transition-colors",
                children: "📷 Instagram"
              }), /* @__PURE__ */ jsx("a", {
                href: "#",
                className: "bg-red-600 text-white p-3 rounded-lg hover:bg-red-500 transition-colors",
                children: "📺 YouTube"
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-md p-6 mt-6",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-4",
              children: "📍 Find Us"
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-gray-200 rounded-lg h-64 flex items-center justify-center",
              children: /* @__PURE__ */ jsxs("div", {
                className: "text-center text-gray-600",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "text-4xl mb-2",
                  children: "🗺️"
                }), /* @__PURE__ */ jsx("p", {
                  className: "font-semibold",
                  children: "Interactive Map"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-sm",
                  children: "4 Rue Ahmed Charci, Vélodrome"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-sm",
                  children: "Casablanca, Morocco"
                }), /* @__PURE__ */ jsx("a", {
                  href: "https://maps.google.com/?q=4+Rue+Ahmed+Charci+Casablanca",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-block mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors text-sm",
                  children: "Open in Google Maps"
                })]
              })
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-md p-6 mt-6",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-4",
              children: "🚌 Getting Here"
            }), /* @__PURE__ */ jsxs("div", {
              className: "space-y-3",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-2xl",
                  children: "🚗"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "font-semibold",
                    children: "By Car"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Street parking available nearby"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-2xl",
                  children: "🚇"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "font-semibold",
                    children: "By Tram"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Closest stop: Vélodrome"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-2xl",
                  children: "🚌"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "font-semibold",
                    children: "By Bus"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Multiple bus routes serve the area"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-2xl",
                  children: "🚕"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "font-semibold",
                    children: "By Taxi"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Grand taxis and petit taxis available"
                  })]
                })]
              })]
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-8",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-3xl font-bold text-gray-800 mb-6",
              children: "Send Us a Message"
            }), /* @__PURE__ */ jsxs("form", {
              onSubmit: handleSubmit,
              className: "space-y-6",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [/* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("label", {
                    htmlFor: "name",
                    className: "block text-sm font-semibold text-gray-700 mb-2",
                    children: "Full Name *"
                  }), /* @__PURE__ */ jsx("input", {
                    type: "text",
                    id: "name",
                    name: "name",
                    required: true,
                    value: formData.name,
                    onChange: handleInputChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                    placeholder: "Your full name"
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("label", {
                    htmlFor: "phone",
                    className: "block text-sm font-semibold text-gray-700 mb-2",
                    children: "Phone Number"
                  }), /* @__PURE__ */ jsx("input", {
                    type: "tel",
                    id: "phone",
                    name: "phone",
                    value: formData.phone,
                    onChange: handleInputChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                    placeholder: "+212 6XX XXX XXX"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "email",
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  children: "Email Address *"
                }), /* @__PURE__ */ jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  value: formData.email,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                  placeholder: "your.email@example.com"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "subject",
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  children: "Subject *"
                }), /* @__PURE__ */ jsxs("select", {
                  id: "subject",
                  name: "subject",
                  required: true,
                  value: formData.subject,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                  children: [/* @__PURE__ */ jsx("option", {
                    value: "",
                    children: "Select a subject"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "reservation",
                    children: "Reservation Inquiry"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "catering",
                    children: "Catering Services"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "feedback",
                    children: "Feedback/Compliment"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "complaint",
                    children: "Complaint"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "employment",
                    children: "Employment"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "partnership",
                    children: "Partnership/Business"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "other",
                    children: "Other"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "message",
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  children: "Message *"
                }), /* @__PURE__ */ jsx("textarea", {
                  id: "message",
                  name: "message",
                  required: true,
                  value: formData.message,
                  onChange: handleInputChange,
                  rows: 6,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500",
                  placeholder: "Tell us how we can help you..."
                })]
              }), /* @__PURE__ */ jsx("button", {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-500 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed",
                children: isSubmitting ? /* @__PURE__ */ jsxs("span", {
                  className: "flex items-center justify-center",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "animate-spin mr-3",
                    children: "⏳"
                  }), "Sending Message..."]
                }) : "✉️ Send Message"
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-8 mt-8",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-bold text-gray-800 mb-6",
              children: "Frequently Asked Questions"
            }), /* @__PURE__ */ jsxs("div", {
              className: "space-y-4",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "border-b border-gray-200 pb-4",
                children: [/* @__PURE__ */ jsx("h4", {
                  className: "font-bold text-gray-800 mb-2",
                  children: "Do you offer delivery?"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-gray-600",
                  children: "Yes! We deliver to Vélodrome, Maarif, Gauthier, Centre Ville, and Racine. Free delivery on orders over 100 MAD."
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "border-b border-gray-200 pb-4",
                children: [/* @__PURE__ */ jsx("h4", {
                  className: "font-bold text-gray-800 mb-2",
                  children: "Do you have vegetarian/vegan options?"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-gray-600",
                  children: "Absolutely! We have many vegetarian and vegan dishes clearly marked on our menu, including veggie tacos, fajitas, and nachos."
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "border-b border-gray-200 pb-4",
                children: [/* @__PURE__ */ jsx("h4", {
                  className: "font-bold text-gray-800 mb-2",
                  children: "What's special about the weekend Pollo a la Brasa?"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-gray-600",
                  children: "Our signature rotisserie chicken is marinated for 24 hours in authentic Mexican spices and slow-roasted. Available Friday through Sunday only!"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "border-b border-gray-200 pb-4",
                children: [/* @__PURE__ */ jsx("h4", {
                  className: "font-bold text-gray-800 mb-2",
                  children: "Do you accept reservations?"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-gray-600",
                  children: "Yes! You can book online through our reservations page or call us at +212 5223-99178."
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h4", {
                  className: "font-bold text-gray-800 mb-2",
                  children: "Do you cater events?"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-gray-600",
                  children: "We offer catering for special events and parties. Contact us for more information about our catering packages."
                })]
              })]
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold mb-4",
          children: "Ready to Experience Cantina Mariachi?"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl mb-8",
          children: "Visit us today or order online for a taste of authentic Mexico in Casablanca!"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/reservations",
            className: "bg-yellow-500 text-red-800 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105",
            children: "🪑 Reserve Table"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/order",
            className: "bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105",
            children: "🛵 Order Online"
          })]
        })]
      })
    })]
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CCTQx0ip.js", "imports": ["/assets/chunk-C37GKA54-C1nOU-Kt.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-B45LmexV.js", "imports": ["/assets/chunk-C37GKA54-C1nOU-Kt.js"], "css": ["/assets/root-ByEtCKCf.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-BPBKvNV2.js", "imports": ["/assets/chunk-C37GKA54-C1nOU-Kt.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/menu": { "id": "routes/menu", "parentId": "root", "path": "menu", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/menu-BlN-YopA.js", "imports": ["/assets/chunk-C37GKA54-C1nOU-Kt.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/order": { "id": "routes/order", "parentId": "root", "path": "order", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/order-D48zsiBV.js", "imports": ["/assets/chunk-C37GKA54-C1nOU-Kt.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/reservations": { "id": "routes/reservations", "parentId": "root", "path": "reservations", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/reservations-Dpo9f3mI.js", "imports": ["/assets/chunk-C37GKA54-C1nOU-Kt.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-936txdhy.js", "imports": ["/assets/chunk-C37GKA54-C1nOU-Kt.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/contact-CnsEZwdC.js", "imports": ["/assets/chunk-C37GKA54-C1nOU-Kt.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-b81a9526.js", "version": "b81a9526", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/menu": {
    id: "routes/menu",
    parentId: "root",
    path: "menu",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/order": {
    id: "routes/order",
    parentId: "root",
    path: "order",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/reservations": {
    id: "routes/reservations",
    parentId: "root",
    path: "reservations",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
