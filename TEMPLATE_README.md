# Projet Cabinet Colléter

Ce document sert de brief de démarrage pour toute IA (ou humain un peu lent) intervenant sur ce projet.

## 1. Contexte du Projet : Le Cabinet Colléter

Le client est le **Cabinet Colléter**, un cabinet d'orthopédie, orthésie, et posturologie.

**Équipe :**
- **Julie Colléter :** La fondatrice, avec 25 ans d'expérience. Spécialisée dans l'accompagnement long-terme (enfants, adultes, sportifs).
- **Louis Chaudet :** A rejoint en juillet 2023. Vient d'une clinique du sport, avec une expertise spécifique en **orthèses de main sur-mesure** et en post-opératoire.

**Philosophie & Services :**
- **Prestations :** Bilans de posture, semelles orthopédiques sur-mesure, orthèses de main.
- **Démarche :** Très axée sur le patient.
    1.  **Échange :** Comprendre le contexte de la douleur (sport, travail, etc.).
    2.  **Analyse :** Examen dynamique (marche, course), souvent filmé.
    3.  **Fabrication :** Artisanale et sur-mesure, avec des matériaux adaptés à l'usage.
    4.  **Suivi :** Point de contrôle à un mois, puis suivi annuel.
- **Objectif :** Être un cabinet reconnu pour sa **fiabilité, sa rigueur et son professionnalisme**. Ils veulent combattre l'image parfois négative des semelles pour en faire un "confort" et "la botte secrète" d'un patient bien équilibré.

La source principale pour ce contexte est le fichier `_DOCS/brief_notion.md`.

## 2. Structure du Site Web (Basée sur l'existant)

L'architecture du site actuel (ou de la maquette de contenu) est déduite des fichiers `.mhtml` trouvés dans `_DOCS/contenu-web/`. Ces fichiers sont des archives de pages web complètes.

**Pages Principales :**
- **Accueil :** Page d'atterrissage générale.
- **Le Cabinet :** Présentation de l'équipe (Julie & Louis) et de la philosophie.
- **Consultations :** Détail du déroulement d'une consultation.
- **Contact :** Informations de contact et formulaire.
- **Blog :** Articles et actualités.

**Parcours Utilisateurs / Points d'Entrée :**
Le site est pensé pour guider l'utilisateur en fonction de sa situation de départ. Chaque situation correspond à une page dédiée :
- **J'ai une prescription :** Pour les patients envoyés par un médecin.
- **Je viens sans prescription :** Pour ceux qui viennent de leur propre initiative ou par bouche-à-oreille.
- **Raison sportive :** Cible les sportifs (amateurs ou de haut niveau).
- **Cause professionnelle :** Pour les douleurs liées au travail.
- **Pieds sensibles :** S'adresse à une pathologie ou un symptôme spécifique.

## 3. Directives Techniques

- **Source de Vérité :** Le contenu textuel détaillé pour chaque page se trouve probablement dans les fichiers `.mhtml`. Il faudra les parser pour extraire le texte si nécessaire.
- **Objectif Présumé :** Le projet consiste très certainement en une **refonte du site web existant** pour créer une version plus moderne et professionnelle.
- **Stack Technique :** Le projet est initialisé avec **Vite + React**. Tous les développements devront se faire dans cet environnement.
