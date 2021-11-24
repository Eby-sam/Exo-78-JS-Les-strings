let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
    "incididunt ut labore et dolore magna aliqua";
// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);

//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let position = monTexte.indexOf("i");
console.log(position);

let positionID = document.getElementById("position");
positionID.innerHTML = position;

let newText = monTexte.toUpperCase(monTexte);
console.log(newText);

let maChaine = document.getElementById("chaineMaj");
maChaine.innerHTML = newText;

for(let i = 0;i < a.length; i++){
    if(i === maChaine.length){
        alert("lettre a trouvé");
    }
}





