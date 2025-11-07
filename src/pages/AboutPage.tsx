import { Award, Leaf, Sun, Heart, Users, Sprout } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative bg-cover bg-center pt-48 pb-32 px-6 text-center text-white"
        style={{ backgroundImage: "url('/About-Hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Our Story
          </h1>
          <p className="font-poppins text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Two decades of passion, expertise, and dedication to the ancient art of bonsai cultivation
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#CEEDB2] to-[#CEF17B] rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1632161286719-5afe9b5d954b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=745"
                  alt="Bonsai Garden"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#CEF17B] rounded-3xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#084734] rounded-3xl opacity-10"></div>
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#084734] mb-6">
                Founded on Passion
              </h2>
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
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-[#CEEDB2]/20 to-[#CEF17B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#084734] mb-4">
              Our Philosophy
            </h2>
            <p className="font-poppins text-lg text-[#084734]/70 max-w-2xl mx-auto">
              Blending ancient wisdom with modern innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Mindful Cultivation',
                description: 'We approach each tree with respect, patience, and care, honoring the centuries-old traditions of bonsai artistry.',
              },
              {
                icon: <Sprout className="w-12 h-12" />,
                title: 'Sustainable Growth',
                description: 'Our practices prioritize environmental responsibility and the long-term health of every living tree in our care.',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Community First',
                description: 'We believe in building a supportive community where enthusiasts of all levels can learn, share, and grow together.',
              },
            ].map((philosophy, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#CEEDB2]"
              >
                <div className="bg-gradient-to-br from-[#CEF17B] to-[#CEEDB2] w-20 h-20 rounded-2xl flex items-center justify-center text-[#084734] mb-6">
                  {philosophy.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#084734] mb-3">
                  {philosophy.title}
                </h3>
                <p className="font-poppins text-[#084734]/70 leading-relaxed">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#084734] mb-4">
              Why Choose ZenBonsai?
            </h2>
            <p className="font-poppins text-lg text-[#084734]/70 max-w-2xl mx-auto">
              Our commitment to quality and customer education sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Award className="w-12 h-12" />, title: 'Master Cultivators', desc: 'Our team consists of certified bonsai experts with over 20 years of experience in the art.' },
              { icon: <Leaf className="w-12 h-12" />, title: 'Sustainable Sourcing', desc: 'We ethically source all our trees and promote eco-friendly cultivation practices worldwide.' },
              { icon: <Sun className="w-12 h-12" />, title: 'Lifetime Support', desc: 'We stand by every tree with comprehensive care guides and ongoing customer support.' },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#CEEDB2]/20 to-white rounded-3xl p-8 text-center border border-[#CEEDB2] hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-[#CEF17B] to-[#CEEDB2] w-20 h-20 rounded-2xl flex items-center justify-center text-[#084734] mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#084734] mb-3">{item.title}</h3>
                <p className="font-poppins text-[#084734]/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#084734] mb-6">
                Join Our Growing Family
              </h2>
              <p className="font-poppins text-lg text-[#084734]/80 mb-6 leading-relaxed">
                With over 20 years of expertise, we've cultivated thousands of bonsai trees and helped countless enthusiasts begin their journey into this meditative art form.
              </p>
              <p className="font-poppins text-lg text-[#084734]/80 mb-8 leading-relaxed">
                Whether you're a complete beginner or a seasoned practitioner, ZenBonsai offers the tools, knowledge, and support you need to nurture beautiful, thriving trees.
              </p>
              <a href="/#showcase" className="inline-block bg-[#084734] text-white px-8 py-4 rounded-full font-poppins font-medium hover:bg-[#084734]/90 transition-all transform hover:scale-105 shadow-lg">
                Explore Our Collection
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#CEEDB2] to-[#CEF17B] rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1569873175476-10aa45523ab8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=717"
                  alt="Beautiful Bonsai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#084734] rounded-3xl opacity-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#CEF17B] rounded-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
