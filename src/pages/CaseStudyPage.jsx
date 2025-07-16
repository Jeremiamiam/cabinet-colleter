import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

// On réutilise les mêmes données. Dans une vraie app, ça viendrait d'un CMS ou d'une API.
const caseStudiesData = [
  {
    id: 'cas-de-marc-coureur',
    title: 'Le cas de Marc, coureur : soulager une fasciite plantaire',
    summary: 'Découvrez comment une analyse de course et des semelles thermoformées ont permis à Marc de reprendre la compétition sans douleur.',
    category: 'Posturologie du Sportif',
    content: {
      problem: 'Marc, 42 ans, coureur de fond, souffrait d\'une douleur vive au talon depuis 6 mois, diagnostiquée comme une fasciite plantaire. Chaque course devenait un calvaire, et il avait dû arrêter la compétition.',
      solution: 'Après une analyse biomécanique complète sur tapis, nous avons identifié un affaissement de l\'arche plantaire et une pronation excessive. Nous avons conçu une paire de semelles thermoformées sur-mesure pour corriger ces déséquilibres, avec un amorti spécifique au talon.',
      result: 'Après un mois de port, Marc a pu reprendre l\'entraînement progressivement et sans douleur. Trois mois plus tard, il a terminé un semi-marathon, améliorant même son temps personnel. Le suivi annuel permet de s\'assurer que la correction est maintenue.'
    }
  },
  {
    id: 'cas-de-sophie-rhizarthrose',
    title: 'Le cas de Sophie : une orthèse sur-mesure pour sa rhizarthrose',
    summary: "Après des années de douleurs au pouce, une orthèse de repos a changé le quotidien de Sophie. Voici comment.",
    category: 'Orthèse de la Main',
    content: {
      problem: 'Sophie, 65 ans, ne pouvait plus ouvrir une bouteille ou tenir un stylo sans une douleur aiguë à la base du pouce, un symptôme classique de la rhizarthrose. Les solutions standards lui offraient peu de soulagement.',
      solution: 'Nous avons réalisé une orthèse de repos thermoformée directement sur sa main. Cette orthèse immobilise l\'articulation en position de repos, réduisant l\'inflammation durant la nuit et les périodes d\'inactivité.',
      result: 'Dès les premières nuits, Sophie a ressenti une diminution significative de la douleur au réveil. Au bout de quelques semaines, elle a retrouvé une grande partie de sa mobilité pour les gestes du quotidien.'
    }
  },
  {
    id: 'cas-de-leo-scoliose',
    title: "Le cas de Léo, 14 ans : corriger une attitude scoliotique",
    summary: "Le suivi postural et le port de semelles adaptées ont permis de corriger la posture de Léo durant sa croissance.",
    category: 'Posturologie de l\'Enfant',
    content: {
      problem: 'Lors d\'une visite médicale scolaire, une attitude scoliotique a été détectée chez Léo. Ses parents s\'inquiétaient d\'une possible aggravation durant sa puberté.',
      solution: 'L\'analyse posturale a révélé une bascule du bassin liée à une inégalité de longueur des membres inférieurs fonctionnelle. Des semelles correctrices avec une talonnette millimétrique ont été mises en place pour rééquilibrer le bassin.',
      result: 'Au contrôle annuel, la bascule du bassin avait disparu et la colonne vertébrale de Léo était parfaitement alignée. Le suivi se poursuit pour accompagner la fin de sa croissance.'
    }
  }
];

const CaseStudyPage = () => {
  const { studyId } = useParams();
  const study = caseStudiesData.find(s => s.id === studyId);

  if (!study) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Étude de cas non trouvée</h1>
        <p className="py-6">Désolé, cette page n'existe pas.</p>
        <Link to="/etudes-de-cas" className="btn btn-primary">Retour aux études de cas</Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="badge badge-secondary">{study.category}</div>
        <h1 className="text-4xl font-bold mt-2">{study.title}</h1>
      </div>
      
      <figure className="mb-8 h-80 w-full">
        <ImagePlaceholder />
      </figure>

      <div className="prose lg:prose-xl max-w-none">
        <h2>Le Problème</h2>
        <p>{study.content.problem}</p>
        
        <h2>Notre Solution</h2>
        <p>{study.content.solution}</p>
        
        <h2>Le Résultat</h2>
        <p>{study.content.result}</p>
      </div>

      <div className="text-center mt-16">
        <Link to="/etudes-de-cas" className="btn btn-primary">Voir toutes les études de cas</Link>
      </div>
    </div>
  );
};

export default CaseStudyPage; 