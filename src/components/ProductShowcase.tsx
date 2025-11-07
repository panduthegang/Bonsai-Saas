export default function ProductShowcase() {
  const products = [
    { name: 'Japanese Maple', price: '$189', level: 'Beginner', image: 'https://images.pexels.com/photos/4751987/pexels-photo-4751987.jpeg?auto=compress&cs=tinysrgb&w=500' },
    { name: 'Juniper Cascade', price: '$249', level: 'Intermediate', image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500' },
    { name: 'Chinese Elm', price: '$159', level: 'Beginner', image: 'https://images.pexels.com/photos/5632447/pexels-photo-5632447.jpeg?auto=compress&cs=tinysrgb&w=500' },
    { name: 'Flowering Cherry', price: '$299', level: 'Advanced', image: 'https://images.pexels.com/photos/5015046/pexels-photo-5015046.jpeg?auto=compress&cs=tinysrgb&w=500' },
    { name: 'Pine Windswept', price: '$349', level: 'Intermediate', image: 'https://images.pexels.com/photos/6210825/pexels-photo-6210825.jpeg?auto=compress&cs=tinysrgb&w=500' },
    { name: 'Ficus Retusa', price: '$199', level: 'Beginner', image: 'https://images.pexels.com/photos/4750952/pexels-photo-4750952.jpeg?auto=compress&cs=tinysrgb&w=500' },
  ];

  return (
    <section id="showcase" className="py-20 px-6 bg-white">
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
          {products.map((tree, index) => (
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
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
