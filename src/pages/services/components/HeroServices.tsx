export default function HeroServices() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://readdy.ai/api/search-image?query=abstract%20creative%20workspace%20with%20design%20tools%20digital%20tablet%20stylus%20and%20modern%20minimalist%20setup%20in%20soft%20neutral%20tones%20with%20geometric%20shapes%20and%20clean%20professional%20atmosphere%20perfect%20for%20creative%20services%20background&width=1920&height=1080&seq=services-hero-bg&orientation=landscape)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Services de Design
            <br />
            <span className="text-white/90">Sur Mesure</span>
          </h1>
          
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Des solutions créatives adaptées à vos besoins. Du concept à la réalisation, 
            je vous accompagne dans tous vos projets digitaux pour créer des expériences uniques et impactantes.
          </p>

          <div className="flex items-center justify-center gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/80">Satisfaction client</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">48h</div>
              <div className="text-sm text-white/80">Délai de réponse</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-white/80">Support disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
