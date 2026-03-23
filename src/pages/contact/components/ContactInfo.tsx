export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'contact@designer.com',
      link: 'mailto:contact@designer.com',
      description: 'Réponse sous 24h'
    },
    {
      icon: 'ri-phone-line',
      title: 'Téléphone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678',
      description: 'Lun-Ven 9h-18h'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Localisation',
      value: 'Paris, France',
      link: null,
      description: 'Disponible à distance'
    }
  ];

  const socialLinks = [
    { icon: 'ri-dribbble-line', name: 'Dribbble', url: 'https://dribbble.com' },
    { icon: 'ri-behance-line', name: 'Behance', url: 'https://behance.net' },
    { icon: 'ri-linkedin-line', name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: 'ri-instagram-line', name: 'Instagram', url: 'https://instagram.com' },
    { icon: 'ri-github-line', name: 'GitHub', url: 'https://github.com' }
  ];

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Restons en Contact
        </h2>
        <p className="text-gray-600 leading-relaxed">
          N'hésitez pas à me contacter pour discuter de votre projet, poser des questions 
          ou simplement échanger sur le design. Je réponds généralement dans les 24 heures.
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-lg flex-shrink-0">
              <i className={`${method.icon} text-xl`}></i>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {method.title}
              </h3>
              {method.link ? (
                <a
                  href={method.link}
                  className="text-gray-900 font-medium hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-900 font-medium">{method.value}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Suivez-moi
        </h3>
        <div className="flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label={social.name}
            >
              <i className={`${social.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
