import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Monitor,
  Cpu,
  HardDrive,
  Zap,
  Eye,
  Calendar,
  ArrowRight,
} from "lucide-react";
import productService from "../../../../Services/Dispatch/productService";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const navigate = useNavigate();
  
  // Initialize as empty arrays to prevent map errors
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchTerm, selectedBrand]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await productService.getAllProducts();
      
      // Ensure we always get an array, handle different response structures
      let productArray = [];
      
      if (Array.isArray(response)) {
        productArray = response;
      } else if (response && Array.isArray(response.data)) {
        productArray = response.data;
      } else if (response && Array.isArray(response.products)) {
        productArray = response.products;
      } else {
        console.warn('Unexpected API response structure:', response);
        productArray = [];
      }
      
      setProducts(productArray);
      setFilteredProducts(productArray);
      
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message || "Failed to load products");
      // Set empty arrays on error
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    // Ensure products is always an array before filtering
    const productList = Array.isArray(products) ? products : [];
    
    let filtered = productList;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.model?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by brand
    if (selectedBrand) {
      filtered = filtered.filter(
        (product) => product.brand?.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const getUniqueeBrands = () => {
    // Ensure products is an array and filter out null/undefined brands
    const productList = Array.isArray(products) ? products : [];
    const brands = productList
      .map(product => product.brand)
      .filter(Boolean) // Remove null/undefined values
      .filter((brand, index, arr) => arr.indexOf(brand) === index); // Remove duplicates
    
    return brands.sort();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Monitor className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Error Loading Products
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchProducts}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Products</h1>
              <p className="text-gray-600 mt-1">
                Browse our collection of {Array.isArray(products) ? products.length : 0} products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Brand Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Brands</option>
                {getUniqueeBrands().map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Safe mapping with fallback */}
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
                onClick={() => handleProductClick(product.id)}
              >
                {/* Product Image */}
                <div className="aspect-[4/3] bg-gray-100 relative">
                  {product.productImage ? (
                    <img
                      src={productService.getFileUrl(product.productImage)}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Monitor className="w-12 h-12 text-gray-300" />
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                        {product.brand}
                      </span>
                      <span>{product.model}</span>
                    </div>
                  </div>

                  {/* Quick Specs */}
                  <div className="space-y-2 mb-4">
                    {product.processor && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Cpu className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{product.processor}</span>
                      </div>
                    )}
                    {product.ram && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Zap className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{product.ram}</span>
                      </div>
                    )}
                    {product.storage && (
                      <div className="flex items-center text-sm text-gray-600">
                        <HardDrive className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{product.storage}</span>
                      </div>
                    )}
                  </div>

                  {/* Created Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {productService.formatProductDate(product.createdAt)}
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* No Products Found */
            <div className="col-span-full">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-600">
                  {searchTerm || selectedBrand
                    ? "No products match your search criteria. Try adjusting your filters."
                    : "No products available at the moment."}
                </p>
                {(searchTerm || selectedBrand) && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedBrand("");
                    }}
                    className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {Array.isArray(products) ? products.length : 0} products
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;