import { Droplets, Sun, Leaf, TrendingUp, Bell, Sparkles } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Growth Tracking',
      description: 'Monitor your bonsai development with AI-powered insights and milestone tracking.',
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: 'Watering Reminders',
      description: 'Smart notifications tailored to your tree species, climate, and seasonal needs.',
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'AI Care Guide',
      description: 'Get personalized advice and troubleshooting help from our intelligent assistant.',
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: 'Watering Guide',
      description: 'Learn the perfect watering schedule for your specific bonsai species.',
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: 'Light Requirements',
      description: 'Understand optimal lighting conditions to keep your tree healthy and vibrant.',
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Pruning Tips',
      description: 'Master the art of shaping and maintaining your bonsai unique form.',
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-br from-[#CEEDB2]/20 to-[#CEF17B]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#084734] mb-4">
            Smart Bonsai Care
          </h2>
          <p className="font-poppins text-lg text-[#084734]/70 max-w-2xl mx-auto">
            Everything you need to help your bonsai thrive with modern technology and ancient wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#CEEDB2]"
            >
              <div className="bg-gradient-to-br from-[#CEF17B] to-[#CEEDB2] w-20 h-20 rounded-2xl flex items-center justify-center text-[#084734] mb-6">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#084734] mb-3">
                {feature.title}
              </h3>
              <p className="font-poppins text-[#084734]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
