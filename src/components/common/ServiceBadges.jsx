import IFMGA from '../../../public/Logo/IFMGA.png'


const serviceFeatures = [
  {
    icon: IFMGA,
    title: "IFMGA Certified",
    description: "Internationally certified mountain guides ensuring the highest standards of safety and expertise",
    isImage: true
  },
  {
    icon: "fa-compass",
    title: "Custom Adventures",
    description: "Tailored experiences matching your exact skill level and aspirations",
    isImage: false
  },
  {
    icon: "fa-chart-line",
    title: "Skill Progression",
    description: "Structured development from introductory tours to technical descents",
    isImage: false
  },
  {
    icon: "fa-shield-alt",
    title: "Safety First",
    description: "Expert risk management and current avalanche safety protocols",
    isImage: false
  }
];


export default function ServiceBadges() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {serviceFeatures.map((feature, index) => (
      <div 
        key={index} 
        className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="w-16 h-16 mb-4 rounded-full bg-alpine-teal/10 flex items-center justify-center">
          {feature.isImage ? (
            <img 
              src={feature.icon} 
              alt={feature.title} 
              className="w-28 h-28 object-contain"
              onError={(e) => console.log('Image failed to load:', e)} 
            />
          ) : (
            <i className={`fas ${feature.icon} text-2xl text-alpine-teal`}></i>
          )}
        </div>
        <h3 className="text-xl font-heading text-slate-blue mb-2">
          {feature.title}
        </h3>
        <p className="text-slate-600 text-sm">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</div>
</div>
  ) 
}
