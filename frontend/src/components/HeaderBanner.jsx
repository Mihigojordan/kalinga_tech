import { 
  ShoppingCart, 
  Wrench, 
  Phone, 
  Users, 
  Home,
  Info,
  ArrowRight
} from "lucide-react";


// Reusable Header Banner Component
export default function HeaderBanner({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton,
  backgroundStyle = "image", // "gradient", "image", "solid"
  backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center",
  icon = null,
  breadcrumb = []
}) {
  
  const getBackgroundClasses = () => {
    switch (backgroundStyle) {
      case "image":
        return "bg-cover bg-center bg-no-repeat";
      case "solid":
        return "bg-primary-700";
      case "gradient":
      default:
        return "bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800";
    }
  };

  return (
    <section className={`relative overflow-hidden h-[40vh] py-20 ${getBackgroundClasses()}`}
             style={backgroundImage ? { backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${backgroundImage})` } : {}}>
      
      {/* Overlay for image backgrounds */}
      {(backgroundStyle === "image" || backgroundStyle === "gradient") && (
        <div className="absolute inset-0 bg-black opacity-20"></div>
      )}
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/*       / */}

        <div className="text-center text-white">
          {/* Icon */}
          {icon && (
            <div className="mb-6">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto backdrop-blur-sm">
                <div className="text-white">
                  {icon}
                </div>
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
            {subtitle && (
              <span className="block text-primary-200 text-xl md:text-2xl mt-2">
                {subtitle}
              </span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-md md:text-lg mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton && (
                <button 
                  onClick={primaryButton.onClick}
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center space-x-2 text-lg shadow-lg hover:shadow-xl"
                >
                  {primaryButton.icon}
                  <span>{primaryButton.text}</span>
                </button>
              )}
              
              {secondaryButton && (
                <button 
                  onClick={secondaryButton.onClick}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors flex items-center space-x-2"
                >
                  {secondaryButton.icon}
                  <span>{secondaryButton.text}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}