import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../../components/common/ImagePlaceholder';
import WarningBanner from '../../components/common/WarningBanner';

const PostOperatoirePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16 min-h-[40vh]">
        <div className="hero-content container text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Orthèses Post-Opératoires</h1>
            <p className="py-6 text-xl text-base-content/80">
              Accompagnement orthétique sur-mesure après chirurgie de la main et du poignet pour une récupération optimale.
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
          message="Les orthèses post-opératoires nécessitent une prescription médicale. Elles sont généralement prescrites par votre chirurgien."
          type="warning"
        />

        {/* Section Qu'est-ce qu'une orthèse post-opératoire */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-4">Qu'est-ce qu'une orthèse post-opératoire ?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-base-content/90 mb-4">
                  Une orthèse post-opératoire est un appareillage sur-mesure conçu spécifiquement pour accompagner 
                  la récupération après une intervention chirurgicale de la main ou du poignet. Elle joue un rôle 
                  crucial dans le succès de l'intervention.
                </p>
                <p className="text-base-content/90">
                  En collaboration étroite avec votre chirurgien, nous concevons des orthèses qui respectent 
                  les protocoles de rééducation tout en s'adaptant parfaitement à votre morphologie et à vos besoins.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64">
                  <ImagePlaceholder alt="Orthèse post-opératoire sur-mesure" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Types d'interventions */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Interventions nécessitant une orthèse</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Chirurgies du poignet</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Libération du canal carpien</li>
                    <li>Réparation des ligaments</li>
                    <li>Ostéosynthèse du poignet</li>
                    <li>Arthrodèse du poignet</li>
                    <li>Résection de la première rangée</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Chirurgies de la main</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Réparation des tendons</li>
                    <li>Arthroplastie du pouce</li>
                    <li>Réparation des nerfs</li>
                    <li>Amputation et réimplantation</li>
                    <li>Chirurgie des doigts à ressaut</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Rôles de l'orthèse */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Rôles de l'orthèse post-opératoire</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
                    <path d="m16 10-4 4-4-4"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Protection</h3>
                <p className="text-sm">Protège les structures opérées et évite les mouvements nocifs</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20v-8m0-4V4m8 8h-8m-4 0H4"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Positionnement</h3>
                <p className="text-sm">Maintient la position optimale pour la cicatrisation</p>
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

        {/* Section Phases de récupération */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Phases de récupération et orthèses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Phase 1 : Immobilisation (0-6 semaines)</h3>
                <div className="card bg-base-100 mb-4">
                  <div className="card-body p-4">
                    <h4 className="font-semibold text-primary mb-2">Orthèse d'immobilisation</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Protection complète des structures opérées</li>
                      <li>Position de cicatrisation optimale</li>
                      <li>Réduction de l'œdème</li>
                      <li>Prévention des complications</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4">Phase 2 : Mobilisation (6-12 semaines)</h3>
                <div className="card bg-base-100">
                  <div className="card-body p-4">
                    <h4 className="font-semibold text-primary mb-2">Orthèse fonctionnelle</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Mobilisation progressive contrôlée</li>
                      <li>Protection lors des activités</li>
                      <li>Guidage des mouvements</li>
                      <li>Rééducation active</li>
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
                      <li>Prévention des récidives</li>
                      <li>Retour progressif aux activités</li>
                      <li>Confort au quotidien</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <ImagePlaceholder alt="Évolution des orthèses post-opératoires" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Collaboration médicale */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Collaboration avec l'équipe médicale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Avec votre chirurgien :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respect strict du protocole post-opératoire</li>
                  <li>Adaptation de l'orthèse selon l'évolution</li>
                  <li>Communication régulière sur les ajustements</li>
                  <li>Suivi des objectifs de récupération</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Avec votre kinésithérapeute :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Coordination des séances de rééducation</li>
                  <li>Adaptation de l'orthèse pour les exercices</li>
                  <li>Optimisation de la récupération fonctionnelle</li>
                  <li>Préparation du retour aux activités</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Conseils post-opératoires */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Conseils pour une récupération optimale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Port de l'orthèse :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respecter les consignes de port</li>
                  <li>Vérifier l'ajustement régulièrement</li>
                  <li>Signaler tout inconfort</li>
                  <li>Maintenir une bonne hygiène</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Suivi médical :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respecter les rendez-vous de contrôle</li>
                  <li>Signaler toute anomalie</li>
                  <li>Suivre les consignes de rééducation</li>
                  <li>Être patient dans la récupération</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Préparation d'une intervention ?</h2>
          <p className="text-base-content/70 mb-6">
            Nous vous accompagnons dans votre récupération post-opératoire avec des orthèses sur-mesure.
          </p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </>
  );
};

export default PostOperatoirePage; 