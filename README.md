
  

# Rapport sur le Projet ( https://mellifluous-marshmallow-ef1cf5.netlify.app/)

  

## Introduction

  

Le projet consiste en la création d'une plateforme de financement participatif sur le réseau Ethereum. Cette plateforme permet aux utilisateurs de créer des campagnes de collecte de fonds et aux contributeurs de financer ces campagnes en utilisant la crypto-monnaie Ether.

  

## Réalisation du Projet

  

Le projet a été réalisé en deux parties principales : la mise en place d'un contrat de financement sur la blockchain Ethereum en utilisant Solidity, et le développement d'un site web en React permettant aux utilisateurs de créer et de contribuer à des campagnes.

  

### Contrat de Financement

  

Le contrat de financement a été implémenté en Solidity et comprend les fonctionnalités suivantes :

  

1. **Création de Campagne** (`createCampaign`) :

- Permet à un utilisateur de créer une nouvelle campagne de financement.

- Le créateur spécifie le titre, la description, l'objectif financier, la date limite et une image pour la campagne.

  

2. **Donation à une Campagne** (`donateToCampaign`) :

- Permet à un utilisateur de faire un don à une campagne existante.

- Le montant du don est transféré à l'adresse du créateur de la campagne.

- Le montant total collecté pour la campagne est mis à jour.
-  Si un contributeur fait un don d'1 Ether ou plus, il recevra automatiquement un NFT en récompense.

  

3. **Récupération des Donateurs** (`getDonators`) :

- Renvoie la liste des donateurs et des montants des dons pour une campagne donnée.

  

4. **Récupération des Campagnes** (`getCampaigns`) :

- Renvoie toutes les campagnes créées jusqu'à présent, avec leurs détails.

  

Ces fonctionnalités permettent aux utilisateurs de créer, de contribuer et de suivre les campagnes de financement participatif sur la plateforme Ethereum.

  
  

### Site Web

  

Le site web permet aux utilisateurs de créer des campagnes de financement participatif et de contribuer à des campagnes existantes. Les fonctionnalités principales du site comprennent :

  

- **Création de Campagnes** : Les utilisateurs peuvent créer des campagnes en fournissant les détails requis tels que le titre, la description et l'objectif financier.

- **Contribution** : Les utilisateurs peuvent contribuer à des campagnes en envoyant de l'Ether via une interface conviviale et sécurisée.

- **Gestion des Campagnes** : Les créateurs de campagnes peuvent suivre les contributions et l'avancement de statut de la campagne et identifier les contributeurs.

- **Navigation Intuitive** : Le site offre une navigation fluide, permettant aux utilisateurs de trouver facilement les informations nécessaires.

- **Présentation Visuelle** : Le design du site est attrayant et professionnel, incitant les utilisateurs à s'engager avec les campagnes.

  

## Métriques de Succès

  

Pour évaluer le succès du projet, les métriques suivantes ont été définies :

  
  
  

### Fonctionnalité du Site

La fonctionnalité du site se vérifie par la validation des éléments suivants :

  

- #### Création de Campagne Réussie :

Lorsqu'un utilisateur crée une campagne, le processus se déroule sans erreur et tous les détails spécifiés par l'utilisateur sont enregistrés avec succès. Un identifiant unique est attribué à la nouvelle campagne, permettant son identification ultérieure.

  

- #### Transfert d'Ether Réussi :

Lorsqu'un utilisateur envoie de l'Ether depuis son portefeuille pour contribuer à une campagne, les fonds doivent être transférés de manière sécurisée à l'adresse de la campagne correspondante. Le montant de la contribution doit être correctement enregistré et reflété dans le solde de la campagne.

  

- #### Mise à Jour Automatique des Statistiques de la Campagne:

Après chaque contribution réussie, les statistiques de la campagne doivent être mises à jour automatiquement pour refléter le montant total collecté jusqu'à présent. Les informations telles que le montant total collecté, le pourcentage de l'objectif atteint et le nombre de contributeurs doivent être calculées et affichées en temps réel sur la page de la campagne.

  

### Stabilité du site :

Évaluation de la stabilité du site en vérifiant la fréquence des plantages ou des erreurs pendant l'utilisation.

  

### Performances du site:

Mesure du temps de chargement des pages et de la réactivité du site pour s'assurer qu'il offre une expérience utilisateur fluide.

  

## Justification de l'Intérêt du Contrat de Financement

  

L'utilisation d'un contrat de financement présente plusieurs avantages par rapport à un simple envoi direct d'Ether :

  

- **Facilité d'Utilisation pour les Fondateurs et les Contributeurs** :

La plateforme offre une interface conviviale et intuitive tant pour les fondateurs de campagnes que pour les contributeurs. Les fondateurs peuvent facilement créer et gérer leurs campagnes, tandis que les contributeurs bénéficient d'un processus de contribution simple et sécurisé.

- **Réduction du Risque d'Erreur dans l'Envoi vers une Adresse Erronée** :

En utilisant une plateforme de financement participatif, les contributeurs évitent le risque d'erreur humaine lors de l'envoi d'Ethereum à une adresse incorrecte. La plateforme assure la liaison entre les contributeurs et les campagnes, minimisant ainsi les risques de perte de fonds due à des erreurs d'adresse.

  

- **Visibilité Accrue pour les Campagnes** :

Les plateformes dédiées de financement participatif offrent une visibilité accrue aux campagnes, les mettant en avant devant une audience plus large. Cela permet aux fondateurs de toucher plus de contributeurs potentiels et d'obtenir un soutien plus important pour leurs projets.

  

- **Suivi Détaillé et Rapide des Contributions** :

Sur une plateforme de financement participatif, les fondateurs et les contributeurs peuvent accéder rapidement à un suivi détaillé des contributions. Ils peuvent voir en temps réel combien a été collecté, qui a contribué, et suivre la progression de la campagne de manière transparente, sans avoir à chercher manuellement les données sur les explorateurs de la blockchain.

- **Récompenses uniques** :

 La plateforme offre également des récompenses uniques sous la forme de NFT (Tokens Non-Fongibles). Pour chaque don égal ou supérieur à 1 Ether, les contributeurs recevront automatiquement un NFT en reconnaissance de leur soutien.
