import React from 'react';

const ContactPage = () => (
    <>
        <div className="hero bg-base-200 py-16">
            <div className="hero-content text-center">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-bold">Nous Contacter</h1>
                    <p className="py-6 text-lg">Une question ? Besoin de prendre rendez-vous ? Retrouvez toutes nos coordonnées ici. Nous sommes disponibles pour vous répondre.</p>
                </div>
            </div>
        </div>

        <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
                {/* Infos Pratiques */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Informations Pratiques</h2>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-start">
                                <span className="mr-4 mt-1">📍</span>
                                <div>
                                    <h3 className="font-bold">Adresse</h3>
                                    <p>123 Rue de l'Exemple, 75000 Paris</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-4 mt-1">📞</span>
                                <div>
                                    <h3 className="font-bold">Téléphone</h3>
                                    <a href="tel:+33123456789" className="link link-hover">01 23 45 67 89</a>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <span className="mr-4 mt-1">⏰</span>
                                <div>
                                    <h3 className="font-bold">Horaires</h3>
                                    <p>Du Lundi au Vendredi<br/>De 9h00 à 19h00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Carte et RDV */}
                <div>
                    <div className="card bg-base-100 shadow-xl mb-8">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">Plan d'Accès</h2>
                            <div className="w-full h-64 bg-base-300 rounded-box flex items-center justify-center">
                                <p className="text-base-content/50">[Intégration Google Maps]</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-primary text-primary-content shadow-xl">
                         <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Prendre Rendez-vous</h2>
                            <p>Pour une prise en charge rapide et efficace, réservez votre créneau directement en ligne.</p>
                            <div className="card-actions mt-4">
                                <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-lg">
                                    Rendez-vous sur Doctolib
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default ContactPage; 