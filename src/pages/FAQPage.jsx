import React from 'react';

const faqData = [
  {
    question: "Est-ce que le bilan postural ou la fabrication d'une orthèse fait mal ?",
    answer: "Absolument pas. Toutes nos analyses sont non-invasives et indolores. La prise d'empreinte et le moulage d'orthèse sont réalisés avec soin pour garantir votre confort."
  },
  {
    question: "Combien de temps avant de voir une amélioration avec mes semelles ?",
    answer: "Chaque cas est unique, mais la plupart de nos patients ressentent un soulagement et une amélioration de leur confort dans les premières semaines de port. Un suivi à un mois est systématiquement programmé pour ajuster le traitement si nécessaire."
  },
  {
    question: "Dois-je porter mes semelles ou mon orthèse toute ma vie ?",
    answer: "Pas forcément. Pour certaines pathologies de croissance ou post-traumatiques, le traitement est temporaire. Pour des affections chroniques, le port à long terme est souvent recommandé pour maintenir l'équilibre et prévenir les récidives. Nous évaluons cela avec vous chaque année."
  },
  {
    question: "Comment fonctionne le remboursement par la sécurité sociale et ma mutuelle ?",
    answer: "Sur prescription médicale, une partie du coût des semelles ou orthèses est prise en charge par l'Assurance Maladie. La plupart des mutuelles complètent ce remboursement. Nous vous fournissons une feuille de soins et un devis détaillé pour vos démarches."
  },
  {
    question: "Je fais beaucoup de sport, les semelles vont-elles rentrer dans mes chaussures ?",
    answer: "Oui. Nous concevons les semelles en fonction de votre pratique sportive et de vos chaussures (running, chaussures à crampons, etc.). Elles sont fines, dynamiques et conçues pour optimiser votre performance, pas pour la gêner."
  }
];

const FAQPage = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold">Questions Fréquentes</h1>
      <p className="py-6 text-lg">Les réponses aux questions que vous vous posez le plus souvent.</p>
    </div>

    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
          <div className="collapse-title text-xl font-medium">
            {item.question}
          </div>
          <div className="collapse-content"> 
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FAQPage; 