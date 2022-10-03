// 1.---------------------------------  CLoner un objet   ---------------------------------  //
const utilisateur = {
  nom: "Johan",
  age: 35,
  taille: 1.9,
};
const utilisateur2 = { ...utilisateur, poids: 103 };
console.log(utilisateur2);

// 2.---------------------------------  Assembler des objets   ---------------------------------  //
const panierFruitsRouges = {
  pommes: 2,
  fraises: 5,
  cerises: 10,
};
const panierFruitsVerts = {
  kiwis: 3,
  poires: 2,
  corossol: 5,
};
const panierFruits = { ...panierFruitsRouges, ...panierFruitsVerts };
console.log(panierFruits);

// 3.---------------------------------  Destructurer un objet   ---------------------------------  //
const utilisateurSuivant = {
  nom: "Johan",
  age: 35,
  taille: 1.9,
};
const { nom, age, taille } = utilisateurSuivant;
console.log(nom, age, taille);

// 4.---------------------------------  Destructurer un objet avec des alias   ---------------------------------  //
const utilisateurSuivant2 = {
  nom: "Johan",
  age: 35,
  taille: 1.9,
};
const { nom: nomUtilisateur, age: ageUtilisateur, taille: tailleUtilisateur } = utilisateurSuivant2;
console.log(nomUtilisateur, ageUtilisateur, tailleUtilisateur);

// 5.---------------------------------  Destructurer un objet avec des valeurs par défaut   ---------------------------------  //

const utilisateurSuivant3 = {
  nom: "Johan",
  age: 35,
  taille: 1.9,
};
const { nom: nomUtilisateur3, age: ageUtilisateur3, taille: tailleUtilisateur3, poids = 100 } = utilisateurSuivant3;
console.log(nomUtilisateur, ageUtilisateur, tailleUtilisateur, poids);

// 3.--------------------------------- Itérer avec for in   ---------------------------------  //
const chatsRefuge = {
  siamois: 2,
  persan: 5,
  maineCoon: 1,
  ragdoll: 3,
  sphynx: 1,
};
for (const chat in chatsRefuge) {
  //   console.log(chat, chatsRefuge[chat]);
  console.log(`Il y a ${chatsRefuge[chat]} ${chat} au refuge`);
}

// 4.--------------------------------- Itérer avec for of   ---------------------------------  //
const chatsAuRefuge = {
  siamois: 2,
  persan: 5,
  maineCoon: 1,
  ragdoll: 3,
  sphynx: 1,
};
for (const chat of Object.keys(chatsAuRefuge)) {
  console.log(`Il y a ${chatsAuRefuge[chat]} ${chat} au refuge`);
}

// 5.---------------------------------  Itérer avec forEach   ---------------------------------  //
const chatsAuRefuge2 = {
  siamois: 2,
  persan: 5,
  maineCoon: 1,
  ragdoll: 3,
  sphynx: 1,
};
Object.keys(chatsAuRefuge2).forEach((chat) => {
  console.log(`Il y a ${chatsAuRefuge2[chat]} ${chat} au refuge`);
});

// 6.---------------------------------  Itérer avec map   ---------------------------------  //
const chatsAuRefuge3 = {
  siamois: 2,
  persan: 5,
  maineCoon: 1,
  ragdoll: 3,
  sphynx: 1,
};
const chatsAuRefuge4 = Object.keys(chatsAuRefuge3).map((chat) => {
  return `Il y a ${chatsAuRefuge3[chat]} ${chat} au refuge`;
});
console.log(chatsAuRefuge4);

// 7.---------------------------------  Itérer avec filter   ---------------------------------  //
const chatsAuRefuge5 = {
  siamois: 2,
  persan: 5,
  maineCoon: 1,
  ragdoll: 3,
  sphynx: 1,
};

const chatsAuRefuge6 = Object.keys(chatsAuRefuge5).filter((chat) => {
  return chatsAuRefuge5[chat] > 2;
});
console.log(chatsAuRefuge6);

// 8.---------------------------------  Enlever une propriété (Destructuring)   ---------------------------------  //
const voiture = {
  marque: "BMW",
  modele: "Série 3 E90 335i N55",
  couleur: "gris",
  annee: 2012,
  kilometrage: 100000,
};

const sansCouleur = ({ couleur, ...voitureSansCouleur }) => {
  console.log(couleur);
  return voitureSansCouleur;
};
console.log(sansCouleur(voiture));

// 9.---------------------------------  Déstructurer en enlevant le nom   ---------------------------------  //
const pays = {
  nom: "Martinique",
  population: 375265,
  superficie: 1128,
  capitale: "Fort-de-France",
};
const { nom: nomDePays } = pays;
console.log(nomDePays);

// 10.---------------------------------  Additionner toutes les valeurs d'un objet rapidement  ---------------------------------  //
const depenses = {
  loyer: 1200,
  nourriture: 300,
  eau: 50,
  electricite: 100,
  telephone: 50,
  internet: 50,
  assurance: 100,
  transport: 100,
  loisirs: 200,
  autres: 100,
};
const totalDepenses = Object.values(depenses).reduce((total, depense) => total + depense, 0);
console.log(totalDepenses);
