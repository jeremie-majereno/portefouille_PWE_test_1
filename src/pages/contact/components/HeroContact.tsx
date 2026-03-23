export default function HeroContact() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://readdy.ai/api/search-image?query=modern%20minimalist%20office%20desk%20with%20laptop%20notebook%20and%20coffee%20cup%20in%20soft%20natural%20lighting%20with%20clean%20white%20background%20and%20subtle%20geometric%20elements%20creating%20professional%20welcoming%20atmosphere%20for%20contact%20page&width=1920&height=1080&seq=contact-hero-bg&orientation=landscape)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/35"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center w-full">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Travaillons Ensemble
          </h1>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous avez un projet en tête ? Discutons-en ! Je suis toujours ravi d'échanger 
            sur de nouvelles idées et de relever de nouveaux défis créatifs.
          </p>

          <div className="flex items-center justify-center gap-6 mt-12">
            <a href="mailto:contact@designer.com" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors cursor-pointer">
              <i className="ri-mail-line text-xl"></i>
              <span className="text-sm">contact@designer.com</span>
            </a>
            <div className="w-px h-6 bg-white/30"></div>
            <a href="tel:+33612345678" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors cursor-pointer">
              <i className="ri-phone-line text-xl"></i>
              <span className="text-sm">+33 6 12 34 56 78</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
