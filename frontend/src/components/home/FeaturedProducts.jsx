import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "Smartphone",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      features: ["A17 Pro Chip", "Titanium Design", "Action Button"],
      badge: "New Arrival"
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      category: "Laptop",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      features: ["M3 Chip", "18-hour Battery", "Liquid Retina"],
      badge: "Best Seller"
    },
    {
      id: 3,
      name: "AirPods Max",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
      features: ["Spatial Audio", "Active Noise Cancel", "20-hour Battery"],
      badge: "Featured"
    },
    {
      id: 4,
      name: "Canon EOS R6",
      category: "Camera",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
      features: ["45MP Full Frame", "8K Video", "Dual Pixel AF"],
      badge: "Professional"
    },
    {
      id: 5,
      name: "Apple Watch Ultra",
      category: "Wearable",
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
      features: ["Titanium Case", "GPS + Cellular", "60-hour Battery"],
      badge: "Adventure Ready"
    },
    {
      id: 6,
      name: "Sony PlayStation 5",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=400&fit=crop",
      features: ["Custom SSD", "Ray Tracing", "Haptic Feedback"],
      badge: "Gaming Beast"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className=" w-full xl:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest innovations in technology - handpicked for their exceptional performance and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-primary-600 text-sm font-medium">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  Learn More <ChevronRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;