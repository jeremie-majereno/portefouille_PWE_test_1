import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'CEO, TechStart',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%20with%20confident%20smile%20wearing%20elegant%20attire%20against%20clean%20white%20background%20modern%20corporate%20headshot%20photography&width=200&height=200&seq=testimonial-001&orientation=squarish',
      content: 'Un travail exceptionnel ! Le design de notre application a dépassé toutes nos attentes. L\'attention aux détails et la compréhension de nos besoins ont été remarquables.',
      rating: 5
    },
    {
      name: 'Thomas Dubois',
      role: 'Fondateur, E-Shop Plus',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%20with%20friendly%20expression%20wearing%20modern%20casual%20business%20attire%20against%20clean%20white%20background%20contemporary%20headshot%20photography&width=200&height=200&seq=testimonial-002&orientation=squarish',
      content: 'Notre site e-commerce a été transformé ! Les conversions ont augmenté de 40% grâce au nouveau design. Un vrai professionnel qui comprend les enjeux business.',
      rating: 5
    },
    {
      name: 'Marie Lefebvre',
      role: 'Directrice Marketing, InnovateCo',
      image: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20portrait%20with%20warm%20smile%20wearing%20stylish%20professional%20outfit%20against%20clean%20white%20background%20modern%20corporate%20photography&width=200&height=200&seq=testimonial-003&orientation=squarish',
      content: 'Collaboration fluide et résultats impressionnants. Le design system créé nous permet maintenant de maintenir une cohérence parfaite sur tous nos supports.',
      rating: 5
    },
    {
      name: 'Alexandre Rousseau',
      role: 'CTO, FinanceApp',
      image: 'https://readdy.ai/api/search-image?query=professional%20tech%20executive%20portrait%20with%20confident%20demeanor%20wearing%20smart%20casual%20attire%20against%20clean%20white%20background%20modern%20business%20headshot&width=200&height=200&seq=testimonial-004&orientation=squarish',
      content: 'L\'expertise en UI/UX est évidente dans chaque détail. Notre application bancaire est maintenant intuitive et nos utilisateurs adorent la nouvelle interface.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce Que Disent Mes Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfaction client est ma priorité. Découvrez leurs retours d'expérience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full object-cover object-top"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-sm text-gray-600">
                  {testimonials[activeIndex].role}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-base"></i>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              "{testimonials[activeIndex].content}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      index === activeIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'
                    }`}
                  ></button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-900 hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-left-s-line text-xl"></i>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-900 hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-right-s-line text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
