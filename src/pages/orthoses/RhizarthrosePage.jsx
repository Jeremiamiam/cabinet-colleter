import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../../components/common/ImagePlaceholder';
import WarningBanner from '../../components/common/WarningBanner';

const RhizarthrosePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16 min-h-[40vh]">
        <div className="hero-content container text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Rhizarthrose : Arthrose du Pouce</h1>
            <p className="py-6 text-xl text-base-content/80">
              L'arthrose de l'articulation trapézo-métacarpienne, une pathologie fréquente qui peut être efficacement traitée par des orthèses sur-mesure.
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
          message="La prise en charge de la rhizarthrose nécessite une prescription médicale. Consultez votre médecin traitant ou un rhumatologue."
          type="warning"
        />

        {/* Section Qu'est-ce que la rhizarthrose */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-4">Qu'est-ce que la rhizarthrose ?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-base-content/90 mb-4">
                  La rhizarthrose est l'arthrose de l'articulation à la base du pouce (articulation trapézo-métacarpienne). 
                  Cette pathologie est très fréquente, particulièrement chez les femmes après 50 ans, et peut considérablement 
                  altérer la qualité de vie en limitant les gestes du quotidien.
                </p>
                <p className="text-base-content/90">
                  L'usure du cartilage entraîne des douleurs, une raideur et une déformation progressive de l'articulation, 
                  rendant difficiles les gestes de préhension comme ouvrir un bocal, tourner une clé ou saisir des objets.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64">
                  <ImagePlaceholder alt="Anatomie de l'articulation du pouce" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Symptômes */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Symptômes de la rhizarthrose</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Symptômes principaux :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Douleur à la base du pouce</strong> lors des mouvements de préhension</li>
                  <li><strong>Raideur matinale</strong> avec difficulté à mobiliser le pouce</li>
                  <li><strong>Douleurs nocturnes</strong> qui peuvent réveiller</li>
                  <li><strong>Difficulté à saisir</strong> des objets (bocaux, clés, stylos)</li>
                  <li><strong>Déformation progressive</strong> de l'articulation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Facteurs aggravants :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mouvements répétitifs de la main</li>
                  <li>Professions manuelles</li>
                  <li>Antécédents familiaux</li>
                  <li>Âge et ménopause</li>
                  <li>Certaines activités sportives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Nos Solutions */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Nos solutions orthétiques sur-mesure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Orthèse de repos nocturne</h3>
                  <p className="text-sm mb-3">
                    Portée la nuit pour maintenir le pouce dans une position de repos et soulager les douleurs nocturnes.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Moulage direct sur votre main</li>
                    <li>Position de repos optimale</li>
                    <li>Matériaux hypoallergéniques</li>
                    <li>Confort maximal pour le sommeil</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Orthèse fonctionnelle diurne</h3>
                  <p className="text-sm mb-3">
                    Permet de continuer les activités quotidiennes tout en protégeant l'articulation.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Maintien de la mobilité</li>
                    <li>Protection lors des gestes</li>
                    <li>Discrétion et confort</li>
                    <li>Adaptation à votre mode de vie</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <ImagePlaceholder alt="Exemples d'orthèses pour rhizarthrose" />
            </div>
          </div>
        </div>

        {/* Section Processus */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Notre processus de prise en charge</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Évaluation</h3>
                <p className="text-sm">Analyse de votre pathologie et de vos besoins spécifiques</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Fabrication</h3>
                <p className="text-sm">Thermoformage sur-mesure directement sur votre main</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Suivi</h3>
                <p className="text-sm">Ajustements et conseils pour optimiser l'efficacité</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à soulager votre rhizarthrose ?</h2>
          <p className="text-base-content/70 mb-6">
            Nos orthèses sur-mesure peuvent considérablement améliorer votre confort quotidien.
          </p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </>
  );
};

export default RhizarthrosePage; 