const fs = require('fs');

const inputFile = './colleter/_DOCS/contenu-web/contenu_texte.txt';
const outputFile = './colleter/_DOCS/contenu_extrait_brut.md';

console.log("Plan Z... On passe en mode full bourrin.");

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error("L'erreur qui me hante:", err);
        return;
    }

    // On vire le HTML de la manière la plus sale possible
    let text = data.replace(/<style[^>]*>.*?<\\/style>/gs, '')
                   .replace(/<script[^>]*>.*?<\\/script>/gs, '')
                   .replace(/<[^>]+>/g, '\n') // Remplace chaque tag par un saut de ligne
                   .replace(/&nbsp;/g, ' ')
                   .replace(/\\s*\\n\\s*/g, '\n') // Normalize les sauts de ligne
                   .replace(/(\\n){3,}/g, '\n\n'); // Pas plus de deux sauts de ligne consécutifs

    // On dégage les entêtes de fichier
    text = text.replace(/==================================================/g, '---')
               .replace(/Contenu du fichier:.*?\\n/g, '');

    fs.writeFile(outputFile, text, 'utf8', (err) => {
        if (err) {
            console.error("La malédiction continue:", err);
            return;
        }
        console.log(`Fichier ${outputFile} créé. Va voir. Si c'est de la merde, c'est la merde du fichier source.`);
    });
}); 