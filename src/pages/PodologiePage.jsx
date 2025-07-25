import React from 'react';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

const PodologiePage = () => (
  <>
    {/* Hero Section */}
    <div className="hero bg-base-200 py-16 min-h-[50vh]">
      <div className="hero-content container flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <ImagePlaceholder />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Podologie, Posturologie & Semelles Orthopédiques</h1>
          <p className="py-6 text-xl text-base-content/80">L'expertise du cabinet Colléter en analyse posturale et fabrication de semelles sur-mesure pour adultes et enfants.</p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Prendre rendez-vous</a>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Adultes */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-primary">Semelles pour Adultes</h2>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Douleurs chroniques du dos, genoux, pieds</li>
              <li>Sportifs : optimisation des performances et prévention des blessures</li>
              <li>Professionnels : adaptation aux contraintes du travail</li>
              <li>Matériaux adaptés selon l'usage (sport, lifestyle, professionnel)</li>
              <li>Revêtements spécifiques pour chaque activité</li>
            </ul>
          </div>
        </div>

        {/* Section Enfants */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-primary">Suivi de Croissance pour Enfants</h2>
             <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Correction des déséquilibres posturaux dès le plus jeune âge</li>
              <li>Suivi de la croissance et du développement</li>
              <li>Attitudes scoliotiques et asymétries</li>
              <li>Faiblesses ligamentaires</li>
              <li>Prévention des problèmes futurs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Matériaux et Revêtements */}
      <div className="mt-12">
        <div className="card bg-base-200 shadow-xl w-full">
          <div className="card-body">
            <h2 className="card-title text-3xl text-center text-primary mb-4">Matériaux et Revêtements Adaptés</h2>
            <p className="text-base-content/90 mb-4">
              Chaque semelle est conçue avec des matériaux spécifiquement choisis selon votre usage et vos besoins. Notre recherche constante de matériaux innovants nous permet d'offrir des solutions optimales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="card bg-base-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-lg">Sport</h3>
                  <p>Matériaux techniques pour performance et amorti</p>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-lg">Lifestyle</h3>
                  <p>Confort quotidien et discrétion</p>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-lg">Professionnel</h3>
                  <p>Adaptation aux contraintes du travail</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
               <div className="w-[800px] h-[400px] max-w-full">
                  <ImagePlaceholder />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Bilan Postural */}
      <div className="mt-12">
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl text-primary mb-4">Le Bilan Postural Dynamique</h2>
            <p className="text-base-content/90 max-w-2xl">
              Notre analyse de la marche et de la posture en mouvement nous permet de comprendre précisément les dysfonctionnements et de concevoir des semelles parfaitement adaptées à votre morphologie et à vos besoins.
            </p>
            <div className="card-actions justify-center mt-6">
              <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Prendre rendez-vous</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PodologiePage; 