import React from 'react';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

const PosturologiePage = () => (
  <>
    {/* Hero Section */}
    <div className="hero bg-base-200 py-16 min-h-[50vh]">
      <div className="hero-content container flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <ImagePlaceholder />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Expertise en Posturologie & Semelles Orthopédiques</h1>
          <p className="py-6 text-xl text-base-content/80">Le pôle d'expertise de Julie Colléter, pour une analyse complète de votre posture et des solutions 100% sur-mesure.</p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Prendre rendez-vous pour un bilan</a>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Pour Qui ? */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-primary">Pour qui s'adresse la posturologie ?</h2>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Sportifs cherchant à optimiser leurs performances</li>
              <li>Enfants et adolescents en période de croissance</li>
              <li>Adultes souffrant de douleurs chroniques (dos, genoux, pieds)</li>
              <li>Personnes âgées cherchant à améliorer leur stabilité</li>
            </ul>
          </div>
        </div>

        {/* Section Pathologies Traitées */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-primary">Pathologies traitées</h2>
             <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Lombalgies, dorsalgies, cervicalgies</li>
              <li>Gonalgies, coxalgies (douleurs genou, hanche)</li>
              <li>Tendinopathies (tendon d'Achille, syndrome de l'essuie-glace)</li>
              <li>Aponévrosite plantaire, épine calcanéenne</li>
              <li>Syndromes de Morton</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Bilan Postural */}
      <div className="mt-12">
        <div className="card bg-base-200 shadow-xl w-full">
          <div className="card-body">
            <h2 className="card-title text-3xl text-center text-primary mb-4">Le Bilan Postural Dynamique : Notre Approche</h2>
            <p className="text-base-content/90 mb-4">
              Nous réalisons un examen complet et approfondi pour comprendre les causes de vos déséquilibres. Cet examen inclut une analyse sur plateforme de stabilométrie et une analyse vidéo de votre marche et de votre course pour une précision maximale.
            </p>
            <div className="flex justify-center">
               <div className="w-[800px] h-[400px] max-w-full">
                  <ImagePlaceholder />
               </div>
            </div>
          </div>
        </div>
      </div>

       {/* Section Semelles */}
      <div className="mt-12">
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl text-primary mb-4">Des Semelles Orthopédiques Uniques, Comme Vous</h2>
            <p className="text-base-content/90 max-w-2xl">
              Fini les semelles standards. Nous fabriquons vos semelles sur-mesure dans notre propre atelier. Chaque paire est conçue artisanalement pour s'adapter parfaitement à votre pied, votre pathologie et votre quotidien.
            </p>
            <div className="card-actions justify-center mt-6">
              <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Prendre rendez-vous pour un bilan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PosturologiePage; 