import React from 'react';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import WarningBanner from '../components/common/WarningBanner';
import PathologyCard from '../components/common/PathologyCard';

const OrthesesMainPage = () => (
  <>
    {/* Hero Section */}
    <div className="hero bg-base-200 py-16 min-h-[50vh]">
      <div className="hero-content container flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <ImagePlaceholder />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Orthèses de la Main & Membre Supérieur sur-Mesure</h1>
          <p className="py-6 text-xl text-base-content/80">Le pôle d'innovation de Louis Chaudet, pour des solutions sur-mesure et de haute technicité.</p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Prendre rendez-vous pour une orthèse</a>
        </div>
      </div>
    </div>

    <div className="container mx-auto p-8">
      {/* Avertissement Ordonnance Obligatoire */}
      <WarningBanner 
        title="Ordonnance médicale obligatoire"
        message="Les orthèses de main nécessitent une prescription médicale. Veuillez vous munir de votre ordonnance lors de votre rendez-vous pour éviter toute attente inutile."
        type="warning"
      />

      {/* Section À quoi sert une orthèse ? */}
      <div className="mt-12">
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body">
            <h2 className="card-title text-3xl text-secondary mb-6">À quoi sert une orthèse de main ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Les orthèses standards vs sur-mesure</h3>
                <div className="space-y-4">
                  <div className="card bg-base-200">
                    <div className="card-body p-4">
                      <h4 className="font-semibold text-error">Solutions standards (pharmacie)</h4>
                      <ul className="list-disc pl-5 text-sm mt-2">
                        <li>Taille unique, ajustement approximatif</li>
                        <li>Confort limité</li>
                        <li>Efficacité variable</li>
                        <li>Peut aggraver certains problèmes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card bg-base-200">
                    <div className="card-body p-4">
                      <h4 className="font-semibold text-success">Orthèses sur-mesure (notre expertise)</h4>
                      <ul className="list-disc pl-5 text-sm mt-2">
                        <li>Moulage direct sur votre morphologie</li>
                        <li>Confort optimal et port prolongé</li>
                        <li>Efficacité maximale</li>
                        <li>Adaptation précise à votre pathologie</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Avantages du sur-mesure</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Précision anatomique :</strong> Moulage direct sur votre main</li>
                  <li><strong>Confort optimal :</strong> Aucune pression excessive</li>
                  <li><strong>Efficacité thérapeutique :</strong> Action ciblée sur la pathologie</li>
                  <li><strong>Durabilité :</strong> Matériaux de qualité médicale</li>
                  <li><strong>Suivi personnalisé :</strong> Ajustements si nécessaire</li>
                </ul>
                <div className="mt-6">
                  <ImagePlaceholder />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Qu'est-ce qu'une orthèse ? */}
      <div className="mt-12">
        <div className="card lg:card-side bg-base-200 shadow-xl w-full">
          <figure className="lg:w-1/2">
            <ImagePlaceholder />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-3xl text-secondary mb-4">Qu'est-ce qu'une orthèse sur-mesure ?</h2>
            <p className="text-base-content/90 mb-4">
              Contrairement aux solutions standards que vous trouvez en pharmacie, une orthèse sur-mesure est moulée directement sur vous. Elle est parfaitement adaptée à votre morphologie et à votre pathologie, garantissant un confort optimal et une efficacité maximale. C'est un véritable appareillage de haute précision.
            </p>
          </div>
        </div>
      </div>

      {/* Section Pathologies Principales */}
      <div className="my-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-secondary">Pathologies principales traitées</h2>
          <p className="text-base-content/70 mt-2">Découvrez nos solutions sur-mesure pour chaque pathologie</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PathologyCard
            title="Rhizarthrose"
            description="Arthrose de l'articulation du pouce, fréquente chez les femmes après 50 ans."
            symptoms={[
              "Douleur à la base du pouce",
              "Difficulté à saisir des objets",
              "Raideur matinale",
              "Déformation progressive"
            ]}
            solutions={[
              "Orthèse de repos nocturne",
              "Orthèse fonctionnelle diurne",
              "Ajustements progressifs"
            ]}
            linkTo="/ortheses-main/rhizarthrose"
          />
          <PathologyCard
            title="Canal Carpien"
            description="Compression du nerf médian au niveau du poignet, très fréquente."
            symptoms={[
              "Fourmillements dans les doigts",
              "Douleurs nocturnes",
              "Faiblesse de la main",
              "Perte de sensibilité"
            ]}
            solutions={[
              "Orthèse de repos nocturne",
              "Orthèse de positionnement",
              "Prévention post-opératoire"
            ]}
            linkTo="/ortheses-main/canal-carpien"
          />
                                <PathologyCard
                        title="Tendinites"
                        description="Inflammation des tendons, notamment De Quervain et épicondylite."
                        symptoms={[
                          "Douleur lors des mouvements",
                          "Gonflement localisé",
                          "Faiblesse musculaire",
                          "Douleur à la palpation"
                        ]}
                        solutions={[
                          "Orthèse de repos",
                          "Orthèse fonctionnelle",
                          "Rééducation progressive"
                        ]}
                        linkTo="/ortheses-main/tendinites"
                      />
                      <PathologyCard
                        title="Post-opératoire"
                        description="Accompagnement orthétique après chirurgie de la main et du poignet."
                        symptoms={[
                          "Protection post-opératoire",
                          "Récupération fonctionnelle",
                          "Prévention des complications",
                          "Suivi de rééducation"
                        ]}
                        solutions={[
                          "Orthèse d'immobilisation",
                          "Orthèse fonctionnelle",
                          "Orthèse de protection"
                        ]}
                        linkTo="/ortheses-main/post-operatoire"
                      />
                      <PathologyCard
                        title="Fractures"
                        description="Consolidation et récupération après fractures de la main et du poignet."
                        symptoms={[
                          "Immobilisation nécessaire",
                          "Protection de la fracture",
                          "Consolidation osseuse",
                          "Récupération fonctionnelle"
                        ]}
                        solutions={[
                          "Orthèse de consolidation",
                          "Orthèse fonctionnelle",
                          "Orthèse de protection"
                        ]}
                        linkTo="/ortheses-main/fractures"
                      />
        </div>
      </div>

       {/* Section Processus */}
      <div className="mt-12">
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl text-secondary mb-4">Un processus de fabrication artisanal et technique</h2>
            <p className="text-base-content/90 mb-6 max-w-3xl">
              Nous thermoformons chaque orthèse sur place, en quelques minutes. Ce processus garantit un ajustement parfait et une mise en place immédiate de votre traitement.
            </p>
             <div className="flex justify-center">
               <div className="w-[800px] h-[400px] max-w-full">
                   <ImagePlaceholder />
                </div>
             </div>
            <p className="text-sm mt-4 text-center text-base-content/70 max-w-2xl">
              Nous travaillons en étroite collaboration avec les chirurgiens et les médecins pour assurer une prise en charge optimale.
            </p>
            <div className="card-actions justify-center mt-6">
              <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Prendre rendez-vous pour une orthèse</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default OrthesesMainPage; 