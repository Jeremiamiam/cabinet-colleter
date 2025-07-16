import React from 'react';
import { Link } from 'react-router-dom';

const ConsultationPage = () => (
    <>
    <div className="hero bg-base-200 py-16 min-h-[50vh]">
        <div className="hero-content text-center">
            <div className="max-w-3xl">
                <h1 className="text-5xl font-bold">Déroulement d'une consultation</h1>
                <p className="py-6 text-lg">De la prise de contact à votre suivi, nous vous expliquons tout. Aucune surprise, juste un accompagnement clair et professionnel.</p>
            </div>
        </div>
    </div>

    <div className="p-8 max-w-5xl mx-auto">
        {/* Timeline ou étapes ici */}
        <div className="mt-12">
            <ul className="steps steps-vertical lg:steps-horizontal w-full">
                <li className="step step-primary">
                  <div className="text-left p-4">
                    <h3 className="text-lg font-bold">1. Prise de RDV</h3>
                    <p>Via Doctolib ou par téléphone, pour une première évaluation de vos besoins.</p>
                  </div>
                </li>
                <li className="step step-primary">
                  <div className="text-left p-4">
                    <h3 className="text-lg font-bold">2. Examen Clinique</h3>
                    <p>Analyse complète de votre posture et de vos mouvements pour un diagnostic précis.</p>
                  </div>
                </li>
                <li className="step step-primary">
                  <div className="text-left p-4">
                    <h3 className="text-lg font-bold">3. Plan de Traitement</h3>
                    <p>Nous vous proposons des solutions sur-mesure (semelles, orthèses) et validons ensemble le plan.</p>
                  </div>
                </li>
                <li className="step">
                  <div className="text-left p-4">
                    <h3 className="text-lg font-bold">4. Suivi</h3>
                    <p>Un contrôle est prévu pour assurer l'efficacité du traitement et votre entière satisfaction.</p>
                  </div>
                </li>
            </ul>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-8 mt-16">
            <div className="card bg-base-100 shadow-xl w-full lg:w-2/3">
                <div className="card-body">
                    <h2 className="card-title">Ce que vous devez apporter</h2>
                    <p>Pour un diagnostic le plus précis possible, n'oubliez pas d'amener :</p>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                        <li>Votre ordonnance médicale si vous en avez une.</li>
                        <li>Vos anciens examens (radios, IRM...).</li>
                        <li>Les chaussures que vous portez le plus souvent (ville et sport).</li>
                        <li>Vos anciennes semelles si vous en possédez.</li>
                    </ul>
                </div>
            </div>
            <div className="card bg-base-200 shadow w-full lg:w-1/3">
                <div className="card-body items-center text-center justify-center">
                    <h2 className="card-title">Encore des questions ?</h2>
                    <p>Consultez notre foire aux questions.</p>
                    <div className="card-actions">
                    <Link to="/faq" className="btn btn-primary">Voir la FAQ</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
);

export default ConsultationPage; 