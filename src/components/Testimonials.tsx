export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Bonsai Enthusiast',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'ZenBonsai transformed my approach to caring for my trees. The AI reminders and growth tracking have been invaluable.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Interior Designer',
      avatar: 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'The quality of their bonsai is exceptional. Every tree I have received has been healthy and beautifully shaped.',
    },
    {
      name: 'Emily Watson',
      role: 'Home Gardener',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'As a beginner, I was nervous about caring for a bonsai. Their care guides and support made it so easy and enjoyable.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#CEF17B]/10 to-[#CEEDB2]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#084734] mb-4">
            What Our Community Says
          </h2>
          <p className="font-poppins text-lg text-[#084734]/70 max-w-2xl mx-auto">
            Join thousands of satisfied bonsai enthusiasts who trust ZenBonsai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#CEEDB2]"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#CEF17B] to-[#CEEDB2]">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-[#084734]">{testimonial.name}</h4>
                  <p className="font-poppins text-sm text-[#084734]/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="font-poppins text-[#084734]/80 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
