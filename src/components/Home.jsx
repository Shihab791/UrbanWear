import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // new search state

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      window.location.href = "/login";
    }
  }, []);

  const products = [
    // ================= T-SHIRTS =================
    { id: 1, name: "Classic Black T-Shirt", price: "$25", category: "t-shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
    { id: 2, name: "White Minimal T-Shirt", price: "$22", category: "t-shirt", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1" },
    { id: 3, name: "Graphic Street T-Shirt", price: "$30", category: "t-shirt", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a" },
    { id: 4, name: "Oversized Urban Tee", price: "$28", category: "t-shirt", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10" },
    { id: 5, name: "Vintage Washed T-Shirt", price: "$32", category: "t-shirt", image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23" },
    { id: 6, name: "Premium Cotton T-Shirt", price: "$35", category: "t-shirt", image: "https://images.unsplash.com/photo-1562158070-622a4f9f94f3" },
    { id: 7, name: "Summer Color Tee", price: "$27", category: "t-shirt", image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad" },

    // ================= SHIRTS =================
    { id: 8, name: "Formal Blue Shirt", price: "$40", category: "shirt", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273" },
    { id: 9, name: "Casual Check Shirt", price: "$35", category: "shirt", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157" },
    { id: 10, name: "Slim Fit White Shirt", price: "$45", category: "shirt", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" },
    { id: 11, name: "Denim Shirt", price: "$42", category: "shirt", image: "https://images.unsplash.com/photo-1592878904946-b3cd1a49f7f4" },
    { id: 12, name: "Linen Summer Shirt", price: "$38", category: "shirt", image: "https://images.unsplash.com/photo-1562158070-622a4f9f94f3" },
    { id: 13, name: "Black Formal Shirt", price: "$50", category: "shirt", image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4" },
    { id: 14, name: "Printed Casual Shirt", price: "$36", category: "shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c" },

    // ================= PANTS =================
    { id: 15, name: "Cargo Pants", price: "$50", category: "pant", image: "https://images.unsplash.com/photo-1593032465171-8e3d6a63e6c4" },
    { id: 16, name: "Slim Fit Jeans", price: "$55", category: "pant", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
    { id: 17, name: "Formal Black Pant", price: "$48", category: "pant", image: "https://images.unsplash.com/photo-1516822003754-cca485356ecb" },
    { id: 18, name: "Chino Pants", price: "$52", category: "pant", image: "https://images.unsplash.com/photo-1617957743098-4f7c3d4c6d6e" },
    { id: 19, name: "Jogger Pants", price: "$44", category: "pant", image: "https://images.unsplash.com/photo-1583003147725-8a5d8a7f92d4" },
    { id: 20, name: "Ripped Jeans", price: "$60", category: "pant", image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09" },
    { id: 21, name: "Classic Grey Trouser", price: "$46", category: "pant", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10" },

    // ================= PANJABI =================
    { id: 22, name: "Traditional White Panjabi", price: "$60", category: "panjabi", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7" },
    { id: 23, name: "Embroidered Festive Panjabi", price: "$75", category: "panjabi", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990" },
    { id: 24, name: "Modern Cut Panjabi", price: "$65", category: "panjabi", image: "https://images.unsplash.com/photo-1622445272461-c6580b0e7b1c" },
    { id: 25, name: "Black Designer Panjabi", price: "$80", category: "panjabi", image: "https://images.unsplash.com/photo-1622445272475-2a8f03a9f0a5" },
    { id: 26, name: "Golden Embroidery Panjabi", price: "$85", category: "panjabi", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" },
    { id: 27, name: "Cotton Casual Panjabi", price: "$58", category: "panjabi", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273" },
    { id: 28, name: "Royal Blue Panjabi", price: "$72", category: "panjabi", image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23" },

    // ================= BONUS ITEMS =================
    { id: 29, name: "Urban Hoodie", price: "$65", category: "shirt", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7" },
    { id: 30, name: "Winter Sweatshirt", price: "$55", category: "shirt", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" },
  ];

  // filter products by category AND search query
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">UrbanWear</h1>

        {/* Middle menu + search */}
        <div className="hidden md:flex space-x-4 items-center relative">
          <button
            onClick={() => setSelectedCategory("all")}
            className="hover:text-red-400 transition"
          >
            Home
          </button>

          <div className="relative">
            <button
              onClick={() => setShowCategory(!showCategory)}
              className="hover:text-red-400 transition"
            >
              Category
            </button>

            {showCategory && (
              <div className="absolute top-10 left-0 bg-white text-black rounded shadow-lg w-40 z-50">
                <ul className="py-2">
                  {["pant", "shirt", "panjabi", "t-shirt", "all"].map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowCategory(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* User / Logout */}
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <span>Hello, {user.name}</span>
              <button
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-14 bg-white shadow-sm">
        <h2 className="text-4xl font-bold">New Collection 2026</h2>
        <p className="text-gray-600 mt-3">Premium quality street fashion</p>
      </div>

      {/* Products Grid */}
      <div className="p-10 grid grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow">
          <img src={product.image} alt="" className="h-40 w-full object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>

          <button
            onClick={() => navigate(`/buy/${product.id}`)}
            className="mt-3 bg-black text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 mt-auto">
        <div className="container mx-auto px-8 text-center">
          <p>©Shihab 2026 UrbanWear. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Follow us on{" "}
            <a href="#" className="text-blue-500 hover:underline">Phone:01889804917</a>,{" "}
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>,{" "}
            <a href="#" className="text-blue-400 hover:underline">Twitter</a>,{" "}
            <a href="#" className="text-pink-500 hover:underline">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
