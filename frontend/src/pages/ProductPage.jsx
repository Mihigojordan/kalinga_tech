import React, { useState } from 'react';
import { ChevronRight, Heart, Star, ShoppingCart, Eye, Filter, Search, Home, ArrowRight } from 'lucide-react';
import HeaderBanner from '../components/HeaderBanner';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "Smartphone",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      features: ["A17 Pro Chip", "Titanium Design", "Action Button"],
      badge: "New Arrival",
      badgeColor: "bg-gradient-to-r from-primary-500 to-primary-600",
      rating: 4.9,
      reviews: 2547
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      category: "Laptop",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      features: ["M3 Chip", "18-hour Battery", "Liquid Retina"],
      badge: "Best Seller",
      badgeColor: "bg-gradient-to-r from-primary-600 to-primary-700",
      rating: 4.8,
      reviews: 1823
    },
    {
      id: 3,
      name: "AirPods Max",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
      features: ["Spatial Audio", "Active Noise Cancel", "20-hour Battery"],
      badge: "Featured",
      badgeColor: "bg-gradient-to-r from-primary-400 to-primary-500",
      rating: 4.7,
      reviews: 3241
    },
    {
      id: 4,
      name: "Canon EOS R6",
      category: "Camera",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
      features: ["45MP Full Frame", "8K Video", "Dual Pixel AF"],
      badge: "Professional",
      badgeColor: "bg-gradient-to-r from-primary-700 to-primary-800",
      rating: 4.9,
      reviews: 892
    },
    {
      id: 5,
      name: "Apple Watch Ultra",
      category: "Wearable",
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
      features: ["Titanium Case", "GPS + Cellular", "60-hour Battery"],
      badge: "Adventure Ready",
      badgeColor: "bg-gradient-to-r from-primary-500 to-primary-600",
      rating: 4.6,
      reviews: 1567
    },
    {
      id: 6,
      name: "Sony PlayStation 5",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=400&fit=crop",
      features: ["Custom SSD", "Ray Tracing", "Haptic Feedback"],
      badge: "Gaming Beast",
      badgeColor: "bg-gradient-to-r from-primary-600 to-primary-700",
      rating: 4.8,
      reviews: 4521
    }
  ];

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className=" bg-gradient-to-br from-gray-50 to-primary-100 min-h-screen">
       <HeaderBanner
        title="Our Products"
        subtitle="Latest Technology"
        description="Discover cutting-edge technology crafted for excellence and innovation. From laptops to smartphones, we have everything you need to stay connected and productive."
        icon={<ShoppingCart className="w-10 h-10" />}
        />
      <div className="md:w-10/12 mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
             <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-primary-500 to-gray-800 bg-clip-text text-transparent mb-4">
             Featured Products
            </h1>
        
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge technology crafted for excellence and innovation
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Filter className="text-gray-500 my-auto" size={20} />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges and Actions */}
                <div className="absolute top-4 left-4">
                  <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {product.badge}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      favorites.has(product.id)
                        ? 'bg-primary-500 text-white'
                        : 'bg-white/80 text-gray-600 hover:bg-primary-500 hover:text-white'
                    }`}
                  >
                    <Heart size={18} fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-primary-500 hover:text-white transition-all backdrop-blur-sm">
                    <Eye size={18} />
                  </button>
                </div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingCart size={18} />
                    Click here
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-primary-600 text-sm font-bold bg-primary-50 px-2 py-1 rounded-lg">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all">
                    <ShoppingCart size={18} />
                  Learn More
                  </button>
                  <button className="px-4 py-3 border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-600 hover:text-white transition-all">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductPage;