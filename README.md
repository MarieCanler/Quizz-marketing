# Quiz Marketing — quiz en direct façon Kahoot

20 questions (10 QCM + 10 vrai ou faux) · 30 s par question · note sur 10 · classement en temps réel.

## Barème (celui du sujet)
- Bonne réponse : **+0,5 pt**
- Pas de réponse : **0**
- Mauvaise réponse : **−0,5 pt**

À score égal, le plus rapide (temps de réponse cumulé) passe devant.
Questions, réponses, explications et barème : `questions.js`.

## Lancer en local
```bash
npm install
npm start
```
- Écran animateur (vidéoprojecteur) : http://localhost:3000/host
- Participants (téléphone) : http://localhost:3000 — ou scanner le QR code affiché

## Déroulé
1. L'animateur ouvre `/host` et clique sur **Créer la partie** : un code PIN et un QR code s'affichent.
2. Les participants entrent le PIN et leur pseudo : leurs noms apparaissent en direct.
3. **Lancer le quiz** → question + chrono de 30 s.
4. Correction (avec l'explication quand il y en a une) → **Classement** de tous les joueurs → question suivante.
5. À la fin : podium et classement complet.

## Déployer sur Render (gratuit)
1. Mettre ces fichiers dans un dépôt GitHub.
2. render.com → **New → Web Service** → choisir le dépôt.
3. Build command : `npm install` · Start command : `npm start` · Instance : Free.
4. Ouvrir `https://<votre-app>.onrender.com/host`.

En offre gratuite, le service se met en veille : ouvrez la page une minute avant le cours.
