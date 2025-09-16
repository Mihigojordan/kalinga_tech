import { useState } from "react";
import { 
  Users, 
  Target, 
  Award, 
  Clock, 
  Shield, 
  Zap,
  Heart,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  TrendingUp,
  Building,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  GraduationCap
} from "lucide-react";
import HeaderBanner from "../components/HeaderBanner";



export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const stats = [
    { number: "5000+", label: "Happy Customers", icon: <Users className="w-8 h-8" /> },
    { number: "10+", label: "Years Experience", icon: <Calendar className="w-8 h-8" /> },
    { number: "15000+", label: "Devices Repaired", icon: <Award className="w-8 h-8" /> },
    { number: "99.2%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust & Reliability",
      description: "We build lasting relationships through transparent service and reliable solutions that our customers can depend on."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation First",
      description: "Staying ahead of technology trends to bring you the latest and most efficient solutions for your digital needs."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Customer Care",
      description: "Every customer is family to us. We go above and beyond to ensure complete satisfaction with every interaction."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Continuous Growth",
      description: "We constantly evolve our services and expertise to meet the ever-changing landscape of technology."
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kalinga",
      position: "Founder & CEO",
      experience: "15 Years",
      specialization: "Technology Strategy & Business Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leader with extensive experience in technology solutions and customer service excellence."
    },
    {
      name: "Priya Sharma",
      position: "Head of Technical Services",
      experience: "12 Years",
      specialization: "Hardware Repair & Data Recovery",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Expert technician specializing in complex hardware repairs and advanced data recovery solutions."
    },
    {
      name: "Amit Patel",
      position: "Sales Director",
      experience: "10 Years",
      specialization: "Product Consultation & Customer Relations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to helping customers find the perfect technology solutions for their unique needs."
    },
    {
      name: "Sneha Kumar",
      position: "Customer Support Manager",
      experience: "8 Years",
      specialization: "Technical Support & Quality Assurance",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Ensures every customer receives exceptional support and service throughout their journey with us."
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started as a small repair shop with a vision to provide reliable technology solutions"
    },
    {
      year: "2017",
      title: "Expanded Services",
      description: "Added comprehensive sales department and extended warranty programs"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online services and remote support capabilities during the pandemic"
    },
    {
      year: "2023",
      title: "5000+ Customers",
      description: "Reached milestone of serving over 5000 satisfied customers across the region"
    },
    {
      year: "2025",
      title: "Innovation Hub",
      description: "Established advanced repair facility and training center for cutting-edge technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      {/* Header Section */}
      <HeaderBanner
        title="About Us"
        subtitle="Kalinga Technology"
        description="Your trusted partner in technology solutions since 2014. We're passionate about bringing you the best in technology sales, expert repairs, and exceptional customer service."
        icon={<Users className="w-10 h-10" />}
        backgroundStyle="image"
      />
      
      <section className="py-20 bg-white">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-primary-500 to-gray-800 bg-clip-text text-transparent mb-4">
              About Kalinga Technology
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in technology solutions since 2014. We're passionate about bringing you the best in 
              technology sales, expert repairs, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-100">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Made Responsive */}
      <section className="py-20 bg-white">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped who we are today
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline line (hidden on mobile) */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            {/* Mobile Timeline line (visible on mobile and tablet) */}
            <div className="lg:hidden absolute left-8 top-0 h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  // Desktop layout: alternate sides
                  window.innerWidth >= 1024 
                    ? (index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end')
                    : 'justify-start'
                }`}>
                  {/* Desktop Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Mobile Timeline dot */}
                  <div className="lg:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`
                    w-full lg:w-5/12 
                    pl-16 lg:pl-0
                    ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}
                  `}>
                    <div className="bg-primary-50 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-xl sm:text-2xl font-bold text-primary-700 mb-2">{milestone.year}</div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}