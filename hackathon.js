let candidatures = [];
let count=0;
function ajouterCandidature(nom,age, projet){
  const cand={
  id: count++,
  nom: nom,
  age: age,
  projet: projet,
  statut: "en attente"
  }
  return candidatures.push(cand);
}
function afficherToutesLesCandidatures(){
   candidatures.forEach(candidat => {
    console.log(` id: ${candidat.id}`);
    console.log(` nom: ${candidat.nom}`);
    console.log(`age: ${candidat.age}`);
    console.log(` projet: ${candidat.projet}`);
    console.log(` statut: ${candidat.statut}`);
  });
 }
function validerCandidature(id) {
  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].id === id) {
      candidatures[i].statut = "validée";
      break;
    }
  }
 }
function rejeterCandidature(id){
  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].id === id) {
      candidatures[i].statut = "rejetée";
      break;
    }
}
}
function rechercherCandidat(nom){
  const search = nom.toLowerCase();
  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].nom.toLowerCase().includes(search)) {
      console.log(`id: ${candidatures[i].id}`);
      console.log(`nom: ${candidatures[i].nom}`);
      console.log(`age: ${candidatures[i].age}`);
      console.log(`projet: ${candidatures[i].projet}`);
      console.log(`statut: ${candidatures[i].statut}`);
      
    }
  }
}