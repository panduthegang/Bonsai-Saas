export default function ProductShowcase() {
  const products = [
    { name: 'Japanese Maple', price: '$189', level: 'Beginner', image: 'https://images.unsplash.com/photo-1641412722397-3be359096577?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735' },
    { name: 'Juniper Cascade', price: '$249', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1470364693235-a4fe27c60914?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' },
    { name: 'Chinese Elm', price: '$159', level: 'Beginner', image: 'https://images.unsplash.com/photo-1632161286719-5afe9b5d954b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=745' },
    { name: 'Flowering Cherry', price: '$299', level: 'Advanced', image: 'https://images.unsplash.com/photo-1569873175476-10aa45523ab8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=717' },
    { name: 'Pine Windswept', price: '$349', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1707932700096-db113d55a026?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=783' },
    { name: 'Ficus Retusa', price: '$199', level: 'Beginner', image: 'https://images.unsplash.com/photo-1702846920386-c01a6bb92537?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=670' },
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
