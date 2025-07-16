import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Expertises</h6>
        <Link to="/posturologie-semelles" className="link link-hover">Posturologie & Semelles</Link>
        <Link to="/ortheses-main" className="link link-hover">Orthèses de la Main</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Cabinet</h6>
        <Link to="/cabinet" className="link link-hover">Le cabinet</Link>
        <Link to="/consultation" className="link link-hover">Déroulement d'une consultation</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Ressources</h6>
        <Link to="/etudes-de-cas" className="link link-hover">Études de Cas</Link>
        <Link to="/pro" className="link link-hover">Espace Professionnels</Link>
        <Link to="/faq" className="link link-hover">Questions fréquentes</Link>
        <a className="link link-hover">Mentions légales</a>
        <a className="link link-hover">Politique de confidentialité</a>
      </nav>
    </footer>
  );
};

export default Footer; 