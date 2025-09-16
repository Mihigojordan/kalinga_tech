import { useState } from "react";
import { 
  Laptop, 
  Smartphone, 
  Monitor, 
  Wrench, 
  ShoppingCart, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Users,
  Headphones,
  Home
} from "lucide-react";
import HeaderBanner from "../components/HeaderBanner";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('sales');

  const navigate = useNavigate()

  const salesServices = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Laptops & Computers",
      description: "Latest models from top brands with warranty and support",
      features: ["Gaming laptops", "Business computers", "Workstations", "Custom builds"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Devices",
      description: "Smartphones, tablets, and accessories from leading manufacturers",
      features: ["Latest smartphones", "Tablets", "Accessories", "Extended warranty"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Display Solutions",
      description: "Monitors, TVs, and digital displays for every need",
      features: ["4K monitors", "Gaming displays", "Smart TVs", "Professional screens"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electronics",
      description: "Complete range of electronic devices and components",
      features: ["Audio systems", "Networking gear", "Components", "Smart devices"]
    }
  ];

  const repairServices = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hardware Repair",
      description: "Expert repair services for all types of devices",
      features: ["Screen replacement", "Motherboard repair", "Battery replacement", "Component upgrades"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Recovery",
      description: "Professional data recovery and backup solutions",
      features: ["HDD recovery", "SSD repair", "File restoration", "Backup setup"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Repair",
      description: "Comprehensive mobile device repair services",
      features: ["Screen repair", "Battery replacement", "Water damage", "Software issues"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Display Repair",
      description: "Professional display and monitor repair services",
      features: ["LCD repair", "LED replacement", "Color calibration", "Panel replacement"]
    }
  ];

  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Quick Service",
      description: "Fast turnaround times without compromising quality"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Warranty Guaranteed",
      description: "All services come with comprehensive warranty coverage"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Support",
      description: "24/7 customer support for all your technical needs"
    }
  ];

  const testimonials = [
    {
      name: "Raj Patel",
      rating: 5,
      comment: "Excellent service! Fixed my laptop within hours and the price was very reasonable."
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Great selection of products and helpful staff. Highly recommended for tech purchases."
    },
    {
      name: "Amit Kumar",
      rating: 5,
      comment: "Professional repair service. They recovered all my important data from a crashed hard drive."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      {/* Header */}
      
 <HeaderBanner
        title="Professional Services"
        subtitle="Expert Solutions"
        description="From cutting-edge device sales to expert repair services - we've got all your technology needs covered with professional expertise and guaranteed satisfaction."
        icon={<Wrench className="w-10 h-10" />}
        breadcrumb={[
          { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
          { label: "Services", href: "/services" }
        ]}
        primaryButton={{
          text: "Get Quote",
          icon: <Phone className="w-5 h-5" />,
          onClick: () => navigate('/contact')
        }}
      
        backgroundStyle="image"
      />

    

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
               <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-primary-500 to-gray-800 bg-clip-text text-transparent mb-4">
            Our Services
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional technology solutions tailored to your needs
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-primary-50 p-2 rounded-xl flex space-x-2">
              <button
                onClick={() => setActiveTab('sales')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'sales' 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'text-primary-700 hover:bg-primary-100'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Sales</span>
              </button>
              <button
                onClick={() => setActiveTab('repair')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'repair' 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'text-primary-700 hover:bg-primary-100'
                }`}
              >
                <Wrench className="w-5 h-5" />
                <span>Repair</span>
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'sales' ? salesServices : repairServices).map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
                <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-primary-50 text-primary-700 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-primary-600 group-hover:text-white">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Kalinga Technology?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional service with unmatched expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-primary-700">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

     
    </div>
  );
}

