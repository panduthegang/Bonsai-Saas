import { Leaf, Droplets, Sun, Award, ShoppingCart, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-[#CEEDB2] w-[90%] max-w-4xl">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 cursor-pointer hover:opacity-70 transition-opacity">
            <Leaf className="w-6 h-6 text-[#084734]" />
            <span className="font-playfair text-2xl font-bold text-[#084734]">ZenBonsai</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#shop" className="text-[#084734] hover:text-[#084734]/70 font-poppins transition-colors">Shop</a>
            <a href="#care" className="text-[#084734] hover:text-[#084734]/70 font-poppins transition-colors">Care Guide</a>
            <a href="#about" className="text-[#084734] hover:text-[#084734]/70 font-poppins transition-colors">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-[#CEEDB2] rounded-full transition-colors">
              <User className="w-5 h-5 text-[#084734]" />
            </button>
            <button className="p-2 hover:bg-[#CEEDB2] rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-[#084734]" />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bonsai.png)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#CEF17B]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#CEEDB2]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Cultivate Serenity, One Tree at a Time
            </h1>
            <p className="font-poppins text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Discover our curated collection of authentic bonsai trees. Each piece is a living artwork, carefully nurtured to bring peace and beauty to your space.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#084734] text-white px-8 py-4 rounded-full font-poppins font-medium hover:bg-[#084734]/90 transition-all transform hover:scale-105 shadow-lg">
                Explore Collection
              </button>
              <button className="border-2 border-[#084734] text-[#084734] px-8 py-4 rounded-full font-poppins font-medium hover:bg-[#084734] hover:text-white transition-all">
                Learn About Care
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#084734] mb-4">
              Our Collection
            </h2>
            <p className="font-poppins text-lg text-[#084734]/70 max-w-2xl mx-auto">
              Premium bonsai trees for every skill level and aesthetic preference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Japanese Maple', price: '$189', level: 'Beginner', image: 'https://images.pexels.com/photos/4751987/pexels-photo-4751987.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { name: 'Juniper Cascade', price: '$249', level: 'Intermediate', image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { name: 'Chinese Elm', price: '$159', level: 'Beginner', image: 'https://images.pexels.com/photos/5632447/pexels-photo-5632447.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { name: 'Flowering Cherry', price: '$299', level: 'Advanced', image: 'https://images.pexels.com/photos/5015046/pexels-photo-5015046.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { name: 'Pine Windswept', price: '$349', level: 'Intermediate', image: 'https://images.pexels.com/photos/6210825/pexels-photo-6210825.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { name: 'Ficus Retusa', price: '$199', level: 'Beginner', image: 'https://images.pexels.com/photos/4750952/pexels-photo-4750952.jpeg?auto=compress&cs=tinysrgb&w=500' },
            ].map((tree, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#CEEDB2]/20 to-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#CEEDB2]/50 overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-[#CEF17B]/30 to-[#CEEDB2]/30 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                  <img src={tree.image} alt={tree.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-playfair text-2xl font-bold text-[#084734]">{tree.name}</h3>
                    <span className="bg-[#CEF17B] text-[#084734] px-3 py-1 rounded-full text-sm font-poppins font-medium">
                      {tree.level}
                    </span>
                  </div>
                  <p className="font-poppins text-[#084734]/60">
                    A timeless classic that brings natural elegance to any space.
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-playfair text-3xl font-bold text-[#084734]">{tree.price}</span>
                    <button className="bg-[#084734] text-white px-6 py-2 rounded-full font-poppins hover:bg-[#084734]/90 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="care" className="py-20 px-6 bg-gradient-to-br from-[#CEEDB2]/20 to-[#CEF17B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#084734] mb-4">
              Complete Care Support
            </h2>
            <p className="font-poppins text-lg text-[#084734]/70 max-w-2xl mx-auto">
              Everything you need to help your bonsai thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#CEEDB2]"
              >
                <div className="bg-gradient-to-br from-[#CEF17B] to-[#CEEDB2] w-20 h-20 rounded-2xl flex items-center justify-center text-[#084734] mb-6">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#084734] mb-3">
                  {service.title}
                </h3>
                <p className="font-poppins text-[#084734]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#084734] mb-6">
                Why Choose ZenBonsai?
              </h2>
              <p className="font-poppins text-lg text-[#084734]/70 mb-8 leading-relaxed">
                With over 20 years of expertise, we've cultivated thousands of bonsai trees and helped countless enthusiasts begin their journey. Our commitment to quality and customer education sets us apart.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Award className="w-6 h-6" />, text: 'Certified Master Cultivators' },
                  { icon: <Leaf className="w-6 h-6" />, text: 'Sustainably Sourced Trees' },
                  { icon: <ShoppingCart className="w-6 h-6" />, text: 'Lifetime Care Support' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-[#CEF17B] p-3 rounded-full text-[#084734]">
                      {item.icon}
                    </div>
                    <span className="font-poppins text-[#084734] text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#CEEDB2] to-[#CEF17B] rounded-[3rem] shadow-2xl flex items-center justify-center text-9xl">
                🌳
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#084734] rounded-3xl opacity-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#CEF17B] rounded-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gradient-to-br from-[#CEEDB2]/20 to-[#CEF17B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#084734] mb-4">
              Our Story
            </h2>
            <p className="font-poppins text-lg text-[#084734]/70 max-w-2xl mx-auto">
              Two decades of passion, expertise, and dedication to the art of bonsai
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="font-poppins text-lg text-[#084734]/80 mb-6 leading-relaxed">
                Founded in 2004, ZenBonsai began as a small passion project in a modest greenhouse. What started with just a handful of trees has grown into a thriving community of bonsai enthusiasts and cultivators from around the world.
              </p>
              <p className="font-poppins text-lg text-[#084734]/80 mb-6 leading-relaxed">
                Our mission is simple: to make the ancient art of bonsai cultivation accessible to everyone, regardless of experience level. We believe that nurturing a bonsai is not just about growing a tree—it's about cultivating patience, mindfulness, and a deeper connection with nature.
              </p>
              <p className="font-poppins text-lg text-[#084734]/80 leading-relaxed">
                Every tree we care for is treated with the utmost respect and expertise, ensuring that when it reaches your home, it's ready to thrive and bring years of natural beauty to your space.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#CEEDB2] to-[#CEF17B] rounded-[3rem] shadow-2xl flex items-center justify-center text-9xl">
                🌿
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#CEF17B] rounded-3xl opacity-20"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-12 h-12" />, title: 'Master Cultivators', desc: 'Our team consists of certified bonsai experts with 20+ years of experience.' },
              { icon: <Leaf className="w-12 h-12" />, title: 'Sustainable Sourcing', desc: 'We ethically source all our trees and promote eco-friendly cultivation practices.' },
              { icon: <Sun className="w-12 h-12" />, title: 'Lifetime Support', desc: 'We stand by every tree with comprehensive care guides and ongoing customer support.' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center border border-[#CEEDB2]">
                <div className="bg-gradient-to-br from-[#CEF17B] to-[#CEEDB2] w-16 h-16 rounded-2xl flex items-center justify-center text-[#084734] mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#084734] mb-2">{item.title}</h3>
                <p className="font-poppins text-[#084734]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#084734] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <a href="#home" className="flex items-center space-x-2 mb-4 cursor-pointer hover:opacity-70 transition-opacity">
                <Leaf className="w-6 h-6" />
                <span className="font-playfair text-2xl font-bold">ZenBonsai</span>
              </a>
              <p className="font-poppins text-white/70 text-sm">
                Cultivating peace and beauty since 2004.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Shop</h4>
              <ul className="space-y-2 font-poppins text-sm text-white/70">
                <li><a href="#shop" className="hover:text-white transition-colors">All Trees</a></li>
                <li><a href="#shop" className="hover:text-white transition-colors">Beginner</a></li>
                <li><a href="#shop" className="hover:text-white transition-colors">Advanced</a></li>
                <li><a href="#shop" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Learn</h4>
              <ul className="space-y-2 font-poppins text-sm text-white/70">
                <li><a href="#care" className="hover:text-white transition-colors">Care Guide</a></li>
                <li><a href="#care" className="hover:text-white transition-colors">Video Tutorials</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="font-poppins text-sm text-white/60">
              © 2024 ZenBonsai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
