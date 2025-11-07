export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bonsai.png)' }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CEF17B]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#CEEDB2]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in">
            Cultivate Serenity, One Tree at a Time
          </h1>
          <p className="font-poppins text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Discover our curated collection of authentic bonsai trees. Each piece is a living artwork, carefully nurtured to bring peace and beauty to your space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#showcase" className="bg-[#084734] text-white px-8 py-4 rounded-full font-poppins font-medium hover:bg-[#084734]/90 transition-all transform hover:scale-105 shadow-lg">
              Explore Collection
            </a>
            <a href="#features" className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-medium hover:bg-white hover:text-[#084734] transition-all">
              Learn About Care
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
