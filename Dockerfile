# Image de base Node.js
FROM node:18-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers
COPY package.json .
COPY app.js .
COPY app.test.js .

# Installation des dépendances
RUN npm install

# Port exposé
EXPOSE 3000

# Commande de démarrage
CMD ["node", "app.js"]