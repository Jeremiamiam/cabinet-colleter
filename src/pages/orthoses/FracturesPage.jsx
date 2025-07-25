import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../../components/common/ImagePlaceholder';
import WarningBanner from '../../components/common/WarningBanner';

const FracturesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16 min-h-[40vh]">
        <div className="hero-content container text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Orthèses pour Fractures</h1>
            <p className="py-6 text-xl text-base-content/80">
              Accompagnement orthétique sur-mesure pour les fractures de la main et du poignet : consolidation optimale et récupération fonctionnelle.
            </p>
            <Link to="/ortheses-main" className="btn btn-secondary">
              ← Retour aux orthèses de main
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <WarningBanner 
          title="Ordonnance médicale obligatoire"
          message="Les orthèses pour fractures nécessitent une prescription médicale. Elles sont prescrites par votre médecin ou chirurgien."
          type="warning"
        />

        {/* Section Qu'est-ce qu'une fracture */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-4">Fractures de la main et du poignet</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-base-content/90 mb-4">
                  Les fractures de la main et du poignet sont des traumatismes fréquents qui nécessitent 
                  une prise en charge orthétique adaptée. L'orthèse joue un rôle crucial dans la consolidation 
                  et la récupération fonctionnelle.
                </p>
                <p className="text-base-content/90">
                  Selon le type de fracture, sa localisation et le traitement choisi (orthopédique ou chirurgical), 
                  nous adaptons nos orthèses pour optimiser la guérison et prévenir les complications.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64">
                  <ImagePlaceholder alt="Fractures de la main et du poignet" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Types de fractures */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Principales fractures traitées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Fractures du poignet</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Fracture de Pouteau-Colles (radius distal)</li>
                    <li>Fracture de Smith (radius distal)</li>
                    <li>Fracture de Barton</li>
                    <li>Fracture du scaphoïde</li>
                    <li>Fractures complexes du poignet</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Fractures de la main</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Fractures des métacarpiens</li>
                    <li>Fractures des phalanges</li>
                    <li>Fractures de la base du pouce</li>
                    <li>Fractures articulaires</li>
                    <li>Fractures ouvertes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Rôles de l'orthèse */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Rôles de l'orthèse dans la consolidation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
                    <path d="m16 10-4 4-4-4"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Immobilisation</h3>
                <p className="text-sm">Maintient les fragments en position pour la consolidation</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20v-8m0-4V4m8 8h-8m-4 0H4"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Protection</h3>
                <p className="text-sm">Protège la fracture des traumatismes et mouvements nocifs</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Rééducation</h3>
                <p className="text-sm">Facilite la récupération fonctionnelle progressive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Phases de traitement */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Phases de traitement et orthèses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Phase 1 : Consolidation (3-8 semaines)</h3>
                <div className="card bg-base-100 mb-4">
                  <div className="card-body p-4">
                    <h4 className="font-semibold text-primary mb-2">Orthèse d'immobilisation</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Immobilisation stricte de la fracture</li>
                      <li>Position de consolidation optimale</li>
                      <li>Protection contre les traumatismes</li>
                      <li>Réduction de l'œdème</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4">Phase 2 : Mobilisation (8-12 semaines)</h3>
                <div className="card bg-base-100">
                  <div className="card-body p-4">
                    <h4 className="font-semibold text-primary mb-2">Orthèse fonctionnelle</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Mobilisation progressive contrôlée</li>
                      <li>Protection lors des activités</li>
                      <li>Rééducation active</li>
                      <li>Prévention des raideurs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Phase 3 : Renforcement (12+ semaines)</h3>
                <div className="card bg-base-100 mb-4">
                  <div className="card-body p-4">
                    <h4 className="font-semibold text-primary mb-2">Orthèse de protection</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Protection lors des activités</li>
                      <li>Retour progressif aux activités</li>
                      <li>Prévention des récidives</li>
                      <li>Confort au quotidien</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <ImagePlaceholder alt="Évolution des orthèses pour fractures" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Types d'orthèses */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Types d'orthèses selon la fracture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Orthèses d'immobilisation</h3>
                <div className="space-y-4">
                  <div className="card bg-base-200">
                    <div className="card-body p-4">
                      <h4 className="font-semibold text-primary">Plâtre thermoformé</h4>
                      <p className="text-sm">Immobilisation stricte pour fractures instables</p>
                    </div>
                  </div>
                  <div className="card bg-base-200">
                    <div className="card-body p-4">
                      <h4 className="font-semibold text-primary">Orthèse rigide</h4>
                      <p className="text-sm">Protection renforcée avec possibilité d'ouverture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Orthèses fonctionnelles</h3>
                <div className="space-y-4">
                  <div className="card bg-base-200">
                    <div className="card-body p-4">
                      <h4 className="font-semibold text-primary">Orthèse articulée</h4>
                      <p className="text-sm">Mobilisation contrôlée avec protection</p>
                    </div>
                  </div>
                  <div className="card bg-base-200">
                    <div className="card-body p-4">
                      <h4 className="font-semibold text-primary">Orthèse de protection</h4>
                      <p className="text-sm">Protection légère pour activités quotidiennes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Suivi médical */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Suivi médical et ajustements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Contrôles radiologiques :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Vérification de la consolidation</li>
                  <li>Détection d'éventuelles complications</li>
                  <li>Adaptation du traitement</li>
                  <li>Décision de la mobilisation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Ajustements de l'orthèse :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Adaptation selon l'évolution</li>
                  <li>Modification du niveau de contrainte</li>
                  <li>Changement de type d'orthèse</li>
                  <li>Optimisation du confort</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Conseils */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Conseils pour une bonne consolidation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Pendant la consolidation :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respecter l'immobilisation prescrite</li>
                  <li>Éviter les mouvements interdits</li>
                  <li>Surveiller les signes d'alerte</li>
                  <li>Maintenir une bonne hygiène</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Signes d'alerte :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Douleurs intenses et persistantes</li>
                  <li>Gonflement important</li>
                  <li>Changement de couleur</li>
                  <li>Perte de sensibilité</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Fracture récente ?</h2>
          <p className="text-base-content/70 mb-6">
            Nos orthèses sur-mesure optimisent votre consolidation et votre récupération fonctionnelle.
          </p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </>
  );
};

export default FracturesPage; 