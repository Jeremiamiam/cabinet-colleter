import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

const caseStudiesData = [
  {
    id: 'cas-de-marc-coureur',
    title: 'Le cas de Marc, coureur : soulager une fasciite plantaire',
    summary: 'Découvrez comment une analyse de course et des semelles thermoformées ont permis à Marc de reprendre la compétition sans douleur.',
    category: 'Posturologie du Sportif',
  },
  {
    id: 'cas-de-sophie-rhizarthrose',
    title: 'Le cas de Sophie : une orthèse sur-mesure pour sa rhizarthrose',
    summary: "Après des années de douleurs au pouce, une orthèse de repos a changé le quotidien de Sophie. Voici comment.",
    category: 'Orthèse de la Main',
  },
  {
    id: 'cas-de-leo-scoliose',
    title: "Le cas de Léo, 14 ans : corriger une attitude scoliotique",
    summary: "Le suivi postural et le port de semelles adaptées ont permis de corriger la posture de Léo durant sa croissance.",
    category: 'Posturologie de l\'Enfant',
  }
];

const CaseStudiesPage = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Nos Patients, Nos Réussites</h1>
        <p className="py-6 text-lg">Découvrez des cas concrets de patients que nous avons accompagnés.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudiesData.map((study) => (
          <div key={study.id} className="card bg-base-200 shadow-xl">
            <figure className="h-48">
              <ImagePlaceholder />
            </figure>
            <div className="card-body">
              <div className="badge badge-secondary">{study.category}</div>
              <h2 className="card-title mt-2">{study.title}</h2>
              <p>{study.summary}</p>
              <div className="card-actions justify-end mt-4">
                <Link to={`/etudes-de-cas/${study.id}`} className="btn btn-primary">Lire l'étude de cas</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage; 