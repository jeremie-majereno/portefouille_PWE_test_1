export default function ToolsSection() {
  const tools = [
    { name: 'Figma', icon: 'ri-pencil-ruler-line', level: 95 },
    { name: 'Adobe XD', icon: 'ri-layout-line', level: 90 },
    { name: 'Photoshop', icon: 'ri-image-edit-line', level: 88 },
    { name: 'Illustrator', icon: 'ri-pen-nib-line', level: 85 },
    { name: 'Sketch', icon: 'ri-artboard-line', level: 82 },
    { name: 'Principle', icon: 'ri-movie-line', level: 80 },
    { name: 'After Effects', icon: 'ri-film-line', level: 75 },
    { name: 'InVision', icon: 'ri-share-box-line', level: 78 }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes outils
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une maîtrise complète des outils de design modernes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="p-6 bg-white rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-lg">
                    <i className={`${tool.icon} text-lg text-white`}></i>
                  </div>
                  <span className="font-semibold text-gray-900">{tool.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-600">{tool.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-900 rounded-full transition-all duration-1000"
                  style={{ width: `${tool.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
