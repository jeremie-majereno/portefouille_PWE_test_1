import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quel est votre délai de réponse ?',
      answer: 'Je réponds généralement dans les 24 heures ouvrées. Pour les demandes urgentes, n\'hésitez pas à me contacter directement par téléphone.'
    },
    {
      question: 'Quels sont vos tarifs ?',
      answer: 'Mes tarifs varient selon la complexité et l\'envergure du projet. Je propose des formules à partir de 1 500€ pour les petits projets. Un devis personnalisé sera établi après notre première discussion.'
    },
    {
      question: 'Travaillez-vous avec des clients internationaux ?',
      answer: 'Oui, absolument ! Je travaille régulièrement avec des clients du monde entier. La communication se fait principalement en ligne via visioconférence, email et outils collaboratifs.'
    },
    {
      question: 'Combien de temps prend un projet en moyenne ?',
      answer: 'Cela dépend de la complexité du projet. Un site vitrine simple peut prendre 2-3 semaines, tandis qu\'une application complète peut nécessiter 2-3 mois. Je fournis toujours un planning détaillé avant de commencer.'
    },
    {
      question: 'Proposez-vous des révisions ?',
      answer: 'Oui, toutes mes formules incluent des révisions. Le nombre varie selon le package choisi (2 à 4 révisions incluses). Des révisions supplémentaires peuvent être ajoutées si nécessaire.'
    },
    {
      question: 'Assurez-vous le support après livraison ?',
      answer: 'Oui, je propose un support post-livraison de 30 à 60 jours selon la formule choisie. Un support étendu peut également être mis en place pour un accompagnement sur le long terme.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Vous avez des questions ? Voici les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <i
                  className={`ri-arrow-down-s-line text-2xl text-gray-900 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="mailto:contact@designer.com"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors cursor-pointer"
          >
            <i className="ri-mail-line"></i>
            Contactez-moi directement
          </a>
        </div>
      </div>
    </section>
  );
}
